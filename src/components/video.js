// src/components/VideoPage.js

import React from 'react';
import './video.css';

const VideoPage = () => {
  const videoUrl = 'https://youtu.be/xfT9irwnaI4'; // Replace with your video URL
  const videoTitle = 'LMS'; // Replace with your video title
  const videoDescription = 'This is a sample video for demonstration purposes.'; // Replace with your video description

  return (
    <div className="video-page">
      <h1>{videoTitle}</h1>
      <div className="video-container">
        <video controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p>{videoDescription}</p>
    </div>
  );
};

export default VideoPage;
