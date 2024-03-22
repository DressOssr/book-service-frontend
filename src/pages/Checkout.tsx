import React, {useState} from 'react';
import {selectCartItems, selectCartTotalPrice} from "../features/cart/cartSlicer.ts";
import {useAppSelector} from "../app/hooks.ts";
import CheckoutItems from "../components/CheckoutItems.tsx";
import {MdOutlineMail} from "react-icons/md";
import {PiCardholder} from "react-icons/pi";
import {CiCreditCard1} from "react-icons/ci";
import {useGetUserQuery} from "../features/user/userApiSlice.ts";
import {selectCurrentUserEmail} from "../features/user/userSlicer.ts";

const Checkout = () => {
    const cartItems = useAppSelector(selectCartItems);
    const totalPrice = useAppSelector(selectCartTotalPrice);
    const [shipping, setShipping] = useState<number>(0);
    const userEmail = useAppSelector(selectCurrentUserEmail);
    const handleShipping = (price: number) => {
        setShipping(price)
    }
    return (
        <>
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <div className="px-4 pt-8">
                    <p className="text-xl font-medium">Order Summary</p>
                    <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
                    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        {cartItems.map((item) => {
                            return (
                                <CheckoutItems
                                    key={item.id}
                                    image={item.book.image.buffer}
                                    title={item.book.title}
                                    price={item.book.price}
                                    author={item.book.subtitle}/>
                            )
                        })
                        }
                    </div>

                    <p className="mt-8 text-lg font-medium">Shipping Methods</p>
                    <form className="mt-5 grid gap-6">
                        <div className="relative" onClick={() => handleShipping(10)}>
                            <input className="peer hidden" id="radio_1" type="radio" name="radio" checked/>
                            <span
                                className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                            <label
                                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                                htmlFor="radio_1">
                                <div className="ml-5">
                                    <span className="mt-2 font-semibold">TEST1 Delivery</span>
                                    <p className="text-slate-500 text-sm leading-6">Delivery: 4-7 Days</p>
                                </div>
                            </label>
                        </div>
                        <div className="relative" onClick={() => handleShipping(18)}>
                            <input className="peer hidden" id="radio_2" type="radio" name="radio"/>
                            <span
                                className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                            <label
                                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                                htmlFor="radio_2">
                                <div className="ml-5">
                                    <span className="mt-2 font-semibold">TEST2 Delivery</span>
                                    <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                                </div>
                            </label>
                        </div>
                    </form>
                </div>
                <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                    <p className="text-xl font-medium">Payment Details</p>
                    <p className="text-gray-400">Complete your order by providing your payment details.</p>
                    <div className="">
                        <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Email</label>
                        <div className="relative">
                            <input type="text" id="email" name="email"
                                   className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
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
                                <input type="text" id="card-no" name="card-no"
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
                    <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place
                        Order
                    </button>
                </div>
            </div>
        </>
    );
};

export default Checkout;