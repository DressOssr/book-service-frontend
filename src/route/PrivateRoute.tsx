import {FC, useEffect, useState} from "react";
import {Navigate, useLocation} from "react-router";
import {Outlet} from "react-router-dom";
import {IAuth} from "../model/IAuth.ts";
import {useLazyRefreshTokenQuery, useRefreshTokenQuery} from "../features/auth/authApiSlice.ts";
import {useAppDispatch} from "../app/hooks.ts";
import {setCredentials} from "../features/auth/authSlice.ts";
import Spinner from "../components/UI/Spinner.tsx";


const PrivateRoute: FC = () => {
    const {data: token, isLoading} = useRefreshTokenQuery()
    const location = useLocation();
    if (isLoading) {
        return (
            <>
                <Spinner/>
            </>
        )
    }
    return (
        token
            ? <Outlet/>
            : <Navigate to="login" state={{form: location}} replace={true}/>
    );
};

export default PrivateRoute;