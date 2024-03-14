import React, {useEffect, useState} from 'react';
import {FaCartShopping} from "react-icons/fa6";
import Modal from './UI/Modal/Modal';
import Cart from "./Cart.tsx";
import CartModal from "./UI/Modal/CartModal.tsx";
import {useGetFavoriteByUserQuery} from "../features/favorite/favoriteApiSlice.ts";
import {useGetUserCartItemQuery} from "../features/cart/cartApiSlice.ts";
import {selectCartItemsCount, setCartItems} from "../features/cart/cartSlicer.ts";
import {setFavoriteItems} from "../features/favorite/favoriteSlice.ts";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
const CartBadge: React.FC = () => {
    const {data: carts, isLoading:isLoadingCarts} = useGetUserCartItemQuery();
    const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
    const quantity = useAppSelector(selectCartItemsCount)
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!isLoadingCarts) {
            dispatch(setCartItems(carts || []))
        }
    }, [isLoadingCarts]);
    function toggleModal() {
        setModalIsOpen(!modalIsOpen);
    }
    return (
        <>
            <div className="px-4 lg:px-5 py-2 lg:py-2.5 hover:scale-105 rounded-3xl bg-black"
                 onClick={toggleModal}
            >
                <FaCartShopping className="text-white rounded inline-block w-5 h-5"/>
                <span className="text-white ml-2 font-medium align-top">{quantity}</span>

            </div>
            <CartModal  onClose={toggleModal} isOpen={modalIsOpen}/>
        </>
    );
};

export default CartBadge;