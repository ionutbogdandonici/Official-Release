import React from 'react';
import {Link} from 'react-router-dom';
import {RiCloseLine} from 'react-icons/ri';

const RegisterModal = ({setIsOpen, status}) => {

    if (status === '200')
        return (
            <div tabIndex="-1"
                 className="modal backdrop-blur-sm backdrop-brightness-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full inset-0 h-full">
                <div className="modal-dialog relative p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative bg-neutral-800 rounded-lg shadow-2xl mt-8">
                        <div className="flex justify-between items-center p-6 rounded-t border-b border-b-neutral-700">
                            <h1 className="text-2xl text-green-600 font-semibold">Congratulations!</h1>
                            <button className="text-neutral-500 text-xl" onClick={() => setIsOpen(false)}>
                                <RiCloseLine/>
                            </button>
                        </div>
                        <div className="p-6 space-y-6">
                            <p className="text-base leading-relaxed text-neutral-400">
                                You have successfully registered! Welcome to the community!
                                <br/><br/>
                                Please login to continue.
                            </p>
                        </div>
                        <div className="flex items-center p-6 space-x-2 rounded-b border-t border-t-neutral-700">
                            <Link to="/login" className="bg-blue-700 text-white font-semibold py-2 px-4 rounded-md">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    else {
        return (
            <div tabIndex="-1"
                 className="modal backdrop-blur-sm backdrop-brightness-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                <div className="modal-dialog relative p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative bg-neutral-800 rounded-lg shadow-2xl mt-8">
                        <div className="flex justify-between items-center p-6 rounded-t border-b border-b-neutral-700">
                            <h1 className="text-2xl text-red-600 font-semibold">Something went wrong!</h1>
                            <button className="text-neutral-500 text-xl" onClick={() => setIsOpen(false)}>
                                <RiCloseLine/>
                            </button>
                        </div>
                        <div className="p-6 space-y-6">
                            <p className="text-base leading-relaxed text-neutral-400">
                                The email you're using is already registered.
                                <br/><br/>
                                Please try again with a different email or
                                <Link to="/login" className="text-blue-500 font-semibold"> Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default RegisterModal;