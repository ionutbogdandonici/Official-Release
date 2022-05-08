import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as yup from "yup";
import axios from "axios";
import Modal from "./Components/Modal";
import Button from "./Components/Button";
import InputField from "./Components/InputField";

function Login() {
    const navigator = useNavigate();

    const [show, setShow] = useState(false);
    const [serverResponse, setServerResponse] = useState({});

    const initailValues = {
        email: "",
        password: "",
    };

    const validationSchema = yup
        .object({
            email: yup.string().email("Email is invalid").required("Email is required"),
            password: yup.string().required("Password is required"),
        })
        .defined();

    const handleSubmit = (data) => {
        axios.post("http://localhost:3030/auth/login", data).then((res) => {
            if (res.data.header === "Success") {
                sessionStorage.setItem("accessToken", res.data.body.accessToken);
                sessionStorage.setItem("userProfileImage", res.data.body.user.imageProfile);
                navigator("/user/" + res.data.body.user.id+"/home");
            } else {
                setShow(true);
                setServerResponse(res.data);
            }
        });
    };

    return (
        <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-3 p-4">
            <div className="col-start-2 col-end-3 mt-16">
                <div className="text-center mb-16">
                    <Link to="/">
                        <h1 className="text-4xl font-bold text-zinc-800">Keep in Touch</h1>
                    </Link>
                    <p className="mt-1 text-zinc-500 font-normal">A Simple Social Network</p>
                </div>
                <Formik className="flex flex-col" initialValues={initailValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    <Form>
                        <InputField placeholder="Please insert your email" name="email" type="email" label="Email" />
                        <InputField placeholder="Please insert your password" name="password" type="password" label="Password" />
                        <div className="mt-2 mb-12">
                            <Link to="/login/forgotPassword" className="text-xs text-neutral-500">
                                Forgot password?
                            </Link>
                        </div>
                        <div>
                            <Button decoration="primary" type="submit" fullWidth={true}>
                                Login
                            </Button>
                            <div className="mt-2">
                                <p className="text-xs text-neutral-600 text-center mb-2">Don't have an account yet?</p>
                                <Link to="/register">
                                    <Button decoration="secondary" type="button" fullWidth={true}>
                                        Register
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Form>
                </Formik>
                {<Modal type="danger" data={serverResponse} show={show} onClose={() => setShow(false)} />}
            </div>
        </div>
    );
}

export default Login;
