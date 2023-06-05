import React from "react";

const formatViewCount = (count) => {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + "M";
  } else if (count >= 100000) {
    return (count / 1000).toFixed(0) + "K";
  } else {
    return count.toString();
  }
};

const truncateChannelTitle = (title) => {
  const words = title.split(" ");
  if (words.length <= 8) {
    return title;
  }
  return words.slice(0, 8).join(" ") + "...";
};

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const viewCount = formatViewCount(statistics.viewCount);
  const truncatedChannelTitle = truncateChannelTitle(title);

  return (
    <div className="p-6 flex flex-col">
      <img
        alt="thumbnails"
        src={thumbnails.medium.url}
        className="mb-4 rounded-lg"
      />
      <ul>
        <li>{truncatedChannelTitle}</li>
        <div className="flex text-gray-400 justify-between mt-2">
          <li>{channelTitle}</li>
          <li>{viewCount} views</li>
        </div>
      </ul>
    </div>
  );
};

export default VideoCard;
