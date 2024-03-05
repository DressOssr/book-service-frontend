import {Outlet, Link} from "react-router-dom";
import Dropdown from "./UI/Dropdown.tsx";
import {useGetCountQuery} from "../features/cart/cartApiSlice.ts";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {selectCount, setCartCount} from "../features/cart/cartSlicer.ts";
import {CiShoppingCart} from "react-icons/ci";
import {FaCartShopping} from "react-icons/fa6";

const Layout = () => {
    const {data: countCart, isLoading} = useGetCountQuery();
    const dispatch = useAppDispatch();
    const count = useAppSelector(state => state.cart.value)
    useEffect(() => {
        if (countCart)
            dispatch(setCartCount(countCart))
    }, [countCart]);
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            <header>
                <nav className="shadow border px-4 lg:px-6 py-2.5 ">
                    <div className="flex  flex-wrap justify-between items-center mx-auto ">
                        <Link to="/" className="flex items-center">
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap hover:scale-105  ">
                            My Book Shop
                        </span>
                        </Link>
                        <div className="flex items-center lg:order-2 ">
                            <Link to="/cart"
                                  className="px-4 lg:px-5 py-2 lg:py-2.5 hover:scale-95  rounded-3xl bg-black">
                                <FaCartShopping className="text-white rounded inline-block  w-5 h-5"/>
                                <span className="  text-white ml-2 font-medium align-top">{count}</span>
                            </Link>
                            <Link to="/login"
                                  className="flex ml-auto items-center px-4 lg:px-5 py-2 lg:py-2.5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="rounded hover:scale-110 hover:bg-gray-300 w-5 h-5">
                                    <path fillRule="evenodd"
                                          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                          clipRule="evenodd"/>
                                </svg>
                            </Link>
                            <Dropdown/>
                        </div>
                    </div>
                </nav>
            </header>
            <Outlet/>
        </>
    )
};

export default Layout;