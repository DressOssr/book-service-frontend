import {Route, Routes} from "react-router";
import Home from "../pages/Home.tsx";
import Auth from "../pages/Auth.tsx";
import React, {FC} from "react";
import Layout from "./Layout.tsx";
import SignInForm from "./Forms/SignInForm.tsx";
import SignUpForm from "./Forms/SignUpForm.tsx";
import PrivateRoute from "../route/PrivateRoute.tsx";
import Admin from "../pages/Admin.tsx";
import Product from "../pages/Product.tsx";
import NoPage from "./NoPage.tsx";
import User from "../pages/User.tsx";
import FavoriteList from "./Favorite/FavoriteList.tsx";
import Checkout from "../pages/Checkout.tsx";
import OrderList from "./Order/OrderList.tsx";
import AdminRoute from "../route/AdminRoute.tsx";
import AddBookFrom from "./Forms/AddBookForm.tsx";
import {useGetCategoryQuery} from "../features/category/categoryApiSlice.ts";
import {useGetAuthorQuery} from "../features/author/authorApiSlice.ts";
import AddBook from "./Admin/AddBook.tsx";
import BookList from "./Admin/BookList.tsx";

const AppRouter: FC = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="login" element={<Auth><SignInForm/></Auth>}/>
                    <Route path="register" element={<Auth><SignUpForm/></Auth>}/>
                    <Route path="product/:id" element={<Product/>}/>
                    <Route element={<PrivateRoute/>}>
                        <Route path="checkout" element={<Checkout/>}/>
                        <Route path="user" element={<User/>}>
                            <Route element={<AdminRoute/>}>
                                <Route path="admin" element={<Admin/>}>
                                    <Route path="add-book" element={<AddBook/>}/>
                                    <Route path="user-list" element={<AddBook/>}/>
                                    <Route path="book-list" element={<BookList/>}/>
                                </Route>
                            </Route>
                            <Route path='favorite' element={<FavoriteList/>}/>
                            <Route path='order' element={<OrderList/>}/>
                        </Route>
                    </Route>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default AppRouter;