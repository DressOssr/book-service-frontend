import {FC, useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {setCredentials} from "../features/auth/authSlice.ts";
import {useAppDispatch} from "../app/hooks.ts";
import {useRegisterMutation} from "../features/auth/authApiSlice.ts";
import Spinner from "./UI/Spinner.tsx";

const SignUpForm: FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const dispatch = useAppDispatch();
    const [register, {isLoading}] = useRegisterMutation()
    const navigate = useNavigate();

    useEffect(() => {
        setErrorMessage('')
    }, [email, password])
    const handleSubmit = async (event: any) => {
        event.preventDefault()
        console.log("123")
        try {
            const data = await register({password, confirmPassword, email}).unwrap();
            dispatch(setCredentials(data))
            navigate('/')
        } catch (error: any) {
            console.log(error)
            if (error.data)
                setErrorMessage(error.data.message)
            else
                setErrorMessage(error.error)
        }
    }
    return (
        <>
            {isLoading
                ? <div className="flex justify-center"><Spinner/></div>
                : <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                        Sign Up</h1>
                    <small className="text-red-600 ">{errorMessage}</small>
                    <form className="space-y-4 md:space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email"
                                   className="block mb-3 text-mb font-medium">
                                Your email
                            </label>
                            <input
                                type="email"
                                name="email"
                                autoComplete="email"
                                id="email"
                                className="border border-gray-300 sm:text-sm focus:outline-cyan-100 rounded-lg w-full  p-2.5"
                                placeholder="name@company.com"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password"
                                   className="block mb-3 text-mb font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="new-password"
                                className="border border-gray-300 sm:text-sm focus:outline-cyan-100 rounded-lg w-full  p-2.5"
                                placeholder="••••••••"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password"
                                   className="block mb-3 text-mb font-medium">
                                Confirm password
                            </label>
                            <input
                                type="password"
                                autoComplete="new-password"
                                name="password"
                                id="confirm-password"
                                className="border border-gray-300 sm:text-sm focus:outline-cyan-100 rounded-lg w-full  p-2.5"
                                placeholder="••••••••"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Create an account
                        </button>

                        <p className="text-sm font-light text-gray-600">
                            Already have an account? <Link to="/login" className="font-medium hover:underline">Login
                            here</Link>
                        </p>

                    </form>
                </div>
            }
        </>


    );
};

export default SignUpForm;
