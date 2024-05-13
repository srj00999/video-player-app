import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import PlayButton from './PlayButton';
import FullScreenButton from './FullScreenButton';
import SkipButton from './SkipButton';
import SpeedControl from './SpeedControl';
import '../components/VideoPlayer.css';

const VideoPlayer = ({ url, playNextMedia, playPreviousMedia }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [showControls, setShowControls] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case ' ':
          togglePlay();
          break;
        case 'ArrowUp':
          adjustVolume(0.1);
          break;
        case 'ArrowDown':
          adjustVolume(-0.1);
          break;
        case 'ArrowRight':
          skip(10);
          break;
        case 'ArrowLeft':
          skip(-10);
          break;
        case 'm':
          toggleMute();
          break;
        case 'f':
          toggleFullScreen();
          break;
        case 'Escape':
          exitFullScreen();
          break;
        case 'w':
          minimize();
          break;
        case 'n':
          playNextMedia();
          break;
        case 'p':
          playPreviousMedia();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setVolume(volume === 0 ? 0.5 : 0);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const exitFullScreen = () => {
    setIsFullScreen(false);
  };

  const minimize = () => {
    setIsMinimized(true);
  };

  const restore = () => {
    setIsMinimized(false);
  };

  const adjustVolume = (step) => {
    setVolume((prevVolume) => {
      let newVolume = prevVolume + step;
      newVolume = Math.min(Math.max(newVolume, 0), 1);
      return newVolume;
    });
  };

  const skip = (seconds) => {
    if (playerRef.current) {
      playerRef.current.seekTo(playerRef.current.getCurrentTime() + seconds, 'seconds');
    }
  };

  const handleProgressChange = (newProgress) => {
    setProgress(newProgress);
  };

  const handleMouseMove = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    setShowControls(false);
  };

  const handleDoubleClick = (event) => {
    event.preventDefault();

    event.stopPropagation();
  
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const halfWidth = rect.width / 2;
    
    if (clickX < halfWidth) {
      skip(-10);
    } else {
      skip(10);
    }
  };

  return (
    <div
      className={`video-player ${isFullScreen ? 'fullscreen' : ''}`}
      onDoubleClick={toggleFullScreen}
    >
      {isMinimized ? (
        <div className="minimized-player">
          <button onClick={restore}>Restore</button>
        </div>
      ) : (
        <ReactPlayer
          ref={playerRef}
          url={url}
          playing={isPlaying}
          controls={showControls || !isPlaying}
          volume={volume}
          playbackRate={speed}
          onProgress={(progress) => handleProgressChange(progress)}
          width={isFullScreen ? '100vw' : '100%'}
          height={isFullScreen ? '100vh' : 'auto'}
          onClick={handleDoubleClick}
        />
      )}
      <PlayButton isPlaying={isPlaying} togglePlay={togglePlay} />
      <FullScreenButton toggleFullScreen={toggleFullScreen} />
      <SkipButton seconds={-10} handleSkip={() => skip(-10)} />
      <SkipButton seconds={10} handleSkip={() => skip(10)} />
      <SpeedControl speed={speed} handleSpeedChange={setSpeed} />
      <button onClick={playPreviousMedia}>Previous</button>
      <button onClick={playNextMedia}>Next</button>
    </div>
  );
};

export default VideoPlayer;
