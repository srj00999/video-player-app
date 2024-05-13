import React from 'react';

const PlayButton = ({ isPlaying, togglePlay }) => {
  return (
    <button onClick={togglePlay}>
      {isPlaying ? 'Pause' : 'Play'}
    </button>
  );
};

export default PlayButton;
