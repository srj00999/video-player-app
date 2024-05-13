import React from 'react';

const FullScreenButton = ({ toggleFullScreen }) => {
  return (
    <button onClick={toggleFullScreen}>
      Full Screen
    </button>
  );
};

export default FullScreenButton;
