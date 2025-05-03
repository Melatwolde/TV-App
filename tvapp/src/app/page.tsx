import Image from "next/image";
import Stream_Images from '@/app/components/stream_image';
import NavBar from '@/app/components/header';
import MyVideos from '@/app/components/my_videos';
import ChannelPreview from '@/app/components/chanelpfp';
import {MediaCard} from '@/app/components/media_cards'; 
import { mediaCards } from '@/app/components/dummy_data'; 
import Series_one from '@/app/Series1/page';
import VideoPlayer from '@/app/components/play_vid';
import HomePage from '@/app/Homepage/page';

export default function Home() {
  return (
    <div>
      {/* Uncomment NavBar and Stream_Images if needed */}
      {/* <NavBar />
      <Stream_Images /> */}
      {/* <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center py-10">
        {mediaCards.map((card) => (
          <MediaCard key={card.id} card={card} />
        ))}
      </div> */}
      
      {/* <VideoPlayer/> */}
      <HomePage/>
      {/* Uncomment ChannelPreview if needed */}
      {/* <ChannelPreview /> */}
    </div>
  );
}