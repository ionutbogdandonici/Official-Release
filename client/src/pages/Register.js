import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import RegisterModal from "./modals/RegisterModal";

function Register() {

    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState('');

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        termCondition: false
    }

    const validationSchema = yup.object().shape({
        firstName: yup.string().required('First Name is required'),
        lastName: yup.string().required('Last Name is required'),
        email: yup.string().email('Email is invalid').required('Email is required'),
        password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
        termCondition: yup.boolean().oneOf([true], "You must agree to the terms and conditions").required('You must agree to the terms and conditions')
    }).defined();

    const onSubmit = (data) => {
        console.log(data)
        axios.post('http://localhost:3030/auth/register', data).then(res => {
            if(res.status === 200) {
                setStatus('200')
            }else if(res.status === 400) {
                setStatus('400')
            }
        })
        setIsOpen(true);
    }

    return (
        <div className="container mx-auto p-4 font-inter">
            <div className="mb-16 mt-24">
                <Link to="/" className='text-4xl font-bold'>Keep in Touch</Link>
                <p className='text-neutral-500 text-sm mt-4'>KiT is a social network developed <br/> by <span
                    className='text-neutral-200'>@BogdanDonici</span> as a project for the course PAWM</p>
            </div>
            <Formik className="flex flex-col" initialValues={initialValues} validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                <Form>
                    <div className="flex flex-col lg:flex-row lg:space-x-8">
                        <div className="w-full">
                            <label className="block text-neutral-300 text-sm font-semibold mb-2" htmlFor="firstName">First
                                Name</label>
                            <Field
                                className="bg-neutral-800 border border-neutral-700 rounded-md text-sm w-full py-3 px-4 text-white placeholder:text-neutral-500"
                                type="text" id="firstName" name="firstName"
                                placeholder="Insert your first name"
                                autoComplete="off"
                            />
                            <ErrorMessage name={'firstName'} component="div" className="text-red-500 text-sm mt-2"/>
                        </div>
                        <div className="w-full mt-2 lg:mt-0">
                            <label className="block text-neutral-300 text-sm font-semibold mb-2" htmlFor="lastName">Last
                                Name</label>
                            <Field
                                className="bg-neutral-800 border border-neutral-700 rounded-md text-sm w-full py-3 px-4 text-white placeholder:text-neutral-500"
                                type="text" id="lastName" name="lastName"
                                placeholder="Insert your last name"
                                autoComplete="off"
                            />
                            <ErrorMessage name={'lastName'} component="div" className="text-red-500 text-sm mt-2"/>
                        </div>
                    </div>
                    <div className="mt-2 mb-2">
                        <label className="block text-neutral-300 text-sm font-semibold mb-2"
                               htmlFor="email">Email</label>
                        <Field
                            className="bg-neutral-800 border border-neutral-700 rounded-md text-sm w-full py-3 px-4 text-white placeholder:text-neutral-500"
                            type="email" id="email" name="email"
                            placeholder="Insert your email"
                            autoComplete="off"
                        />
                        <ErrorMessage name={'email'} component="div" className="text-red-500 text-sm mt-2"/>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:space-x-8">
                        <div className="w-full">
                            <label className="block text-neutral-300 text-sm font-semibold mb-2"
                                   htmlFor="password">Password</label>
                            <Field
                                className="bg-neutral-800 border border-neutral-700 rounded-md text-sm w-full py-3 px-4 text-white placeholder:text-neutral-500"
                                type="password" id="password" name="password"
                                placeholder="Insert your password"
                                autoComplete="off"
                            />
                            <ErrorMessage name={'password'} component="div" className="text-red-500 text-sm mt-2"/>
                        </div>
                        <div className="w-full mt-2 lg:mt-0">
                            <label className="block text-neutral-300 text-sm font-semibold mb-2"
                                   htmlFor="confirmPassword">Confirm Password</label>
                            <Field
                                className="bg-neutral-800 border border-neutral-700 rounded-md text-sm w-full py-3 px-4 text-white placeholder:text-neutral-500"
                                type="password" id="confirmPassword" name="confirmPassword"
                                placeholder="Confirm your password"
                                autoComplete="off"
                            />
                            <ErrorMessage name={'confirmPassword'} component="div"
                                          className="text-red-500 text-sm mt-2"/>
                        </div>
                    </div>
                    <div className="form-check flex items-center mt-4">
                        <Field
                            className="form-check-input appearance-none h-4 w-4 border border-neutral-700 rounded-sm bg-neutral-800 checked:bg-blue-700 checked:border-blue-700 focus:outline-none transition duration-200 "
                            type="checkbox" name="termCondition" id="flexCheckDefault"
                        />
                        <label className="form-check-label ml-2 inline-block text-sm text-neutral-200"
                               htmlFor="flexCheckDefault">
                            I agree to the terms and conditions
                        </label>
                    </div>
                    <ErrorMessage name={'termCondition'} component="div" className="block text-red-500 text-sm mt-2"/>
                    <div className="mt-16">
                        <button className="bg-blue-700 text-white text-base font-semibold w-full py-3 rounded-md"
                                type="submit">
                            Register
                        </button>
                        <div className="mt-2">
                            <p className="text-xs text-neutral-600 text-center mb-2">Already have an account?</p>
                            <Link to="/login">
                                <button
                                    className="bg-neutral-700 text-white text-base font-semibold w-full py-3 rounded-md">
                                    Login
                                </button>
                            </Link>
                        </div>
                    </div>
                </Form>
            </Formik>
            {isOpen && <RegisterModal setIsOpen={setIsOpen} status={status} />}
        </div>
    )
}

export default Register;