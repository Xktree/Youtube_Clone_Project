import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import SearchPage from "../SearchPage/SearchPage";

const YoutubeHomePage = () => {
  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/login/", {
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
      <h1>Home Page for {user.username}!</h1>
      {videos &&
        videos.map((video) => (
          <p key={video.id}>{/* {car.year} {car.model} {car.make} */}</p>
        ))}
    </div>
  );
};

export default YoutubeHomePage;
