import React from 'react';

const SkipButton = ({ seconds, handleSkip }) => {
  return (
    <button onClick={() => handleSkip(seconds)}>
      {seconds > 0 ? `Skip +${seconds}s` : `Skip ${seconds}s`}
    </button>
  );
};

export default SkipButton;
