import React, {useState} from 'react';
import {useGetUsersQuery} from "../../features/admin/adminApiSlice.ts";
import {
    SortingState,
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import {IUser} from "../../model/IUser.ts";
import UserTable from "./User/UserTable.tsx";


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