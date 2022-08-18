import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import SearchResults from "../../components/SearchResults/SearchResults";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./HomePage.css";
import { useNavigate, Link, useParams } from "react-router-dom";

const HomePage = () => {
  const [user, token] = useAuth();
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [ videoId ] = useParams();

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        let response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?q=pasta&key=AIzaSyDP-VykMCpCjPn_1urJfupj4ZH6BVQTgpc&part=snippet`
        );

        setVideos(response.data.items);
      } catch (error) {
        console.log("error.response.data");
      }
    };
    fetchVideo();
  }, [token]);

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/video-page");
  }
  return (
    <div className="container">
      <h1>Welcome {user.username}!</h1>
      {console.log(videos.items)}
      {videos &&
        videos.map((video) => {
          return (
            <div>
              <Link to={`/video=${videoId}`}>
                {video.snippet && (
                  <img
                    type="image"
                    onClick={handleSubmit}
                    src={video.snippet.thumbnails.default.url}
                  />
                )}
              </Link>
            </div>
          );
        })}
      <div></div>
    </div>
  );
};

export default HomePage;

