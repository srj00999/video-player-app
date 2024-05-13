import React from 'react';

const VolumeControl = ({ volume, handleVolumeChange }) => {
  return (
    <div className="volume-control">
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
      />
    </div>
  );
};

export default VolumeControl;
