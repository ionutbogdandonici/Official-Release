import React from "react";
import { ThumbUpIcon, ChatAltIcon } from "@heroicons/react/outline";

// TODO - Link to user profile

function Post({ post }) {
    return (
        <div className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
            <div>
                <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                        <img src="https://avatars.dicebear.com/api/human/vittorio-sena.svg" alt="avatar" className="h-10 w-10 rounded-full" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-zinc-900">{post.user.firstName + " " + post.user.lastName}</p>
                        <p className="text-sm text-zinc-500">4 maggio 2022</p>
                    </div>
                    <div className="flex-shrink-0 self-center flex"></div>
                </div>
            </div>
            <div className="mt-2 text-sm text-zinc-700 space-y-4" dangerouslySetInnerHTML={post.content} />
            <div className="mt-6 flex justify-between space-x-8">
                <div className="flex space-x-6">
                    <span className="inline-flex items-center text-sm">
                        <button type="button" className="inline-flex space-x-2 text-zinc-400 hover:text-zinc-500">
                            <ThumbUpIcon className="h-5 w-5" aria-hidden="true" />
                            <span className="font-medium text-gray-900">189</span>
                            <span className="sr-only">likes</span>
                        </button>
                    </span>
                    <span className="inline-flex items-center text-sm">
                        <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                            <ChatAltIcon className="h-5 w-5" aria-hidden="true" />
                            <span className="font-medium text-gray-900">9</span>
                            <span className="sr-only">replies</span>
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Post;
