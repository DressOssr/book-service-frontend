import React, {FormEvent, useState} from 'react';
import Modal from "./Modal.tsx";
import AddAuthorForm from "../../Forms/AddAuthorForm.tsx";

interface ModalAddAuthorProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;

}
const ModalAddAuthor:React.FC<ModalAddAuthorProps> = ({title,isOpen,onClose}) => {
    return (
        <>
            <Modal title={title} isOpen={isOpen} onClose={onClose}>
               <AddAuthorForm/>
            </Modal>
        </>
    );
};

export default ModalAddAuthor;