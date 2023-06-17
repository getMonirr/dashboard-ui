"use client";
import { useContext } from "react";
import DashboardMenus from "./DashboardMenus/DashboardMenus";
import Profile from "./Profile";
import ProjectMenus from "./ProjectMenus";
import { SidebarViewProvider } from "@/Provider/SidebarProvider";

const LeftSidebar = () => {
  const { isShow } = useContext(SidebarViewProvider);

  return (
    <div
      className={`xl:w-[240px] border-r-[1px] px-8 min-h-screen py-8 ${
        isShow
          ? "block absolute transition-all w-full min-h-screen bg-white z-50 backdrop-blur-2xl"
          : "hidden lg:block"
      }`}
    >
      <Profile />
      <DashboardMenus />
      <div className="divider"></div>
      <ProjectMenus />
    </div>
  );
};

export default LeftSidebar;
