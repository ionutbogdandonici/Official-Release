import React, { useState, useEffect } from "react";
import { ThumbUpIcon, ChatAltIcon } from "@heroicons/react/outline";
import axios from "axios";

function Post({ post }) {
    const [comments, setComments] = useState();

    useEffect(() => {
        axios
            .get(`http://localhost:3030/comment/get/${post.id}`, {
                headers: {
                    "Access-Token": sessionStorage.getItem("accessToken"),
                },
            })
            .then((res) => {
                setComments(res.data.length);
            });
    }, []);
    // It dosen't work with the following code:
    // .slice(0,10).replace(/-/g, '/')
    const createdAt = post.createdAt;

    return (
        <div className="my-6 bg-white px-4 py-6 shadow sm:p-6 rounded-lg">
            <div>
                <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                        <img src={`https://avatars.dicebear.com/api/human/${post.firstName}-${post.lastName}.svg`} alt="avatar" className="h-10 w-10 rounded-full" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-zinc-900">{post.firstName + " " + post.lastName}</p>
                        <p className="text-sm text-zinc-500">{createdAt}</p>
                    </div>
                    <div className="flex-shrink-0 self-center flex"></div>
                </div>
            </div>
            <div className="mt-2 font-medium text-zinc-800">{post.title}</div>
            <div className="mt-2 text-sm text-zinc-700 space-y-4">{post.content}</div>
            <div className="mt-6 flex justify-between space-x-8">
                <div className="flex space-x-6">
                    <span className="inline-flex items-center text-sm">
                        <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                            <ChatAltIcon className="h-5 w-5" aria-hidden="true" />
                            <span className="font-medium text-gray-900">{comments}</span>
                            <span className="sr-only">replies</span>
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Post;
