import React, {useEffect} from 'react';
import {useDeleteByIdMutation, useGetUserCartItemQuery} from "../features/cart/cartApiSlice.ts";
import CartItem from "./CartItem.tsx";
import {ICart} from "../model/ICart.ts";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {removeItem, setCartItems} from "../features/cart/cartSlicer.ts";


const Cart: React.FC = () => {

    const [deleteById] = useDeleteByIdMutation();
    const cartsItems = useAppSelector(state => state.cart.cartItems);
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
                <p className="text-xl">$44.98</p>
            </div>
            <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">Checkout</button>
        </div>
    );
};

export default Cart;