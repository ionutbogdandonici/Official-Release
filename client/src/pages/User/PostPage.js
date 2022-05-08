import React, { useState, useEffect } from "react";
import Post from "../Components/Post";
import { Formik, Form } from "formik";
import axios from "axios";
import * as yup from "yup";
import InputField from "../Components/InputField";
import Button from "../Components/Button";
import Comment from "../Components/Comment";
import { useNavigate } from "react-router-dom";


function PostPage() {
    
    const navigator = useNavigate();

    const [postData, setPostData] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const postId = window.location.pathname.substring(13, 15);

    useEffect(() => {
        axios
            .get(`http://localhost:3030/comment/get/${postId}`, {
                headers: {
                    "Access-Token": sessionStorage.getItem("accessToken"),
                },
            })
            .then((res) => {
                setComments(res.data);
            });
        axios
            .get(`http://localhost:3030/post/${postId}`, {
                headers: {
                    "Access-Token": sessionStorage.getItem("accessToken"),
                },
            })
            .then((res) => {
                setPostData(res.data);
            });
    }, []);

    const initialValues = {
        comment: "",
    };

    const validationSchema = yup
        .object()
        .shape({
            comment: yup.string().required("Comment is required"),
        })
        .defined();

    const handleSubmit = (data) => {
        axios
            .post(`http://localhost:3030/comment/add/${postId}`, data, {
                headers: {
                    "Access-Token": sessionStorage.getItem("accessToken"),
                },
            })
            .then((res) => {
                setComments([...comments, newComment]);
                setNewComment("");
                navigator(0);
            });
    };

    return (
        <div className="md:grid md:grid-cols-5 lg:grid-cols-3">
            <div className="col-start-2 md:col-end-5 lg:col-end-3">
                <div className="bg-zinc-50 rounded-lg pb-2">
                    <div>
                        <Post post={postData} />
                    </div>
                    <div>
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                            <Form>
                                <div className="flex flex-col space-y-2 mx-2 my-2">
                                    <InputField name="comment" type="text" placeholder="Comment here" attributes="my-0 w-full" onChange={(event) => setNewComment(event.target.value)} />
                                    <Button type="submit" decoration="primary" fullWidth={true}>
                                        Comment
                                    </Button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                    <div>
                        {comments.map((comment) => {
                            return (
                                <Comment key={comment.id} comment={comment} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostPage;
