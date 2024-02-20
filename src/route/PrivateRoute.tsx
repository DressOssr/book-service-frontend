import {FC, ReactNode} from "react";
import {Navigate, useLocation} from "react-router";
import {Outlet} from "react-router-dom";
import {useAppSelector} from "../app/hooks.ts";
import auth from "../pages/Auth.tsx";
import {selectCurrentAccessToken} from "../features/auth/authSlice.ts";


type TProps = {
    redirectPath?: string;
    children?: ReactNode
}


const PrivateRoute: FC<TProps> = () => {
    const token =localStorage.getItem("token");
    const location = useLocation();
    console.log(token)
    // if (!token) {
    //     return <Navigate to={redirectPath} replace={true}/>;
    // }
    // return children ? children : <Outlet/>;
    return (
        token
            ? <Outlet/>
            :  <Navigate to="login" state={{form:location}} replace={true}/>
    );
};

export default PrivateRoute;