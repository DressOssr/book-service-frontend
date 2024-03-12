import {FC, useEffect} from "react";
import {Navigate, useLocation} from "react-router";
import {Outlet} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {selectIsAuth, selectIsLoading, setIsLoading} from "../features/auth/authSlice.ts";


const PrivateRoute: FC = () => {
    const isAuth = useAppSelector(selectIsAuth);
    const isLoading = useAppSelector(selectIsLoading);
    const location = useLocation();
    const dispatch = useAppDispatch()
    if (isLoading) return <div>Loading...</div>
    else {
        return (
            isAuth
                ? <Outlet/>
                : <Navigate to="login" state={{form: location}} replace={true}/>
        );
    }

};

export default PrivateRoute;