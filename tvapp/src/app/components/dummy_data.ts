// Interfaces
export interface Stream {
    title: string;
    views: string;
    tag: string;
    schedule?: string; 
    isLive?: boolean; 
    thumbnail: string;
  }
  
  export interface Category {
    title: string;
    streams: Stream[];
  }
  
  export interface SidebarItem {
    label: string;
    icon: string;
  }
  
  export interface TopNavItem {
    label: string;
    icon: string;
  }
  
  // Planned Streams
  export const plannedStreams: Stream[] = [
    {
      title: "Channel Name",
      views: "159K",
      tag: "Politic",
      schedule: "Today 18:00",
      thumbnail: "/stream.png",
    },
    {
      title: "Channel Name",
      views: "159K",
      tag: "Life Style",
      schedule: "Today 18:00",
      thumbnail: "/stream.png",
    },
    {
      title: "Channel Name",
      views: "159K",
      tag: "Politic",
      schedule: "Tomorrow 18:00",
      thumbnail: "/stream.png",
    },
  ];
  
  // Live Streams
  export const liveStreams: Stream[] = [
    {
      title: "Channel Name",
      views: "159K",
      tag: "Politic",
      isLive: true,
      thumbnail: "/images/live-1.jpg",
    },
    {
      title: "Channel Name",
      views: "159K",
      tag: "Life Style",
      isLive: true,
      thumbnail: "/images/live-2.jpg",
    },
    {
      title: "Channel Name",
      views: "159K",
      tag: "Politic",
      isLive: true,
      thumbnail: "/images/live-3.jpg",
    },
  ];
  
  // Categories
  export const categories: Category[] = [
    {
      title: "Planned Streams",
      streams: plannedStreams,
    },
    {
      title: "Live Streams",
      streams: liveStreams,
    },
  ];
  
  // Sidebar Items
  export const sidebarItems: SidebarItem[] = [
    {
      label: "Stream Destpek",
      icon: "/icons/music.svg",
    },
    {
      label: "TV Channels",
      icon: "/icons/tv.svg",
    },
    {
      label: "Live Streams",
      icon: "/icons/live.svg",
    },
  ];
  
  // Top Navigation Items
  export const navIcons = [
    { name: "Destpek", icon: "/icons/destpeck.svg" },
    { name: "Müzik", icon: "/icons/music.svg" },
    { name: "Sinema", icon: "/icons/cinema.svg" },
    { name: "Stream", icon: "/icons/stream.svg" },
    { name: "YekBûnTV", icon: "/icons/yekbuntv.svg" },
    { name: "ZarokTV", icon: "/icons/yekbuntv.svg" },
    { name: "Eyar", icon: "/icons/yekbuntv.svg" },
    { name: "36 D 36", icon: "/icons/archiv.svg" },
    { name: "User", icon: "/stream.png" },
  ];
  
  export const myVideos = [
    {
      id: 1,
      title: "Video Title",
      date: "12.12.2023",
      thumbnail: "/thumbnail.png", 
      platformIcon: "/icons/youtube.svg",
      status: '/icons/live.svg'      
    },
    {
      id: 2,
      title: "Video Title",
      date: "12.12.2023",
      thumbnail: "/thumbnail.png",
      platformIcon: "/icons/youtube.svg",
      status: '/icons/live.svg'
    },
    {
      id: 3,
      title: "Video Title",
      date: "12.12.2023",
      thumbnail: "/thumbnail.png",
      platformIcon: "/icons/youtube.svg",
      status: '/icons/live.svg'
    },
    {
      id: 4,
      title: "Video Title",
      date: "12.12.2023",
      thumbnail: "/thumbnail.png",
      platformIcon: "/icons/youtube.svg",
      status: '/icons/live.svg'
    },
    {
      id: 4,
      title: "Video Title",
      date: "12.12.2023",
      thumbnail: "/thumbnail.png",
      platformIcon: "/icons/youtube.svg",
      status: '/icons/live.svg'
    },
    {
      id: 4,
      title: "Video Title",
      date: "12.12.2023",
      thumbnail: "/thumbnail.png",
      platformIcon: "/icons/youtube.svg",
      status: '/icons/live.svg'
    },
    
  ];

  export interface MediaCard {
    id: number;
    title: string;
    image: string;
    route: string;
  }
  
  export const mediaCards: MediaCard[] = [
    {
      id: 1,
      title: "Stream Destpek",
      image: "/card.png",
      route: "/stream-destpek"
    },
    {
      id: 2,
      title: "TV Channels",
      image: "/card.png",
      route: "/tv-channels"
    },
    {
      id: 3,
      title: "Live Streams",
      image: "/card.png",
      route: "/live-streams"
    },
    
  ];
  
