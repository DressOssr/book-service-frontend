import AddBook from "../components/Forms/AddBookForm.tsx";
import {useGetCategoryQuery} from "../features/category/categoryApiSlice.ts";
import {IOptions} from "../model/IOptions.ts";
import Spinner from "../components/UI/Spinner.tsx";
import {useGetAuthorQuery} from "../features/author/authorApiSlice.ts";
import {Link, Outlet} from "react-router-dom";

const Admin = () => {


    return (

        <>
            <div className="flex justify-between px-2 mx-auto  w-4/5">
                <Link to="add-book"
                      className="mr-4 border-b-2 border-transparent hover:border-blue-500 focus:border-blue-500 focus:outline-none">
                    Add Book
                </Link>
                <Link to="user-list"
                    className="mr-4 border-b-2 border-transparent hover:border-blue-500 focus:border-blue-500 focus:outline-none">
                    User List
                </Link>
                <Link to="book-list"
                    className="mr-4 border-b-2 border-transparent hover:border-blue-500 focus:border-blue-500 focus:outline-none">
                    Book List
                </Link>
            </div>
            <hr/>
            <Outlet/>
        </>


    );
};

export default Admin;