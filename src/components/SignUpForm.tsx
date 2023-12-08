import {FC} from 'react';
import {Link} from "react-router-dom";

const SignUpForm: FC = () => {
    return (
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                Sign Up</h1>
            <form className="space-y-4 md:space-y-6 sm:space-y-8" action="#">
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
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Create an account
                </button>

                <p className="text-sm font-light text-gray-600">
                    Already have an account? <Link to="/login" className="font-medium hover:underline">Login here</Link>
                </p>

            </form>
        </div>
    );
};

export default SignUpForm;
