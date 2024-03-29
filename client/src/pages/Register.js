import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import InputField from "./Components/InputField";
import Button from "./Components/Button";
import Modal from "./Components/Modal";

function Register() {

    const [show, setShow] = useState(false);
    const [modal, setModal] = useState({});


    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        termCondition: false,
    };

    const validationSchema = yup
        .object()
        .shape({
            firstName: yup.string().required("First Name is required"),
            lastName: yup.string().required("Last Name is required"),
            email: yup.string().email("Email is invalid").required("Email is required"),
            password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
            confirmPassword: yup
                .string()
                .oneOf([yup.ref("password"), null], "Passwords must match")
                .required("Confirm Password is required"),
            termCondition: yup.boolean().oneOf([true], "You must agree to the terms and conditions").required("You must agree to the terms and conditions"),
        })
        .defined();

    const onSubmit = (data) => {
        data.imageProfile = `https://avatars.dicebear.com/api/human/${data.firstName}-${data.lastName}.svg`;
        axios.post("http://localhost:3030/auth/register", data).then((res) => {
            if(res.data.header === "Success"){
                setModal({
                    type: "success",
                    header: "",
                    body: "User registered"
                })
            }else{
                setModal({
                    type: "danger",
                    header: "Error",
                    body: "User already exists"
                })
            }
        });
        setShow(true);
    };

    return (
        <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-5 p-4">
            <div className="col-start-2 col-end-5">
                <div className="mt-16">
                    <Link to="/" className="text-4xl font-bold text-zinc-800">
                        Keep in Touch
                    </Link>
                    <p className="text-zinc-500 text-sm mt-4">
                        KiT is a social network developed <br /> by <span className="text-zinc-700 font-bold">Bogdan Donici</span> as a project for the course PAWM
                    </p>
                </div>
                <Formik className="flex flex-col" initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <Form>
                        <div className="lg:bg-white lg:overflow-hidden lg:border-zinc-200 lg:rounded-lg lg:px-4 lg:py-5 lg:shadow pb-6 my-12">
                            <div className="flex flex-col lg:flex-row lg:space-x-8">
                                <InputField name="firstName" label="First Name" type="text" placeholder="First Name" attributes="w-full" />
                                <InputField name="lastName" label="Last Name" type="text" placeholder="Last Name" attributes="w-full" />
                            </div>

                            <InputField label="Email" placeholder="Please insert your email" name="email" type="email" />
                            <div className="flex flex-col lg:flex-row lg:space-x-8">
                                <InputField name="password" label="Password" type="password" placeholder="Password" attributes="w-full" />
                                <InputField name="confirmPassword" label="Confirm Password" type="password" placeholder="Confirm Password" attributes="w-full" />
                            </div>
                            <div className="form-check flex items-center mt-4">
                                <Field className="form-check-input appearance-none h-4 w-4 border border-zinc-400 rounded-sm bg-zinc-200 checked:bg-blue-700 checked:border-blue-700 focus:outline-none transition duration-200 " type="checkbox" name="termCondition" id="flexCheckDefault" />
                                <label className="form-check-label ml-2 inline-block text-sm text-zinc-500" htmlFor="flexCheckDefault">
                                    I agree to the terms and conditions
                                </label>
                            </div>
                            <ErrorMessage name={"termCondition"} component="div" className="text-red-600 font-semibold text-sm mt-2" />
                        </div>

                        <div className="mt-16">
                            <Button type="submit" decoration="primary" fullWidth={true}>Register</Button>
                            <div className="mt-2">
                                <p className="text-xs text-neutral-600 text-center mb-2">Already have an account?</p>
                                <Link to="/login">
                                    <Button type="button" decoration="secondary" fullWidth={true}>Login</Button>
                                </Link>
                            </div>
                        </div>
                    </Form>
                </Formik>
                {<Modal show={show} type={modal.type} onClose={() => setShow(false)} data={modal} />}
            </div>
        </div>
    );
}

export default Register;
