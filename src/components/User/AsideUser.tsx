import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {MdFavoriteBorder} from "react-icons/md";
import {IoMdLogOut} from "react-icons/io";
import {useLogoutMutation} from "../../features/auth/authApiSlice.ts";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {logout} from "../../features/auth/authSlice.ts";
import {clearFavorite} from "../../features/favorite/favoriteSlice.ts";
import {clearCart} from "../../features/cart/cartSlicer.ts";
import {useIsAdminQuery} from "../../features/admin/adminApiSlice.ts";
import useIsAdmin from "../../hooks/useIsAdmin.ts";
import {clearUser} from "../../features/user/userSlicer.ts";
import {apiSlice} from "../../app/api/apiSlice.ts";

const AsideUser = () => {
    const [logoutDb] = useLogoutMutation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isAdmin = useIsAdmin();
    const handleLogout = async () => {
        try {
            await logoutDb();
            dispatch(logout());
            dispatch(clearFavorite());
            dispatch(clearCart());
            dispatch(clearUser());
            navigate('/');
            dispatch(apiSlice.util.resetApiState());
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <aside
            className="top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar">
            <div className="h-full px-4 py-4 overflow-y-auto bg-gray-50 ">
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link to="favorite"
                              className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                            <MdFavoriteBorder
                                className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"/>
                            <span className="ms-3">WishList</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="order"
                              className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                            <svg
                                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 18 18">
                                <path
                                    d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                            </svg>
                            <span className="flex-1 ms-3 whitespace-nowrap">
                                        Orders
                                    </span>
                        </Link>
                    </li>
                    {
                        isAdmin &&
                        <li>
                            <Link to='admin' replace={true}
                                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Admin</span>

                            </Link>
                        </li>
                    }

                    <li>
                        <a onClick={handleLogout}
                           className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                            <IoMdLogOut
                                className='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900'/>
                            <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default AsideUser;