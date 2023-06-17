import Image from "next/image";
import React from "react";
import keyboard_voice from "@/public/icons/keyboard_voice.svg";
import input from "@/public/icons/input.svg";
import search from "@/public/icons/search.svg";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-8">
      <div className="form-control w-full max-w-[200px] relative">
        <Image alt="image" className="absolute left-5 top-4" src={search} />
        <input
          type="text"
          placeholder="Search Tasks"
          className="input input-bordered w-full max-w-[200px] py-6 pl-16 placeholder:text-xs"
        />
        <Image alt="image" className="absolute right-5 top-3" src={input} />
      </div>
      <Image alt="image" className="" src={keyboard_voice} />
    </div>
  );
};

export default SearchBar;
