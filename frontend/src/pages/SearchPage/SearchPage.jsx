import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchResults from "../../components/SearchResults/SearchResults";

const SearchPage = (props) => {

  function handleSubmit(videoId) {
    let newVideoId = videoId
    props.submitVideoInformation(newVideoId)
  }

  console.log('Search Results', props.videos)
  return(
      <div className='container'>
              <div className='row'>
                  {props.videos.map((video) => (                        
                          <div key={video.id.videoId} onClick={()=>{handleSubmit(video.id.videoId)}}>
                              <VideoCard video={video} />
                          </div>                      
                  ))}
              </div>

      </div>
  )
}
export default SearchPage
