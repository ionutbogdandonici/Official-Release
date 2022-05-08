import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Post from "../Components/Post";
import { Link } from "react-router-dom";

function UserContent() {
    const [listOfPosts, setListOfPosts] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3030/post/", {
                headers: {
                    "Access-Token": sessionStorage.getItem("accessToken"),
                },
            })
            .then((res) => {
                setListOfPosts(res.data);
            });
    }, []);

    return (
        <div className="md:grid md:grid-cols-5 lg:grid-cols-3">
            <div className="col-start-2 md:col-end-5 lg:col-end-3">
                {listOfPosts.map((post) => {
                    return (
                        <Link key={post.id} to={window.location.pathname.replace("/home", "/post/") + post.id}>
                            <Post post={post} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default UserContent;
