import {useAppSelector} from "../app/hooks.ts";
import {useIsAdminQuery} from "../features/admin/adminApiSlice.ts";

const useIsAdmin = (): boolean | null => {
    const roleId = useAppSelector(state => state.user.roleId);
    const isAuth = useAppSelector(state => state.auth.isAuth);
    const {data, isLoading,error} = useIsAdminQuery(roleId, {skip: roleId === 0 || !isAuth});
    if (isLoading ) {
        return null;
    }
    if (error) {
        console.error("Error fetching isAdmin data:", error);
        return false;
    }
    return data?.role === "ADMIN";
};

export default useIsAdmin;