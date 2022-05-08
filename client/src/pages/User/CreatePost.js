import React from "react";
import { useNavigate } from "react-router-dom";
import ForbbidenPage from "../Errors/ForbbidenPage";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import Button from "../Components/Button";

function CreatePost() {
    
    const navigator = useNavigate();


    if (!sessionStorage.getItem("accessToken")) {
        return <ForbbidenPage />;
    } else {
        const initialValues = {
            title: "",
            content: "",
        };

        const validationSchema = yup
            .object()
            .shape({
                title: yup.string().required("Title is required"),
                content: yup.string().required("Content is required"),
            })
            .defined();

        const publish = (data) => {
            axios.post("http://localhost:3030/post/publish", data, {
                headers: {
                    "Access-Token": sessionStorage.getItem("accessToken"),
                }
            }).then((res) => {
                console.log(res);
                navigator(`/user/${res.data.body.userId}/home`);
            });
        };

        return (
            <div className="py-10">
                <header>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold leading-tight text-gray-900">Create Post</h1>
                    </div>
                </header>
                <main>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="px-4 py-8 sm:px-0">
                            <div className="bg-white shadow rounded-lg p-2 sm:px-8 sm:py-6">
                                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={publish}>
                                    <Form>
                                        <div className="flex flex-col ">
                                            <Field id="title" name="title" type="text" className="p-2 text-2xl text-zinc-900 font-semibold placeholder:text-zinc-400 outline-none" placeholder="Title" />
                                            <ErrorMessage name="title" component="div" className="text-red-600 font-semibold text-sm mt-2" />
                                            <hr className="my-2" />
                                            <Field id="content" as="textarea" name="content" rows="4" className="p-2 text-base text-zinc-700 font-base placeholder:text-zinc-400 outline-none" placeholder="Content" />
                                            <ErrorMessage name="content" component="div" className="text-red-600 font-semibold text-sm mt-2" />
                                        </div>
                                        <div className="flex flex-row-reverse">
                                            <Button type="submit" decoration="primary" fullWidth={false} margin="w-full sm:w-auto sm:px-16">
                                                Publish
                                            </Button>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default CreatePost;
