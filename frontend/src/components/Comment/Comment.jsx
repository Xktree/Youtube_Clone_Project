import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'; 

const Comment = (props) => {
    const [comment, setComment] = useState(props.comment)

    useEffect(() => {
        setComment(props.comment)
    },[props.videoId])
}

return(
    <div className="shadow-around-comment-box">
        <h5 className="comment-box-header">{props.comment.user.username}</h5>
        <div className="comment-text">{props.comment.text}</div>
    </div>
)

export default Comment