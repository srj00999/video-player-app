import React from 'react';

const ProgressBar = ({ progress, handleProgressChange }) => {
  return (
    <div className="progress-bar">
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={progress}
        onChange={(e) => handleProgressChange(parseFloat(e.target.value))}
      />
    </div>
  );
};

export default ProgressBar;
