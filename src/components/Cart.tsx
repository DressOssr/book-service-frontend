import React, {useEffect} from 'react';
import {useAddToCartMutation, useDeleteByIdMutation, useGetUserCartItemQuery} from "../features/cart/cartApiSlice.ts";
import CartItem from "./CartItem.tsx";
import {ICartItems} from "../model/ICartItems.ts";


const Cart: React.FC = () => {
    const {data: carts, isLoading} = useGetUserCartItemQuery()
    const [deleteById] = useDeleteByIdMutation();
    const [cartsItems, setCartsItems] = React.useState<ICartItems[]>([]);
    useEffect(() => {
        if (!isLoading) {
            setCartsItems(carts || []);
        }
    }, [carts, isLoading]);

    const handlerRemove = (id: number) => {
        try {
            deleteById(id)
            setCartsItems(cartsItems.filter(cart => cart.id !== id))
            console.log(cartsItems)
        }
        catch (e) {
            console.log(e)
        }
    }
    if (!carts || isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="mx-auto bg-white p-6 ">
            {cartsItems.map(cart => {
                    return <CartItem
                        key={cart.id}
                        id={cart.id}
                        image={cart.book.image.buffer}
                        title={cart.book.title}
                        price={cart.book.price}
                        quantity={cart.quantity}
                        remove={() => handlerRemove(cart.id)}
                    />
                }
            )}
            <div className="flex items-center justify-between mt-4">
                <p className="text-xl font-semibold">Total:</p>
                <p className="text-xl">$44.98</p>
            </div>
            <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">Checkout</button>
        </div>
    );
};

export default Cart;