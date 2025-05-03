import Image from "next/image";
import { navIcons } from "./dummy_data";

const NavBar = () => {
  return (
    <div className="bg-black px-4 py-2 flex items-center justify-between rounded-md shadow-md gap-6 overflow-x-auto">
      {/* Left Icons */}
      <div className="flex items-center gap-6">
        {navIcons.slice(0, 4).map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center text-xs text-white w-[60px]"
          >
            <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src={item.icon}
                alt={item.name}
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <span
              className={`mt-1 ${item.name === "Stream" ? "text-green-500" : ""}`}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Search Input */}
      <div className="flex-1 max-w-sm">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-1.5 rounded-full bg-white text-black placeholder:text-gray-500 outline-none"
        />
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-6">
        {navIcons.slice(4).map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center text-xs text-white w-[60px]"
          >
            <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src={item.icon}
                alt={item.name}
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <span className="mt-1">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
