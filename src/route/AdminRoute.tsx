import {FC} from "react";
import {Navigate, useLocation} from "react-router";
import {Outlet} from "react-router-dom";
import {useAppSelector} from "../app/hooks.ts";
import {selectIsAuth, selectIsLoading} from "../features/auth/authSlice.ts";
import useIsAdmin from "../hooks/useIsAdmin.ts";

const AdminRoute: FC = () => {
    const isLoading = useAppSelector(selectIsLoading);
    const location = useLocation();
    const isAdmin = useIsAdmin();

    if (isLoading || isAdmin === null) return <div>Loading...</div>
    return (
        isAdmin
            ? <Outlet/>
            : <Navigate to="/" state={{form: location}} replace={true}/>
    );

};
export default AdminRoute;