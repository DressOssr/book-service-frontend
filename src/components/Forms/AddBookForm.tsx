import React, {FormEvent} from 'react';
import {useAppDispatch} from "../../app/hooks.ts";
import {useCreateBookMutation} from "../../features/admin/adminApiSlice.ts";
import Select from "react-select";
import {IOptions} from "../../model/IOptions.ts";


interface AddBookFromProps {
    categories: IOptions[]
    authors: IOptions[]
    toggleAuthorModal: () => void
    toggleCategoryModal: () => void
}

const AddBookFrom: React.FC<AddBookFromProps> = ({authors, categories, toggleAuthorModal, toggleCategoryModal}) => {


    const dispatch = useAppDispatch();
    const [create, {isLoading}] = useCreateBookMutation()

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget)
            await create(formData)
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <form className="border shadow-lg rounded m-2 p-5 max-w-3xl mx-auto flex flex-wrap" onSubmit={handleSubmit}>
            <div className="md:w-1/2 mb-5 px-2 w-full">
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">
                    Title:
                </label>
                <input type="text" id="title" name="title"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                       placeholder="Title"/>
            </div>
            <div className="md:w-1/2 mb-5 px-2 w-full">
                <label htmlFor="subtitle" className="block mb-2 text-sm font-medium text-gray-900 ">
                    Subtitle:
                </label>
                <input type="text" id="subtitle" name="subtitle"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                       placeholder="Subtitle"/>
            </div>
            <div className="md:w-1/2 mb-5 px-2 w-full">
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
            <div className="md:w-1/2 mb-5 px-2 w-full">
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
            <div className=" mb-5 px-2 w-full">
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
                <div className="md:w-1/2 mb-5 px-2 w-full">
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

                <div className="md:w-1/2 mb-5 px-2 w-full">
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
            <div className="md:w-1/2 mb-5 px-2 w-full">
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
            <div className="md:w-1/2 mb-5 px-2 w-full">
                <label htmlFor="categoriesId" className="inline mb-2 text-sm font-medium text-gray-900">
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
            <div className="w-full flex p-2 justify-center">
                <button
                    className="bg-cyan-500 border font-bold text-white text-sm hover:bg-cyan-700 rounded-lg p-2 w-full h-full"
                    type="submit">
                    Submit
                </button>
            </div>
        </form>

    );
};

export default AddBookFrom;