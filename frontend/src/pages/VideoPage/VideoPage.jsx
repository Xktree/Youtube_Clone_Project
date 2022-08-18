import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
// import "../../components/VideoPlayer/VideoPlayer.css";
import CommentList from "../../components/CommentList/CommentList";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import { useParams } from "react-router-dom";

const VideoPage = (props) => {
  const [user,token] = useAuth(); 
  
  return (
    <div>
        <div>
            <VideoPlayer/>
            <RelatedVideos/>
        </div>
    </div>
  )

  }

export default VideoPage;
