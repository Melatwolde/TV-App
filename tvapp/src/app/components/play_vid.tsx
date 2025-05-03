'use client';

import { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from 'react-icons/fa';

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true); // State to control visibility of controls
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null); // Timer reference

  const resetControlsTimer = () => {
    // Clear the existing timer
    if (timer) clearTimeout(timer);

    // Show controls and set a new timer to hide them after 3 seconds
    setShowControls(true);
    const newTimer = setTimeout(() => {
      setShowControls(false);
    }, 3000);
    setTimer(newTimer);
  };

  useEffect(() => {
    const handleUserActivity = () => resetControlsTimer();

    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('click', handleUserActivity);
    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('click', handleUserActivity);
      if (timer) clearTimeout(timer);
    };
  }, [timer]);

  const handlePlayPause = () => {
    alert(isPlaying ? 'Pause functionality not applicable for images.' : 'Play functionality not applicable for images.');
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    alert('Next image functionality not implemented.');
  };

  const handlePrev = () => {
    alert('Previous image functionality not implemented.');
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/95 to-transparent z-5"></div>

      <div className="absolute inset-0 w-full h-full">
        <img
          src="/thumbnail.png"
          alt="Thumbnail"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-5 right-5 bg-black/70 text-white px-4 py-2 text-lg font-bold rounded-lg">
          Image Title
        </div>
        <div className="absolute bottom-14 left-0 w-full px-6 z-10">
          <div className="relative h-2 bg-gray-300 rounded-full">
            <div className="absolute h-2 bg-red-600 rounded-full" style={{ width: '40%' }} />
            <div
              className="absolute w-3 h-3 bg-white rounded-full top-[-3.9px]"
              style={{ left: '40%' }}
            />
          </div>
        </div>
        <div className="absolute bottom-2 left-3 text-start text-white font-semibold text-sm z-10">Post Stream</div>
        <div className="absolute bottom-2 left-0 z-10 w-full text-center text-white font-semibold text-sm">
          Streaming Title
        </div>

        {/* Playback Controls */}
        {showControls && (
          <div className="absolute bottom-24 left-0 w-full flex items-center justify-center z-10">
            <div className="flex flex-row gap-5">
              <FaStepBackward className="cursor-pointer" style={{ width: '50px', height: '50px' }} />
              <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full border-2 border-neutral-300 text-[26px] mb-1">15</div>
              <FaPlay onClick={handlePlayPause} className="cursor-pointer" style={{ width: '50px', height: '50px' }} />
              <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full border-2 border-neutral-300 text-[26px] mb-1">15</div>
              <FaStepForward onClick={handleNext} className="cursor-pointer" style={{ width: '50px', height: '50px' }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;