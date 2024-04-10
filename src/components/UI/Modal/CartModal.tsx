import React, {ReactElement} from 'react';
import Cart from "../../Cart/Cart.tsx";
import Modal from "./Modal.tsx";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}
const CartModal:React.FC<ModalProps> = ({ isOpen, onClose,}) => {
    return (
        <Modal
            title="Cart"
            isOpen={isOpen}
            onClose={onClose}
        >
            <Cart onClose={onClose}/>
        </Modal>
    );
};

export default CartModal;