import React from 'react';
import {useGetUsersQuery} from "../../features/admin/adminApiSlice.ts";

import UserTable from "./Table/UserTable.tsx";


const UserList = () => {
    const {data: fetchUsers, isLoading} = useGetUsersQuery();

    if (isLoading || !fetchUsers) {
        return <div>Loading...</div>
    }

    return (
        <>
            <UserTable fetchUsers={fetchUsers}/>
        </>
    );
};

export default UserList;