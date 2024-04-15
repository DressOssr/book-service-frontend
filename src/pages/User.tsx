import React from 'react';
import {Outlet} from "react-router-dom";
import AsideUser from "../components/User/AsideUser.tsx";


const User: React.FC = () => {

    return (
        <>
            <div className="flex h-[calc(100vh-74px)]">
                <AsideUser/>
                <div className="m-2 p-3 w-full">
                    <Outlet/>
                </div>
            </div>
        </>
    );
};

export default User;