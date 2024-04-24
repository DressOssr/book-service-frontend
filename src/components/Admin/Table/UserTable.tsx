import React, {useState} from 'react';
import {IUser} from "../../../model/IUser.ts";
import {createColumnHelper, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import RoleCell from "./Cell/RoleCell.tsx";
import {logout} from "../../../features/auth/authSlice.ts";

const columHelper = createColumnHelper<IUser >()
const columns = [
    columHelper.accessor("id", {
        header: () => 'ID',
        cell: (info) => info.getValue(),
    }),
    columHelper.accessor("email", {
        header: () => 'Email',
        cell: (info) => info.getValue(),
    }),
    columHelper.accessor("roleId", {
        header: () => 'RoleID',
        cell: RoleCell,
    })
]

interface UserTableProps {
    fetchUsers: IUser[]
}

const UserTable: React.FC<UserTableProps> = ({fetchUsers}) => {
    const [users, setUsers] = useState(fetchUsers);
    const table = useReactTable({
        data: users,
        columns: columns,
        debugTable: true,
        getCoreRowModel: getCoreRowModel(),
        meta: {
            updateData: (rowIndex: number, columnId: number, value: number) => {
                setUsers((prev) => {
                    return prev.map((row, index) =>
                        index === rowIndex
                            ? {
                                ...prev[rowIndex],
                                [columnId]: value,
                            }
                            : row
                    )
                })
            }
        }
    })
    return (
        <div className="flex overflow-x-auto justify-center">
            <table className=' text-sm text-left text-gray-500'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th key={header.id} scope="col" className="py-3 px-5">
                                <div>
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </div>
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody className='bg-white border-b '>
                {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <td key={cell.id} scope="row" className="py-3 px-5">
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;