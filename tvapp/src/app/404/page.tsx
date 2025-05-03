'use client'    
import { useEffect, useState } from "react";
import Link from "next/link";
import NavBar from "@/app/components/header";

import Image from "next/image";
const HomePage = () => {
  return (
    <div className="fixed inset-0 min-h-screen flex flex-col overflow-y-auto overflow-x-hidden">
        
        
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <NavBar />
      </div>
      <div className="flex flex-1 justify-center items-center">  <Image
            src="/empty.png"
            alt="Chef background"
            width={689}
            height={578}            />
        </div>
    </div>
  );
};

export default HomePage;