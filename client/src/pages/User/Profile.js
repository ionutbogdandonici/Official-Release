import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import axios, { Axios } from "axios";
import InputField from "../Components/InputField";
import Button from "../Components/Button";
import Modal from "../Components/Modal";


function NewPost() {
    const postId = window.location.pathname.substring(6, 7);
    const [user, setUser] = useState({});

    const [show, setShow] = useState(false);
    const [modal, setModal] = useState({});

    const initialValues = {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    };

    const validationSchema = yup
        .object()
        .shape({
            currentPassword: yup.string().required("Current password is required"),
            newPassword: yup.string().required("New password is required"),
            confirmPassword: yup
                .string()
                .oneOf([yup.ref("newPassword"), null], "Passwords must match")
                .required("Confirm password is required"),
        })
        .defined();

    useEffect(() => {
        axios.get(`http://localhost:3030/user/${postId}`, {
            headers: {
                "Access-Token": sessionStorage.getItem("accessToken"),
            }
        }).then((res) => {
            setUser(res.data.user);
        });
    }, []);

    const onSubmit = (data) => {
        axios
            .post(`http://localhost:3030/user/updatePassword`, data, {
                headers: {
                    "Access-Token": sessionStorage.getItem("accessToken"),
                },
            })
            .then((res) => {
                if(res.data.header === "Success"){
                    setModal({
                        type: "success",
                        header: "",
                        body: "Password updated"
                    })
                }else{
                    setModal({
                        type: "danger",
                        header: "Error",
                        body: "Current password is incorrect"
                    })
                }
                setShow(true);
            });
    };

    return (
        <div className="py-10">
            <header>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold leading-tight text-gray-900">Profile</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="px-4 py-8 sm:px-0">
                        <div className="bg-zinc-50 shadow rounded-lg">
                            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                                <Form>
                                    <div className="mt-0">
                                        <div className="md:grid md:grid-cols-3 md:gap-6">
                                            <div className="md:col-span-1">
                                                <div className="p-4">
                                                    <h3 className="text-lg font-medium leading-6 text-zinc-900">Personal Information</h3>
                                                    <p className="mt-1 text-sm text-zinc-500">Here you can see your personal information and upgrade your password.</p>
                                                </div>
                                            </div>
                                            <div className="mt-5 md:mt-0 md:col-span-2">
                                                <div className="border-t sm:border-t-0  md:border-l overflow-hidden rounded-b-lg md:rounded-bl-none md:rounded-r-lg">
                                                    <div className="px-4 py-5 bg-white sm:p-6">
                                                        <div className="grid grid-cols-6 gap-4">
                                                            <div className="col-span-6 sm:col-span-3">
                                                                <InputField name="firstName" label="First Name" placeholder={user.firstName} disabled={true} />
                                                            </div>

                                                            <div className="col-span-6 sm:col-span-3">
                                                                <InputField name="lastName" label="Last Name" placeholder={user.lastName} disabled={true} />
                                                            </div>

                                                            <div className="col-span-6">
                                                                <InputField name="email" label="Email" placeholder={user.email} disabled={true} />
                                                            </div>

                                                            <div className="col-span-6">
                                                                <InputField name="currentPassword" attributes={"w-full"} label="Password" placeholder="Enter your current password" type="password" />
                                                            </div>
                                                            <div className="col-span-6 sm:col-span-3">
                                                                <InputField name="newPassword" attributes={"w-full"} label="New Password" placeholder="Enter your new password" type="password" />
                                                            </div>
                                                            <div className="col-span-6 sm:col-span-3">
                                                                <InputField name="confirmPassword" attributes={"w-full"} label="Confirm Password" placeholder="Confirm your new password" type="password" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="px-4 py-3 bg-zinc-50 text-right sm:px-6">
                                                        <Button type="submit" label="Update">
                                                            Update
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            </Formik>
                            {<Modal show={show} type={modal.type} onClose={() => setShow(false)} data={modal} />}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default NewPost;
