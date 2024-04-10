import React from 'react';
import {MdOutlineMail} from "react-icons/md";
import {PiCardholder} from "react-icons/pi";
import {CiCreditCard1} from "react-icons/ci";

interface PaymentDetailsProps {
    userEmail: string;
    totalPrice: number;
    shipping: number;
}
const PaymentDetails:React.FC<PaymentDetailsProps>= ({userEmail,totalPrice,shipping}) => {
    return (
        <div>
            <p className="text-xl font-medium">Payment Details</p>
            <p className="text-gray-400">Complete your order by providing your payment details.</p>
            <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Email</label>
            <div className="relative">
                <input type="text" id="email" name="email"
                       disabled
                       className="w-full disabled:bg-gray-200 rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                       placeholder="your.email@gmail.com"
                       value={userEmail}
                />
                <div
                    className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <MdOutlineMail className="h-4 w-4 text-gray-400"/>
                </div>
            </div>
            <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
            <div className="relative">
                <input type="text" id="card-holder" name="card-holder"
                       className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                       placeholder="Your full name here"/>
                <div
                    className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <PiCardholder className="h-4 w-4 text-gray-400"/>
                </div>
            </div>
            <label htmlFor="card-no" className="mt-4 mb-2 block text-sm font-medium">Card Details</label>
            <div className="flex">
                <div className="relative w-7/12 flex-shrink-0">
                    <input type="text" id="card-no" name="card-number"
                           className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                           placeholder="xxxx-xxxx-xxxx-xxxx"/>
                    <div
                        className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                        <CiCreditCard1 className="h-4 w-4 text-gray-400"/>
                    </div>
                </div>
                <input type="text" name="credit-expiry"
                       className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                       placeholder="MM/YY"/>
                <input type="text" name="credit-cvc"
                       className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                       placeholder="CVC"/>
            </div>
            <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Subtotal</p>
                    <p className="font-semibold text-gray-900">${totalPrice}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Shipping</p>
                    <p className="font-semibold text-gray-900">${shipping}</p>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">${totalPrice + shipping}</p>
            </div>
        </div>
    );
};

export default PaymentDetails;