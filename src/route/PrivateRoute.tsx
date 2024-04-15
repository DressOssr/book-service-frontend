import {FC} from "react";
import {Navigate, useLocation} from "react-router";
import {Outlet} from "react-router-dom";
import {useAppSelector} from "../app/hooks.ts";
import {selectIsAuth, selectIsLoading} from "../features/auth/authSlice.ts";

const PrivateRoute: FC = () => {
    const isAuth = useAppSelector(selectIsAuth);
    const isLoading = useAppSelector(selectIsLoading);
    const location = useLocation();

    if (isLoading || isAuth === null) return <div>Loading...</div>
    return (
        isAuth
            ? <Outlet/>
            : <Navigate to="login" state={{form: location}} replace={true}/>
    );

};
export default PrivateRoute;