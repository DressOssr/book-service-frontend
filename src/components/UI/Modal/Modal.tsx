import React, {FC, ReactElement, useCallback} from "react";
import {FaCircleXmark} from "react-icons/fa6";

interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    children: ReactElement;
}

const Modal: React.FC<ModalProps> = ({title = "", isOpen, onClose, children}) => {
    return (
        <>
            {isOpen ?
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl ">
                            <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex p-5 border-b border-solid rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        {title}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl hover:scale-95 leading-none font-semibold outline-none focus:outline-none"
                                        onClick={onClose}
                                    >
                                      <FaCircleXmark/>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative flex-auto p-6 ">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </> : null}

        </>
    );
}

export default Modal;