import React, {useEffect} from 'react';
import {useDeleteByIdMutation, useGetUserCartItemQuery} from "../features/cart/cartApiSlice.ts";
import CartItem from "./CartItem.tsx";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {removeItem, selectCartTotalPrice, setCartItems} from "../features/cart/cartSlicer.ts";
import {ICart} from "../model/ICart.ts";
import {Link} from "react-router-dom";


interface CartProps {
    onClose: () => void;
}
const Cart: React.FC<CartProps> = ({onClose}) => {
    const [deleteById] = useDeleteByIdMutation();
    const cartsItems = useAppSelector(state => state.cart.cartItems);
    const totalPrice = useAppSelector(selectCartTotalPrice);
    const dispatch = useAppDispatch();
    const handlerRemove = (id: number) => {
        try {
            deleteById(id)
            dispatch(removeItem(id))
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="mx-auto bg-white p-6 ">
            {
                cartsItems.map((cart) => {
                    return <CartItem
                        key={cart.id}
                        quantity={cart.quantity}
                        image={cart.book.image.buffer}
                        title={cart.book.title}
                        price={cart.book.price}
                        remove={() => handlerRemove(cart.id)}
                    />
                })
            }
            <div className="flex items-center justify-between mt-4">
                <p className="text-xl font-semibold">Total:</p>
                <p className="text-xl">${totalPrice}</p>
            </div>
            <div className='m-4' onClick={onClose}>
                <Link to="/checkout" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >Checkout
                </Link>
            </div>
        </div>
    );
};

export default Cart;