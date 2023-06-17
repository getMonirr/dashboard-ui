import React from "react";
import DashContainer from "../../Shared/DashContainer";
import Image from "next/image";
import menu from "@/public/icons/menu_open.svg";
import close from "@/public/icons/close.svg";
import TopNavbar from "./TopNavbar/TopNavbar";

const TopBar = () => {
  return (
    <div className="text-dash-text">
      <DashContainer>
        <div className="lg:flex justify-between items-center">
          <div className="flex  justify-between items-center w-full xl:w-[240px] lg:w-[247px] py-8 px-[30px] border-r-[1px] border-b-[1px]">
            <h2 className="font-bold text-xl">Dashboard</h2>
            <Image alt="image" className="cursor-pointer" src={menu} />
          </div>
          <div className="flex-1 hidden xl:block">
            <TopNavbar />
          </div>
          <div className="w-[88px] py-[33px] px-[30px] border-[1px] hidden lg:block">
            <Image alt="image" className="cursor-pointer" src={close} />
          </div>
        </div>
      </DashContainer>
    </div>
  );
};

export default TopBar;
