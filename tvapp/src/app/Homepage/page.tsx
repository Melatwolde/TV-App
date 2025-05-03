'use client'    
import { useEffect, useState } from "react";
import Link from "next/link";
import NavBar from "../components/header";
import StreamCard from "../components/stream_image";
import { MediaCard } from "@/app/components/media_cards";
import { mediaCards } from "@/app/components/dummy_data";
import Streaming_cards from "@/app/components/streamingcard";
import Image from "next/image";
const HomePage = () => {
  const [sidebarHeight, setSidebarHeight] = useState(0);

  useEffect(() => {
    // Calculate the height of the sidebar dynamically
    const cardHeight = 40; // Approximate height of each MediaCard
    const calculatedHeight = mediaCards.length*cardHeight; // Adjust as needed
    setSidebarHeight(calculatedHeight); // Negative margin to offset the sidebar height
  }, []);

  return (
    <div className="fixed inset-0 min-h-screen flex flex-col overflow-y-auto overflow-x-hidden">
        
        
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <NavBar />
      </div>

      {/* Sidebar with Media Cards */}
      <div className="absolute top-[80px] left-0 w-[300px] h-[calc(100vh-80px)] overflow-y-auto shadow-md z-40">
        <div className="flex flex-col items-center py-4">
          {mediaCards.map((card) => (
            <MediaCard key={card.id} card={card} />
          ))}
        </div>
      </div>
      <Link href='/Channel'>
          <div>
            <StreamCard />
          </div>
      </Link>
      
      <Link href="/Series1">
        <div className="ml-[300px] cursor-pointer">
          <Streaming_cards />
        </div>
      </Link>
      

      
    </div>
  );
};

export default HomePage;