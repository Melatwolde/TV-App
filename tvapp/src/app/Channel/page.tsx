'use client'    
import { useEffect, useState } from "react";
import ChannelPreview from "../components/chanelpfp";
import NavBar from "../components/header";
import { MediaCard } from "@/app/components/media_cards";
import { mediaCards } from "@/app/components/dummy_data";
import Image from "next/image";
import NextStreamReminder from "@/app/components/next_reminder";
import Link from "next/link";
import MyVideos from "@/app/components/my_videos";
const Channel = () => {
  const [sidebarHeight, setSidebarHeight] = useState(0);

  useEffect(() => {
    // Calculate the height of the sidebar dynamically
    const cardHeight = 40; // Approximate height of each MediaCard
    const calculatedHeight = mediaCards.length * cardHeight; // Adjust as needed
    setSidebarHeight(calculatedHeight); // Negative margin to offset the sidebar height
  }, []);

  return (
    <div className="fixed inset-0 min-h-screen flex flex-col overflow-y-auto overflow-x-hidden">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/95 to-transparent z-10"></div>
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/bg.png"
          alt="Chef background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <NavBar />
      </div>

      {/* Sidebar with Media Cards */}
      <div className="absolute top-[80px] left-5 w-[300px] h-[calc(100vh-80px)] overflow-y-auto shadow-md z-40">
        <div className="flex flex-col items-center py-4">
          {mediaCards.map((card) => (
            <MediaCard key={card.id} card={card} />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-[320px] mt-[100px]  z-30"> {/* 20px gap from both the sidebar and navbar */}
        <NextStreamReminder />
      </div>
      <Link href="/player">
        <div className="relative left-1 w-full overflow-x-auto z-50 top-[120px]" style={{ marginTop: `-${sidebarHeight-20}px` }}>
          <MyVideos />
        </div>
        </Link>
    </div>
  );
};

export default Channel;