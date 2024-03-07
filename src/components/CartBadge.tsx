import React, {useState} from 'react';
import {FaCartShopping} from "react-icons/fa6";
import Modal from './UI/Modal/Modal';
import Cart from "./Cart.tsx";

interface CartBadgeProps {
    count: number;
}

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
const CartBadge: React.FC<CartBadgeProps> = ({count}) => {
    let subtitle: HTMLHeadingElement;
    const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);

    function toggleModal() {
        setModalIsOpen(!modalIsOpen);
    }


    return (
        <>
            <div className="px-4 lg:px-5 py-2 lg:py-2.5 hover:scale-95 rounded-3xl bg-black"
                 onClick={toggleModal}
            >
                <FaCartShopping className="text-white rounded inline-block w-5 h-5"/>
                <span className="text-white ml-2 font-medium align-top">{count}</span>

            </div>
            <Modal
                title="Cart"
                isOpen={modalIsOpen}
                onClose={toggleModal}
            >
               <><Cart isClose={toggleModal}/></>
            </Modal>
        </>
    );
};

export default CartBadge;