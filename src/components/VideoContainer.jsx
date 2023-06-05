// import React, { useEffect, useState } from "react";
// import { YOUTUBE_VIDEO_API } from "../utils/constant";
// import VideoCard from "./VideoCard";

// const VideoContainer = () => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     getVideos();
//   }, []);

//   const getVideos = async () => {
//     const data = await fetch(YOUTUBE_VIDEO_API);
//     const json = await data.json();
//     console.log(json.items);
//     setVideos(json.items);
//   };

//   return (
//     <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
//       {videos.map((video) => (
//         <VideoCard key={video.id} info={video} />
//       ))}
//     </div>
//   );
// };

// export default VideoContainer;
import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
