import React, {useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



const RelatedVideos = (props) => {
    const { videoId } = useParams;
    const [relatedVideos, setRelatedVideos] = useState([]);

    useEffect(() => {
        fetchRelatedVideos(videoId);
    }, []);

    async function fetchRelatedVideos(videoId) {
        let response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=AIzaSyDP-VykMCpCjPn_1urJfupj4ZH6BVQTgpc&part=snippet"
    );

    console.log(response.data.items);
    setRelatedVideos(response.data.items);
    }

    function handleSubmit(event) {
        event.fetchRelatedVideos(videoId)
    }

    return (
            <div>{relatedVideos && relatedVideos.map((relatedVideo) => {
                return (<div>
                    {relatedVideo.snippet && <img
                       type="image"
                       onClick={handleSubmit}
                       src={relatedVideo.snippet.thumbnails.default.url}
                     />}
                   </div>);
                 })}
             </div>
           );
         };

export default RelatedVideos;