
import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../fbase-config";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
    const [title, setTitle] = useState();
    const [postText, setPostText] = useState();

    const postsCollectionRef = collection(db, "posts");
    let navigate = useNavigate();
    const createPost = async () => {
        await addDoc(postsCollectionRef, { title, postText, author: { name: auth.currentUser.displayName, id: auth.currentUser.uid, } });
        navigate("/");
    };

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }


    }, [])
    return (
        <div className="createPostpage">
            <div className="cpContainer">
                <h1>Create a post</h1>
                <div className="inpuGp">
                    <label>Title: </label>
                    <input placeholder="title" onChange={(event) => { setTitle(event.target.value) }} />
                </div>
                <div className="inpuGp">
                    <label>Post: </label>
                    <textarea placeholder="Post" onChange={(event) => { setPostText(event.target.value) }} />
                    <button onClick={createPost}>Submit Post</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;