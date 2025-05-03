import Image from "next/image";
import { plannedStreams } from "./dummy_data";
const StreamCard = () => {
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 ml-[300px]">
     {plannedStreams.map((stream, index) => (
        <div
          key={index}
          className="relative bg-[#111] rounded-xl overflow-hidden shadow-md"
        >
          {/* Image with fixed size */}
          <Image
            src={stream.thumbnail}
            alt={stream.title}
            width={600} // Set the width explicitly
            height={500} // Set the height explicitly
            className="object-cover w-full h-full hd:h-[700px]"
            priority
          />
      
            {/* Gradient Overlay */}  
            <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(33, 32, 32, 0.0001) 22.4%, rgba(0, 0, 0, 0.659) 44.01%, #000000 80.35%)",
            }}
          />
      {/* Top-right overlay info */}
      <div className="absolute top-16 right-3 text-white font-genos">
            <span className="text-sm sm:text-base lg:text-lg font-semibold">
              {stream.title}
            </span>
            <div className="flex gap-2 mt-1 text-xs sm:text-sm">
              <div className="flex items-center gap-1 px-2 py-0.5 bg-[#222] rounded-full">
                <span>👍</span>
                <span>{stream.views}</span>
              </div>
              <div className="px-2 py-0.5 bg-[#222] rounded-full">
                {stream.tag}
              </div>
            </div>
          </div>

      {/* Bottom-right overlay time */}
      <div className="absolute bottom-3 right-3 bg-[#333] text-white text-sm px-3 py-1 rounded-full flex items-center gap-2 font-medium">
        <span>🔔</span>
        <span>Today 18:00</span>
      </div>
      </div>
    ))}
    </div>
  );
};

export default StreamCard;
