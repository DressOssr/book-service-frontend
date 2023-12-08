import {FC, ReactNode} from "react";

type Props = {
    children: ReactNode,
};
const Auth: FC<Props> = (props) => {
    return (

        <section className="bg-gradient-to-r from-cyan-600 to-blue-600">
            <div
                className="flex flex-col items-center justify-center px-6 py-8  mx-auto h-screen sm:px-0 sm:py=0"
            >
                <div className="w-full rounded-lg shadow-2xl bg-white md:mt-0 sm:max-w-md xl:p-0">
                    {props.children}
                </div>
            </div>
        </section>
    );
};

export default Auth;