import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from 'axios';
import { Navigate } from "react-router-dom";
import useCustomForm from "../../hooks/useCustomForm";

const CommentForm = (props) => {
    const [user, token] = useAuth();
    const [videoId, setVideoId] = useState(props.videoId)
    const [formData, handleInputChange, handleSubmit] = useCustomForm(
        initialValues,
        makeNewComment
      );
    
let initialValues = {
    user: "2",
    video_id: "",
    text: "",
    likes: "0",
    dislikes: "0"
};

async function makeNewComment() {
    try {
        FormData.video_id=props.videoId
        let response = await axios.post("http://127.0.0.1:8000/api/comments/", formData , {
            headers: {
                Authorization: "Bearer" + token, 
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}

return (
    <div className="container">
        <form className="form-group" onSubmit={handleSubmit}>
            <input 
                type="text"
                name="comment-text"
                value={formData.comment-text}
                onChange={handleInputChange}
            />
            <button type="submit" className="text-submission">Make Post</button>
        </form>
    </div>
)
}

export default CommentForm