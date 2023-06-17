import Image from "next/image";
import React from "react";
import edit from "@/public/icons/edit.svg";

import Link from "next/link";
import AvatarGroup from "@/app/components/Shared/AvatarGroup";

const TaskBoardsNavbar = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-4 justify-between items-center">
      <div className="flex items-center gap-4 2xl:gap-7">
        <h2 className="text-2xl 2xl:text-3xl font-bold">Task Boards</h2>
        <Image alt="edit" src={edit} />
      </div>
      <div>
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 lg:gap-8 font-bold text-xs">
          <Link className="text-gray-800" href="/timeline">
            Timeline
          </Link>
          <Link className="text-gray-400" href="/calender">
            Calender
          </Link>
          <Link className="text-gray-400" href="/dashboard">
            Dashboard
          </Link>
          <Link className="text-gray-400" href="/progress">
            Progress
          </Link>
          <Link className="text-gray-400" href="/forms">
            Forms
          </Link>
          <Link className="text-gray-400" href="/more">
            more
          </Link>
        </div>
      </div>
      <AvatarGroup />
    </div>
  );
};

export default TaskBoardsNavbar;
