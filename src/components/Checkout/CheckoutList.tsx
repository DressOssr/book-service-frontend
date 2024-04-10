import React from 'react';
import CheckoutItems from "./CheckoutItems.tsx";
import {ICart} from "../../model/ICart.ts";

interface CartItem {
    cartItems:ICart[]
}
const CheckoutList:React.FC<CartItem> = ({cartItems}) => {
    return (
        <>
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
        </>
    );
};

export default CheckoutList;