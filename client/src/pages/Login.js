import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import axios from 'axios';
import LoginErrorModal from "./modals/LoginErrorModal";

function Login() {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const initailValues = {
        email: "",
        password: ""
    };

    const validationSchema = yup.object({
        email: yup.string().email("Email is invalid").required("Email is required"),
        password: yup.string().required("Password is required")
    }).defined();

    const handleSubmit = (data) => {
        axios.post("http://localhost:3030/auth/login", data).then((response) => {
            if (response.status === 200) {
                localStorage.setItem("token", response.data.token);
                navigate(`/users/${response.data.user.id}`);
            }
            console.error(response);
        }).catch((error) => {
            setIsOpen(true);
        });
    }

    return (
        <div className="container mx-auto lg:px-96 p-4 font-inter">
            <div className="mb-16 mt-24">
                <Link to="/" className='text-4xl font-bold'>Keep in Touch</Link>
                <p className='text-neutral-500 text-sm mt-4'>KiT is a social network developed <br/> by <span
                    className='text-neutral-200'>@BogdanDonici</span> as a project for the course PAWM</p>
            </div>
            <Formik className="flex flex-col" initialValues={initailValues} validationSchema={validationSchema}
                    onSubmit={handleSubmit}>
                <Form>
                    <div className="mb-4">
                        <label className="block text-slate-300 text-sm font-semibold mb-2"
                               htmlFor="email"
                        >Email</label>
                        <Field
                            className="bg-neutral-800 border border-neutral-700 rounded-md text-sm w-full py-3 px-4 text-white placeholder:text-neutral-500"
                            type="email" id="email" placeholder="Insert your email here" name="email"
                            autoComplete="off"
                        />
                        <ErrorMessage name={'email'} component="div" className="text-red-500 text-sm mt-2"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-slate-300 text-sm font-semibold mb-2">
                            Password
                        </label>
                        <Field
                            className="bg-neutral-800 border border-neutral-700 rounded-md text-sm w-full py-3 px-4 text-white placeholder:text-neutral-500"
                            type="password" id="password" placeholder="Insert your password here" name="password"
                            autoComplete="off"
                        />
                        <ErrorMessage name={'password'} component="div" className="text-red-500 text-sm mt-2"/>
                    </div>
                    <div className="mb-16">
                        <Link to="/forgotPassword" className="text-xs text-neutral-600">
                            Forgot password?
                        </Link>
                    </div>
                    <div>
                        <button className="bg-blue-700 text-white text-base font-semibold w-full py-3 rounded-md">
                            Login
                        </button>
                        <div className="mt-2">
                            <p className="text-xs text-neutral-600 text-center mb-2">Don't have an account yet?</p>
                            <Link to="/register">
                                <button
                                    className="bg-neutral-700 text-white text-base font-semibold w-full py-3 rounded-md">
                                    Register
                                </button>
                            </Link>
                        </div>
                    </div>
                    {isOpen && <LoginErrorModal setIsOpen={setIsOpen} />}
                </Form>
            </Formik>
        </div>
    )
}

export default Login;