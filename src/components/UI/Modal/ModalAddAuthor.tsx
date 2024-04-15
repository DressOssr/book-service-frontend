import React, {FormEvent, useState} from 'react';
import Modal from "./Modal.tsx";
import {useCreateAuthorMutation} from "../../../features/admin/adminApiSlice.ts";

interface ModalAddAuthorProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;

}
const ModalAddAuthor:React.FC<ModalAddAuthorProps> = ({title,isOpen,onClose}) => {
    const [create, {isLoading}] = useCreateAuthorMutation()
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget)
            await create(formData)
            onClose();

        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <Modal title={title} isOpen={isOpen} onClose={onClose}>
                <form className="p-5 max-w-sm mx-auto" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">
                            First Name:
                        </label>
                        <input type="text" id="title" name="firstName"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                               placeholder="First Name"/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">
                            Last Name:
                        </label>
                        <input type="text" id="title" name="lastName"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                               placeholder="Last Name"/>
                    </div>
                    <div className="mb-5">
                        <fieldset>
                            <legend className="block mb-2 text-sm font-medium text-gray-900">
                                Gender:
                            </legend>
                            <div className="flex items-center mb-4">
                                <input id="genre1"
                                       name="gender"
                                       type="radio"
                                       value="male"
                                       defaultChecked={true}
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2"/>
                                <label htmlFor="genre1"
                                       className="ms-2 text-sm font-medium text-gray-900">
                                    Male
                                </label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input id="genre1"
                                       name="gender"
                                       type="radio"
                                       value="Female"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2"/>
                                <label htmlFor="genre1"
                                       className="ms-2 text-sm font-medium text-gray-900">
                                    Female
                                </label>
                            </div>
                        </fieldset>

                    </div>
                    <div className="flex p-2 justify-center">
                        <button
                            className="bg-cyan-500 border font-bold text-white text-sm hover:bg-cyan-700 rounded-lg p-2 w-full h-full"
                            type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default ModalAddAuthor;