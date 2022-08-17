import { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
const SearchPage = (props) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search?q=songs vintage&key=AIzaSyDP-VykMCpCjPn_1urJfupj4ZH6BVQTgpc",
          {
            // headers: {
            //   Authorization: "Bearer " + token,
            // },
          }
        );
        console.log(response.data);
        setVideos(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div>
      <iframe
        id="ytplayer"
        type="text/html"
        width="320"
        height="180"
        src="https://www.youtube.com/embed/pPG0o8zZDnY?autoplay=1&origin=http://example.com"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default SearchPage;
