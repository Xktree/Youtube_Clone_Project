import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import SearchPage from "../../components/SearchResults/SearchResults";
import SearchBar from "../../components/SearchBar/SearchBar";
import './HomePage.css'

const HomePage = () => {
  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setVideos(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchVideos();
  }, [token]);
  return (
    <div className="container">
      <h1>Welcome {user.username}!</h1>
      {videos &&
        videos.map((video) => (
          <p key={video.id} onClick={() => {handleSubmit(video.id)}}> <VideoCard video={video}/></p>
        ))}
    </div>
  );
};

export default HomePage;
