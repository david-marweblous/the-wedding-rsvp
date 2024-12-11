import React, { useRef, useState } from 'react';

const MusicPlayer: React.FC = () => {
  // Create a reference for the audio element
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Track if the audio is playing
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Function to handle play/pause toggle
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="music-player">
      <h3>Now Playing: Your Song</h3>
      <audio ref={audioRef} src="/music/song.mp3" preload="auto" />
      <div>
        <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      </div>
    </div>
  );
};

export default MusicPlayer;
