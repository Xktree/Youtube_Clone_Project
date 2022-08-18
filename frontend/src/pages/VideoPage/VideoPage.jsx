import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import CommentForm from "../../components/CommentForm/CommentForm";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
// import "../../components/VideoPlayer/VideoPlayer.css";
import CommentList from "../../components/CommentList/CommentList";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import { useParams } from "react-router-dom";

const VideoPage = (props) => {
  const videoId = useParams();

  useEffect(() => {
    console.log(props.selectedVideo);
  }, []);

  useEffect(() => {
    props.getVideoComments(videoId);
    props.getRelatedVideos(videoId);
  }, [props.selectedVideo]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [videoId]);

  return (
    <div className="container">
      <div className="row">
        <div>
          <VideoPlayer videoId={props.selectedVideo.id.videoId} />

          <div className="video-description">
            {props.selectedVideo.snippet.description}
          </div>
          <div>
            <CommentList
              videoId={props.selectedVideo.id.videoId}
              comments={props.comments}
              getVideoComments={props.getVideoComments}
            ></CommentList>
          </div>
        </div>
        <div>
          <RelatedVideos
            relatedVideos={props.searchedVideos}
            getRelatedVideos={props.getRelatedVideos}
            chooseVideo={props.chooseVideo}
            submitVideoInfo={props.submitVideoInfo}
          ></RelatedVideos>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
