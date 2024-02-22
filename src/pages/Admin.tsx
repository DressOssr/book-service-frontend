import AddBook from "../components/AddBookForm.tsx";
import {useGetCategoryQuery} from "../features/category/categoryApiSlice.ts";
import {IOptions} from "../model/IOptions.ts";
import Spinner from "../components/UI/Spinner.tsx";
import AddBookFrom from "../components/AddBookForm.tsx";
import {useGetAuthorQuery} from "../features/author/authorApiSlice.ts";

const Admin = () => {
    const {data: categories, isLoading: isLoadingCategories} = useGetCategoryQuery()
    const {data: authors, isLoading: isLoadingAuthors} = useGetAuthorQuery()

    return (
        <>
            {isLoadingCategories || isLoadingAuthors ?
                <Spinner/>
                :
                <AddBook
                    authors={
                        authors!.map((author): IOptions => ({
                            label: author.firstName + " " + author.lastName,
                            value: author.id.toString(),
                        }))
                    }
                    categories={
                        categories!.map((category): IOptions => ({
                            label: category.value,
                            value: category.id.toString(),
                        }))
                    }
                />
            }
        </>
    );
};

export default Admin;