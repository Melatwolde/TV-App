'use client';

import Image from 'next/image';
import { FaUserFriends, FaPlay, FaThumbsUp } from 'react-icons/fa';
import { MdOutlineCategory } from 'react-icons/md';

export default function ChannelPreview() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)]  flex items-center px-6 md:px-16 xl:px-24 2xl:px-40">
 
      <div className="absolute inset-0 -z-10">
        {/* <Image
          src="/thumbnail.png"
          alt="Chef background"
          fill
          priority
          className="object-cover object-center"
        /> */}
        
      </div>

     
      <div className="text-white max-w-4xl space-y-6 z-10">
        <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold">Channel Name</h1>
        <p className="text-lg md:text-2xl">Owner Name</p>

        <div className="flex flex-wrap items-center gap-4">
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
        <div className="flex items-center gap-2 text-sm xl:text-base px-4 py-2 rounded-[16px]">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <Image
                key={i}
                src="/stream.png" 
                alt="User Avatar"
                width={32} 
                height={32}
                className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white"
              />
              ))}
            </div>
            <span>30+ Online</span>
          </div>

        <button className="bg-[#81B616] hover:bg-green-600 text-white text-sm md:text-base font-semibold px-6 py-3 rounded-full mt-6 inline-flex items-center gap-3">
          <FaPlay />
          Join to Stream
        </button>
      </div>
    </section>
  );
}
