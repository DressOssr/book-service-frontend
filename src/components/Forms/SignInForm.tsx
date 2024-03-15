import {Link, useNavigate} from "react-router-dom";
import {FormEventHandler, useEffect, useRef, useState} from "react";
import {useAppDispatch} from "../../app/hooks.ts";
import {useLoginMutation} from "../../features/auth/authApiSlice.ts";
import {setCredentials} from "../../features/auth/authSlice.ts";
import Spinner from "../UI/Spinner.tsx";

const SignInForm = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [errorMessage, setErrorMessage] = useState("");

        const dispatch = useAppDispatch();
        const [login, {isLoading}] = useLoginMutation()
    const navigate = useNavigate();
        // const userRef = useRef<HTMLInputElement | null>(null); //TODO
        // useEffect(() => {
        //     if (userRef.current)
        //         userRef.current?.focus();
        // }, [])

        useEffect(() => {
            setErrorMessage('')
        }, [email, password])
        const handleSubmit = async (event:any) => {
            event.preventDefault()
            try {
                const data = await login({password, email}).unwrap();
                localStorage.setItem("token",data.accessToken)
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
                    :
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1
                            className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                            Sign In</h1>
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
                                    required/>
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-3 text-mb font-medium">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    autoComplete="current-password"
                                    id="password"
                                    className="border border-gray-300 sm:text-sm focus:outline-cyan-100 rounded-lg w-full  p-2.5"
                                    placeholder="••••••••"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required/>
                            </div>
                            <small className="text-red-600 ">{errorMessage}</small>
                            <button type="submit"
                                    className="w-full text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Sign In
                            </button>
                            <p className="text-sm font-light text-gray-600">
                                You can registration <Link to="/register"
                                                           className="font-medium hover:underline">Here</Link>
                            </p>
                        </form>

                    </div>
                }
            </>
        );
    }
;

export default SignInForm;
