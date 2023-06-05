// import React from "react";

// const VideoCard = ({ info }) => {
//   const { snippet, statistics } = info;
//   const { channelTitle, title, thumbnails } = snippet;
//   return (
//     <div className="p-6 border w-[1/3] flex-col flex">
//       <img alt="thumbnails" src={thumbnails.medium.url} />
//       <ul>
//         <li>{title}</li>
//         <li>{channelTitle}</li>
//         <li>{statistics.viewCount}</li>
//       </ul>
//     </div>
//   );
// };

// export default VideoCard;
import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-6  flex flex-col">
      <img
        alt="thumbnails"
        src={thumbnails.medium.url}
        className="mb-4 rounded-lg"
      />
      <ul>
        <li>{title}</li>
        <div className="flex text-gray-400 justify-between mt-2">
          <li>{channelTitle}</li>
          <li>{statistics.viewCount}</li>
        </div>
      </ul>
    </div>
  );
};

export default VideoCard;
