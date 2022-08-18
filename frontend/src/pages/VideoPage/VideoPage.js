import React from "react";
import useAuth from "../../hooks/useAuth";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Comment from "../../components/Comment/Comment"
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";


const VideoPage = (props) => {
  const [user, token] = useAuth();

  return (
    <div>
      <div>
        <VideoPlayer />
        <RelatedVideos />
        <Comment User={user.username}/>
      </div>
    </div>
  );
};

export default VideoPage;
