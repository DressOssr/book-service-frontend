import React from 'react';
import {IBook} from "../model/IBook.ts";

interface CartItemProps {
    id: number;
    quantity: number;
    title: string;
    price: number;
    image: string;
    remove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
                                               id,
                                               quantity,
                                               title,
                                               price,
                                               image,
                                               remove
                                           }) => {
    const handelClick = () => {
        remove()
    }
    return (
        <>
            <div className="flex items-center justify-between border-b-2 pb-2 mb-4">

                <div className="flex items-center">
                    <img src={"data:image/png;base64," + image} alt="Product 1" className="w-20 object-cover rounded"/>
                    <div className="ml-4">
                        <p className="font-semibold">{title}</p>
                        <p className="text-gray-600">{price}</p>
                    </div>
                </div>
                <button className="text-red-500 hover:text-red-700 ml-10"
                        onClick={handelClick}
                >
                    Remove
                </button>
            </div>
        </>
    );
};

export default CartItem;