import React from "react";
import { Formik, Form } from "formik";
import InputField from "./Components/InputField";
import Button from "./Components/Button";
import * as Yup from "yup";
import axios from "axios";

function ForgotPassword() {
    const initialValues = {
        email: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string().email("Email is invalid").required("Email is required"),
    }).defined();

    const handleSubmit = (values) => {
        axios.post("http://localhost:3030/auth/login/forgotPassword", values).then((res) => {})
    };

    return (
        <div>
            <h1>Forgot Password</h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form>
                    <InputField name="email" label="Email" type="email" />
                    <Button type="submit">Submit</Button>
                </Form>
            </Formik>
        </div>
    );
}

export default ForgotPassword;
