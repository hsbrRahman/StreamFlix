import Image from "next/image";
import React from "react";
import { ModeToggle } from "./ThemeToggler";
import { GenreSelect } from "./GenreSelect";
const Header = () => {
  return (
    <div className="w-full flex justify-between items-center p-5 bg-[#121212] ">
      <div className="flex items-center">
        <Image alt="icon" src={"/images/file.png"} width={70} height={90} />
        <p className="text-2xl font-semibold text-white">STREAMFLIX</p>
      </div>
      <div className="flex gap-2">
        <GenreSelect />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
