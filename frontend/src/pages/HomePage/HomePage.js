import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import SearchResults from "../../components/SearchResults/SearchResults";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./HomePage.css";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import { useNavigate, Link } from "react-router-dom";

const HomePage = () => {
  const [user, token] = useAuth();
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/login", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        // setUser(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchUser();
  }, [token]);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        let response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search?relatedToVideoId=EN02_J3MnAM&type=video&key=AIzaSyDP-VykMCpCjPn_1urJfupj4ZH6BVQTgpc&part=snippet"
        );

        setVideos(response.data);
      } catch (error) {
        console.log("error.response.data");
      }
    };
    fetchVideo();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/video-page");

    return event;
  }
  return (
    <div className="container">
      <h1>Welcome {user.username}!</h1>
      {/* <div>{videos.items.filter(snippet => !snippet.assigned).map((snippet) => )}</div> */}
      {console.log(videos.items)}
      {videos.items &&
        videos.items.map((video) => {
          <div>
            <img
              type="image"
              onClick={handleSubmit}
              src={video.snippet.thumbnails.default.url}
            />
          </div>;
        })}
    </div>
  );
};

export default HomePage;
/* <VideoDetails video={video} />; */
