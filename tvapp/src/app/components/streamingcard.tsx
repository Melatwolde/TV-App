import Image from "next/image";
import { myVideos } from "./dummy_data";

const Streaming_cards = () => {
  return (
    <div className="text-white p-4 mt-5">
      <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold mb-4 px-2 py-2 bg-[#ED1C24] rounded-[16px] w-[164px] h-[51px]">
        On Air
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
        {myVideos.map((video, index) => (
          <div
            key={`${video.id}-${index}`} // Ensure the key is unique by appending the index
            className="relative w-full h-[120px] sm:h-[150px] lg:h-[200px] xl:h-[250px] 2xl:h-[260px] rounded-md overflow-hidden shadow-md"
          >
            {/* Background Image */}
            <Image
              src={video.thumbnail}
              alt={video.title}
              layout="fill"
              objectFit="cover"
              className="z-0"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent z-10" />

            {/* Title and Date */}
            <div className="absolute top-2 right-2 z-20 text-right text-white text-sm sm:text-base lg:text-lg xl:text-xl leading-tight">
              <div>{video.title}</div>
              <div className="text-xs sm:text-sm">{video.date}</div>
            </div>

            {/* Watch Now button */}
            <div className="absolute bottom-2 left-2 right-2 z-20 flex justify-between items-center gap-4">
              <button className="flex items-center bg-red-600 text-white text-xs sm:text-sm px-2 py-1 rounded">
                <Image
                  src={video.platformIcon}
                  alt="platform"
                  width={16}
                  height={16}
                  className="mr-1"
                />
                Watch Now
              </button>
              <Image
                src={video.status}
                alt="status"
                width={20}
                height={20}
                className="ml-2"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Streaming_cards;