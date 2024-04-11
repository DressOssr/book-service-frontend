import React from 'react';
import {Link, Outlet, useNavigate} from "react-router-dom";
import {MdFavoriteBorder} from "react-icons/md";
import {IoMdLogOut} from "react-icons/io";
import {useAppDispatch} from "../app/hooks.ts";
import {useLogoutMutation} from "../features/auth/authApiSlice.ts";
import {logOut} from "../features/auth/authSlice.ts";
import {clearFavorite} from "../features/favorite/favoriteSlice.ts";
import {clearCart} from "../features/cart/cartSlicer.ts";
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