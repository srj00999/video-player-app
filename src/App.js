import React, { useState } from 'react';
import VideoPlayer from '../src/components/VideoPlayer.js';

const App = () => {
  const mediaUrls = [
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
  ];

  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const playNextMedia = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % mediaUrls.length);
  };

  const playPreviousMedia = () => {
    setCurrentMediaIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? mediaUrls.length - 1 : newIndex;
    });
  };

  return (
    <div className="app">
      <VideoPlayer url={mediaUrls[currentMediaIndex]} playNextMedia={playNextMedia} playPreviousMedia={playPreviousMedia} />
    </div>
  );
};

export default App;
