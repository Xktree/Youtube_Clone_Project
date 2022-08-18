import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const VideoPlayer = (props) => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    console.log(videoId);
    fetchVideo();
  }, []);

  async function fetchVideo() {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=AIzaSyDP-VykMCpCjPn_1urJfupj4ZH6BVQTgpc&part=snippet`
    );

    console.log(response.data.items);
    setVideo(response.data.items);
  }
  return (
    <div>
      <iframe
        title="Youtube video"
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
        frameBorder="0"
      ></iframe>
      <div>
        <Link to = '/video-page'>
        <p>{video.snippet.title}</p>
        <p>{video.snippet.description}</p>
        </Link>
      </div>
    </div>
  );
};

export default VideoPlayer;
