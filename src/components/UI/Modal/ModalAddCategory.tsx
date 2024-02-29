import React from 'react';
import Modal from "./Modal.tsx";
import AddCategoryFrom from "../../Forms/AddCategoryFrom.tsx";

interface ModalAddCategoryProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;

}
const ModalAddCategory:React.FC<ModalAddCategoryProps> = ({title,isOpen,onClose}) => {
    return (
        <>
            <Modal title={title} isOpen={isOpen} onClose={onClose}>
                <AddCategoryFrom/>
            </Modal>
        </>
    );
};

export default ModalAddCategory;