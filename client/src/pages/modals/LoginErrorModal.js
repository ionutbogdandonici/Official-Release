import React from 'react';
import { RiCloseLine } from 'react-icons/ri';

const LoginErrorModal = ({setIsOpen}) => {
    return (
        <div tabIndex="-1"
            className="modal backdrop-blur-sm backdrop-brightness-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full"
            onClick={() => setIsOpen(false)}
        >
            <div className="modal-dialog mx-auto relative p-4 w-full max-w-md h-full md:h-auto">
                <div className="relative bg-neutral-800 rounded-lg shadow-2xl mt-8">
                    <div className="flex justify-between items-center p-6 rounded-t border-b border-neutral-700">
                        <h1 className="text-2xl text-red-600 font-semibold">Something went wrong!</h1>
                        <button className="text-neutral-500 text-xl" onClick={() => setIsOpen(false)}>
                            <RiCloseLine/>
                        </button>
                    </div>
                    <div className="p-6 space-y-6">
                        <p className="text-base leading-relaxed text-neutral-400">
                            The credentials you entered are incorrect. Please try again.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginErrorModal;