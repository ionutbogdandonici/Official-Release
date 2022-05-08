import React from "react";
import ForbbidenPage from "../Errors/ForbbidenPage";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { PlusSmIcon } from "@heroicons/react/solid";
import Button from "../Components/Button";
import { Outlet, Link, useNavigate } from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function HomePage() {
    // Main path for the user routing
    const userIdPath = window.location.pathname.charAt(6);
    const path = "/user/" + userIdPath;

    const navigator = useNavigate();

    const logout = () => {
        sessionStorage.removeItem("accessToken");
        sessionStorage.removeItem("userProfileImage");
        navigator("/");
    };

    if (!sessionStorage.getItem("accessToken")) {
        return <ForbbidenPage />;
    } else {
        return (
            <div>
                <Disclosure as="nav" className="sticky top-0 z-40 w-full transition-colors duration-500 backdrop-blur bg-white/50  shadow ">
                    {({ open }) => (
                        <>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex justify-between h-16">
                                    <div className="flex">
                                        <div className="-ml-2 mr-2 flex items-center md:hidden">
                                            {/* Mobile menu button */}
                                            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-zinc-500 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                                                <span className="sr-only">Open main menu</span>
                                                {open ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
                                            </Disclosure.Button>
                                        </div>
                                        <div className="flex-shrink-0 flex items-center">
                                            <Link to={path + "/home"}>
                                                <h1 className="block h-8 w-auto text-2xl font-semibold">KiT</h1>
                                            </Link>
                                        </div>
                                        <div className="hidden md:ml-6 md:flex md:space-x-8">
                                            {/* Current: "border-blue-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                                            <Link to={path + "/home"} className=" text-zinc-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                                                Home
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <Link to={path + "/createPost"}>
                                                <Button type="button" decoration="primary" hasIcon={true}>
                                                    <PlusSmIcon className="-ml-1 mr-2 h-5 w-5 my-auto" aria-hidden="true" />
                                                    <span>New Post</span>
                                                </Button>
                                            </Link>
                                        </div>
                                        <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                                            {/* Profile dropdown */}
                                            <Menu as="div" className="ml-3 relative">
                                                <div>
                                                    <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                                        <span className="sr-only">Open user menu</span>
                                                        <img className="h-8 w-8 rounded-full" src={sessionStorage.getItem("userProfileImage")} alt="" />
                                                    </Menu.Button>
                                                </div>
                                                <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-zinc ring-opacity-5 focus:outline-none">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link to={path + "/profile"} className={classNames(active ? "bg-zinc-100" : "", "block px-4 py-2 text-sm text-zinc-700")}>
                                                                    Your Profile
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a onClick={logout} href="#" className={classNames(active ? "bg-zinc-100" : "", "block px-4 py-2 text-sm text-zinc-700")}>
                                                                    Sign out
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="pt-2 pb-3 space-y-1">
                                    {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                                    <Link to={path + "/home"}>
                                        <Disclosure.Button as="a" href="#" className="bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6">
                                            Home
                                        </Disclosure.Button>
                                    </Link>
                                </div>
                                <div className="pt-4 pb-3 border-t border-gray-200">
                                    <div className="flex items-center px-4 sm:px-6">
                                        <div className="flex-shrink-0">
                                            <img className="h-10 w-10 rounded-full" src={sessionStorage.getItem("userProfileImage")} alt="" />
                                        </div>
                                    </div>
                                    <div className="mt-3 space-y-1">
                                        <Link to={path + "/profile"}>
                                            <Disclosure.Button as="a" href="#" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6">
                                                Your Profile
                                            </Disclosure.Button>
                                        </Link>

                                        <Disclosure.Button as="p" onClick={logout} className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6">
                                            Sign out
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <div>
                    <Outlet className="" />
                </div>
            </div>
        );
    }
}

export default HomePage;
