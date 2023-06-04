import React, { useEffect } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constant';

const VideoContainer = () => {
  useEffect (() => {
   getVideos();
  },[]) 

  const getVideos = async () => {
    const data = await fetch (YOUTUBE_VIDEO_API);
    const 
  }
  return (
    <div>

    </div>
  )
}

export default VideoContainer