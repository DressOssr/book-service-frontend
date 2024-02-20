import {Route, Routes} from "react-router";
import Home from "../pages/Home.tsx";
import Auth from "../pages/Auth.tsx";
import {FC} from "react";
import Layout from "./Layout.tsx";
import NoPage from "./NoPage.tsx";
import SignInForm from "./SignInForm.tsx";
import SignUpForm from "./SignUpForm.tsx";
import PrivateRoute from "../route/PrivateRoute.tsx";
import Admin from "../pages/Admin.tsx";

const AppRouter: FC = () => {
    return (
        <>
<Routes>
    <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="login" element={<Auth><SignInForm/></Auth>}/>
        <Route path="register" element={<Auth><SignUpForm/></Auth>}/>
        <Route element={<PrivateRoute/>}>
            <Route path="/admin" element={<Admin/>}/>
        </Route>
    </Route>
</Routes>
</>
);
};

export default AppRouter;