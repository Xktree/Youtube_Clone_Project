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
          "https://www.googleapis.com/youtube/v3/search?q=songs vintage&key=AIzaSyCeEU7lGtu4ZcNC1HaJUp4P3LLjDsopaXw&part=snippet",
          {
            // headers: {
            //   Authorization: "Bearer " + token,
            // },
          }
        );
        console.log(response.data);
        setVideos(response.data);
      } catch (error) {
        console.log("hello");
      }
    };
    fetchVideos();
  }, []);

  return (
    <div> {videos.map((video) => {
      return (
        <div> <img src={video.items.snippet.thumbnails.default.url}/></div>
      )
    })}
      
    </div>
  );
};

export default SearchPage;
