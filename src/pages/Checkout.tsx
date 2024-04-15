import React, {useState} from 'react';
import {clearCart, selectCartItems, selectCartTotalPrice} from "../features/cart/cartSlicer.ts";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import CheckoutItems from "../components/Checkout/CheckoutItems.tsx";
import {MdOutlineMail} from "react-icons/md";
import {PiCardholder} from "react-icons/pi";
import {CiCreditCard1} from "react-icons/ci";
import {selectCurrentUserEmail} from "../features/user/userSlicer.ts";
import {OrderDto, useCreateOrderMutation} from "../features/order/ordeApiSlice.ts";
import ShippingMethod from "../components/Checkout/ShippingMethod.tsx";
import PaymentDetails from "../components/Checkout/PaymentDetails.tsx";
import CheckoutList from "../components/Checkout/CheckoutList.tsx";
import {ICart} from "../model/ICart.ts";

const Checkout = () => {
    const cartItems = useAppSelector(selectCartItems);
    const [createOrder, {isLoading}] = useCreateOrderMutation();
    const totalPrice = useAppSelector(selectCartTotalPrice);
    const [shipping, setShipping] = useState<number>(0);
    const userEmail = useAppSelector(selectCurrentUserEmail);
    const dispatch = useAppDispatch();
    const handleShipping = (price: number) => {
        setShipping(price);
    }
    const handleSubmit = async () => {
        //TODO VALIDATION CARD
        const orderDto: OrderDto = {
            subtotal: totalPrice,
            shippingPrice: shipping,
            books: cartItems.map((item:ICart) => {
                return {
                    bookId: item.book.id,
                    quantity: item.quantity
                }
            })
        }
        try {
            await createOrder(orderDto);
            dispatch(clearCart());
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <div className="px-4 pt-8">
                    <CheckoutList cartItems={cartItems}/>
                    <p className="mt-8 text-lg font-medium">Shipping Methods</p>
                    <ShippingMethod
                        handleShipping={() => handleShipping(10)}
                        title="TEST1 Delivery"
                        delivery="Delivery: 4-7 Days"
                    />
                    <ShippingMethod
                        handleShipping={() => handleShipping(10)}
                        title="TEST2 Delivery"
                        delivery="Delivery: 2-4 Days"
                    />
                </div>
                <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                    <PaymentDetails
                        shipping={shipping}
                        totalPrice={totalPrice}
                        userEmail={userEmail}
                    />
                    <button
                        className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
                        onClick={handleSubmit}
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </>
    );
};

export default Checkout;