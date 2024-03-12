import {Outlet, Link} from "react-router-dom";
import {useGetUserCartItemQuery} from "../features/cart/cartApiSlice.ts";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {setCartItems} from "../features/cart/cartSlicer.ts";
import CartBadge from "./CartBadge.tsx";
import {selectCartItemsCount} from "../features/cart/cartSlicer.ts";
import {IoLogIn} from "react-icons/io5";
import {selectIsAuth} from "../features/auth/authSlice.ts";
import {FaUserAstronaut} from "react-icons/fa";

const Layout = () => {
    const {data: carts, isLoading} = useGetUserCartItemQuery();
    const dispatch = useAppDispatch();
    const quantity = useAppSelector(selectCartItemsCount)
    const isAuth = useAppSelector(selectIsAuth)
    useEffect(() => {
        if (!isLoading) {
            dispatch(setCartItems(carts || []))
        }
    }, [isLoading]);
    return (
        <>
            <header>
                <nav className=" shadow border px-4 lg:px-6 py-2.5 ">
                    <div className="flex flex-wrap justify-between items-center mx-auto ">
                        <Link to="/" className="flex items-center">
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap hover:scale-105  ">
                            My Book Shop
                        </span>
                        </Link>
                        <div className="flex items-center lg:order-2 ">
                            <CartBadge count={quantity}/>
                            {isAuth ?
                                <Link to="/user"
                                      className="flex ml-auto items-center mx-2 px-3 py-3 hover:scale-110">
                                    <FaUserAstronaut size={28}/>
                                </Link>
                                :
                                <Link to="/login"
                                      className="flex ml-auto items-center mx-2 px-3 py-3 hover:scale-110">
                                    <IoLogIn size={35}/>
                                </Link>
                            }

                        </div>
                    </div>
                </nav>
            </header>
            <Outlet/>
        </>
    )
};

export default Layout;