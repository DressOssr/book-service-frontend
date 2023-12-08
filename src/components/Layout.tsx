import {Outlet, Link} from "react-router-dom";
import Dropdown from "./UI/Dropdown.tsx";

const Layout = () => {
    return (
        <header>
            <nav className="bg-indigo-950 border-gray-200 px-4 lg:px-6 py-2.5 ">
                <div className="flex flex-wrap justify-between items-center mx-auto ">
                    <Link to="/" className="flex items-center">
                        <span
                            className="self-center text-white text-xl font-semibold whitespace-nowrap hover:text-cyan-100">
                            My Book Shop
                        </span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link to="/login"
                              className="text-white hover:text-cyan-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none">
                            Sign In
                        </Link>
                        <Link to="/register"
                              className="text-white hover:text-cyan-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none">
                            Get Starting
                        </Link>
                        <Dropdown/>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                         id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link to="/"
                                   className="block py-2 pr-4 pl-3 text-white rounded hover:text-cyan-100 hover:scale-105 lg:p-0 "
                                   aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/register"
                                   className="block py-2 pr-4 pl-3 text-white hover:text-cyan-100 hover:scale-105 lg:p-0 ">
                                    Company
                                </Link>
                            </li>
                            <li>
                                <Link to="/login"
                                      className="block py-2 pr-4 pl-3 text-white hover:text-cyan-100 hover:scale-105 lg:p-0 ">
                                    LOGIN
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </header>
    )
};

export default Layout;