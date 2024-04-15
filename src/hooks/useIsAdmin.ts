import {useAppSelector} from "../app/hooks.ts";
import {useIsAdminQuery} from "../features/admin/adminApiSlice.ts";

const useIsAdmin = (): boolean | null => {
    const roleId = useAppSelector(state => state.user.roleId);
    const isAuth = useAppSelector(state => state.auth.isAuth);
    const isLoading = useAppSelector(state => state.auth.isLoading);
    const {data, isLoading:_isLoading,error} = useIsAdminQuery(roleId, {skip: roleId === 0 || !isAuth});
      if (_isLoading ||  isLoading) {
        return null;
    }
    if (error) {
        console.error("Error fetching isAdmin data:", error);
        return false;
    }
    console.log(data?.role)
    return data?.role === "ADMIN";
};

export default useIsAdmin;