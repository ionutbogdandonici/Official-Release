import React from "react";
import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import InputField from "./Components/InputField";
import Button from "./Components/Button";
import * as Yup from "yup";
import axios from "axios";
import forgotPassword from "../assets/images/ForgotPassword.svg";

function ForgotPassword() {

    const navigator = useNavigate();

    const initialValues = {
        email: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string().email("Email is invalid").required("Email is required"),
    }).defined();

    const handleSubmit = (values) => {
        axios.post("http://localhost:3030/auth/login/forgotPassword", values).then((res) => {
            navigator("/");
        });
    };

    return (
        <div className="container px-4 lg:grid lg:grid-cols-3 mx-auto">
            <div className="col-start-2 col-end-3">
                <div className="text-center mt-16">
                    <Link to="/">
                        <h1 className="text-4xl font-bold text-zinc-800">Keep in Touch</h1>
                    </Link>
                    <p className="text-base font-medium text-zinc-600 mt-2">A simple social network</p>
                    <img className="mx-auto mt-16" src={forgotPassword} alt="Forgot Password" />
                </div>
                <div className="">
                    <h1 className="text-2xl font-bold mt-4 text-zinc-800">Forgot Password</h1>
                    <p className="text-zinc-500 text-sm font-medium">Never mind, it happens to everyone! Please enter your email so we can help you recover your credentials</p>
                </div>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    <Form className="mt-6">
                        <InputField name="email" label="Email" type="email" placeholder={"Please insert your email"} />
                        <Button type="submit" fullWidth={true} decoration="primary">
                            Submit
                        </Button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default ForgotPassword;
