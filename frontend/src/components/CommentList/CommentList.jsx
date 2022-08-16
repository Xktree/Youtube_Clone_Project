import React, { useState } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Comment from '../Comment';
import CommentForm from '../../CommentForm/CommentForm';

const CommentList = (props) => {

    useState(() => {
        props.getVideoComments(props.videoId)
    })

        return (  
            <div className="comment">
            <div className='comment'>
                <CommentForm videoId={props.videoId} getVideoComments={props.getVideoComments}></CommentForm>
            </div>
            <h5 className='section-header'>All Comments</h5>
            {props.comments &&
                props.comments.map((el) => {
                    return (
                    <div className='comment-align: left'>
                        <Comment videoId={props.videoId} getVideoComments={props.getVideoComments} comment={el} />
                    </div>
                    )}
                )}
            </div>
        )
}
 
export default CommentList;