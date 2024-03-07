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
            <Route path="/admin" element={<Admin/>}/>
        </Route>
        <Route path="*" element={<NoPage/>}/>
    </Route>
</Routes>
</>
);
};

export default AppRouter;