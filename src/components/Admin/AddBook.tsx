import React, {useState} from 'react';
import {IOptions} from "../../model/IOptions.ts";
import {useGetCategoryQuery} from "../../features/category/categoryApiSlice.ts";
import {useGetAuthorQuery} from "../../features/author/authorApiSlice.ts";
import ModalAddAuthor from "../UI/Modal/ModalAddAuthor.tsx";
import ModalAddCategory from "../UI/Modal/ModalAddCategory.tsx";
import AddBookFrom from "../Forms/AddBookForm.tsx";


const AddBook = () => {
    const {data: categories, isLoading: isLoadingCategories} = useGetCategoryQuery()
    const {data: authors, isLoading: isLoadingAuthors} = useGetAuthorQuery()
    const [isShowAuthorModal, setIsShowAuthorModal] = useState<boolean>(false);
    const [isShowCategoryModal, setIsShowCategoryModal] = useState<boolean>(false);
    const toggleAuthorModal = () => {
        setIsShowAuthorModal(!isShowAuthorModal);
    }
    const toggleCategoryModal = () => {
        setIsShowCategoryModal(!isShowCategoryModal);
    }
    if (isLoadingCategories || isLoadingAuthors) {
        return <div>Loading...</div>
    }
    return (
        <>
            <AddBookFrom
                categories={
                    authors!.map((author): IOptions => ({
                        label: author.firstName + " " + author.lastName,
                        value: author.id.toString(),
                    }))}
                authors={
                    categories!.map((category): IOptions => ({
                        label: category.value,
                        value: category.id.toString(),
                    }))
                }
                toggleCategoryModal={() => toggleCategoryModal()}
                toggleAuthorModal={() => toggleAuthorModal()}/>
            <ModalAddAuthor onClose={toggleAuthorModal} title="Add Author" isOpen={isShowAuthorModal}/>
            <ModalAddCategory onClose={toggleCategoryModal} title="Add Category" isOpen={isShowCategoryModal}/>
        </>
    );
};

export default AddBook;