'use client';

import { FaBell,FaThumbsUp } from 'react-icons/fa';
import { MdOutlineEventAvailable } from 'react-icons/md';

const NextStreamReminder = () => {
  return (
    <div className='ml-10'>
        <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold">Channel Name</h1>
        <p className="text-lg md:text-2xl">Owner Name</p>
    <div className="flex flex-wrap items-center gap-4 mt-4">
        
              <div className="flex items-center gap-2 text-sm xl:text-base bg-white/10 px-4 py-2 rounded-[16px]">
                <FaThumbsUp className="text-white" />
                <span>159K</span>
              </div>
              <div className="flex items-center gap-2 text-sm xl:text-base bg-white/10 px-4 py-2 rounded-[16px]">
                
                <span>12+</span>
              </div>
              <div className="flex items-center gap-2 text-sm xl:text-base bg-white/10 px-4 py-2 rounded-[16px]">
                
                <span>Life Style</span>
              </div>
             
            </div>
    <div className="w-[380px] h-[250px] bg-white/25 rounded-2xl flex flex-col items-center justify-center text-white shadow-md p-6 mt-4">
      {/* Calendar Icon */}
      <MdOutlineEventAvailable size={50} className="text-white mb-4" />

      {/* Title */}
      <h2 className="text-xl font-semibold text-center">Next Streaming Title</h2>

      {/* Date Info */}
      <p className="mt-2 text-lg font-medium">Tomorrow</p>
      <p className="text-md font-bold">18:00</p>

      {/* Bell Icon */}
      <FaBell size={40} className="text-white mt-6 mb-2" />

      {/* CTA */}
      <button className="text-white text-sm bg-transparent border-none font-medium">
        Remind me
      </button>
    </div>
    </div>
  );
};

export default NextStreamReminder;
