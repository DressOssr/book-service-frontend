import React, {FC, FormEvent, useState} from 'react';
import {useAppDispatch} from "../../app/hooks.ts";
import {useCreateBookMutation} from "../../features/admin/adminApiSlice.ts";
import Select from "react-select";
import {IOptions} from "../../model/IOptions.ts";
import ModalAddAuthor from "../UI/Modal/ModalAddAuthor.tsx";
import ModalAddCategory from "../UI/Modal/ModalAddCategory.tsx";


interface AddBookFromProps{
    categories:IOptions[]
    authors:IOptions[]
}

const AddBookFrom:FC<AddBookFromProps> = ({categories,authors}) => {

    const dispatch = useAppDispatch();
    const [create, {isLoading}] = useCreateBookMutation()
    const [isShowAuthorModal, setIsShowAuthorModal] = useState<boolean>(false);
    const [isShowCategoryModal, setIsShowCategoryModal] = useState<boolean>(false);
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget)

            const book = await create(formData)
            console.log(book)
        } catch (e) {
            console.log(e)
        }

    }
    const toggleAuthorModal = () => {
        setIsShowAuthorModal(!isShowAuthorModal);
    }
    const toggleCategoryModal = () => {
        setIsShowCategoryModal(!isShowCategoryModal);
    }
    return (
        <>
            <form className="p-5 max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">
                        Title:
                    </label>
                    <input type="text" id="title" name="title"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                           placeholder="Title" />
                </div>
                <div className="mb-5">
                    <label htmlFor="subtitle" className="block mb-2 text-sm font-medium text-gray-900 ">
                        Subtitle:
                    </label>
                    <input type="text" id="subtitle" name="subtitle"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                           placeholder="Subtitle"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">
                        Price:
                    </label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Price"

                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="publishedDate" className="block mb-2 text-sm font-medium text-gray-900">
                        Published Date:
                    </label>
                    <input
                        type="date"
                        id="publishedDate"
                        name="publishedDate"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Published Date"

                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">
                        Description:
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 resize-y"
                        placeholder="Description"
                        rows={5}
                        cols={33}

                    ></textarea>
                </div>
                <div className="mb-5">
                    <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">
                        Image:
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Image URL"

                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="publisher" className="block mb-2 text-sm font-medium text-gray-900">
                        Publisher:
                    </label>
                    <input
                        type="text"
                        id="publisher"
                        name="publisher"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Publisher"

                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="authorsId" className="inline mb-2 text-sm font-medium text-gray-900">
                        Author:
                    </label>
                    <Select
                        isMulti
                        name="authorsId"
                        options={authors}
                        className="basic-multi-select"
                    />
                    <small className="text-blue-300 hover:underline-offset-1 hover:cursor-pointer"
                            onClick={toggleAuthorModal}
                    >
                        Add Author....
                    </small>
                </div>
                <div className="mb-5">
                    <label htmlFor="categoriesId" className="block mb-2 text-sm font-medium text-gray-900">
                        Categories:
                    </label>
                    <Select
                        isMulti
                        name="categoriesId"
                        options={categories}
                        className="basic-multi-select"
                    />
                    <small className="text-blue-300 hover:underline-offset-1 hover:cursor-pointer"
                           onClick={toggleCategoryModal}
                    >
                        Add Category....
                    </small>
                </div>
                <div className="flex p-2 justify-center">
                    <button
                        className="bg-cyan-500 border font-bold text-white text-sm hover:bg-cyan-700 rounded-lg p-2 w-full h-full"
                        type="submit">
                        Submit
                    </button>
                </div>

            </form>
            <ModalAddAuthor onClose={toggleAuthorModal} title="Add Author" isOpen={isShowAuthorModal}/>
            <ModalAddCategory onClose={toggleCategoryModal} title="Add Category" isOpen={isShowCategoryModal}/>
        </>
    );
};

export default AddBookFrom;