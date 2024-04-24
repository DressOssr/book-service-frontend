import React from 'react';
import {logout} from "../../../../features/auth/authSlice.ts";
import {useGetRolesQuery} from "../../../../features/admin/adminApiSlice.ts";

const RoleCell = ({getValue, row, column, table}) => {
    const {data, isLoading} = useGetRolesQuery()
    const {updateData} = table.options.meta;
    const [role, setRole] = React.useState(getValue());
    const handleChange = (e) => {

    }
    if (isLoading)
        return null;
    return (
        <>
            <form className="max-w-sm mx-auto">
                <select id="countries"
                        defaultValue={role}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-left text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 pl-1 pr-6">
                    {data?.map((item) => (
                        <option key={item.id}
                                value={item.id}
                                onClick={() => updateData(row.id, column.id, item.id)}
                        >
                            {item.role}
                        </option>
                    ))}
                </select>
            </form>
        </>
    );
};

export default RoleCell;