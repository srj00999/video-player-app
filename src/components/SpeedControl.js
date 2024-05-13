import React, { useState } from 'react';

const SpeedControl = ({ handleSpeedChange }) => {
  const [speed, setSpeed] = useState(1);

  const handleChange = (event) => {
    const newSpeed = parseFloat(event.target.value);
    setSpeed(newSpeed);
    handleSpeedChange(newSpeed);
  };

  return (
    <div className="speed-control">
      <select value={speed} onChange={handleChange}>
        <option value="0.5">0.5x</option>
        <option value="0.75">0.75x</option>
        <option value="1">1x</option>
        <option value="1.25">1.25x</option>
        <option value="1.5">1.5x</option>
        <option value="2">2x</option>
        <option value="4">4x</option>
      </select>
    </div>
  );
};

export default SpeedControl;
