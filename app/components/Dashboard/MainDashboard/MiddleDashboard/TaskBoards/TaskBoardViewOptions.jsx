import Image from "next/image";

import dashboard from "@/public/icons/dashboard.svg";
import hamburger from "@/public/icons/hamburger.svg";
import lock from "@/public/icons/lock.svg";
import twitter from "@/public/icons/twitter.svg";
import search from "@/public/icons/search.svg";
import select_file from "@/public/icons/taskboard/select_file.svg";
import center_align from "@/public/icons/taskboard/center_align.svg";
import customize_arrangement from "@/public/icons/taskboard/customize_arrangement.svg";
import left_align from "@/public/icons/taskboard/left_align.svg";
import shape_circles from "@/public/icons/taskboard/shape_circles.svg";

const TaskBoardViewOptions = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:items-center justify-between py-7">
      <div className="flex flex-col lg:flex-row lg:items-center lg:divide-x-2 gap-2 lg:gap-4">
        <div className="join lg:join-horizontal border-[1px] w-[230px]">
          <button className="btn join-item capitalize text-gray-500 text-xs btn-sm">
            <Image alt="dashboard" src={dashboard} />
            Board View
          </button>
          <button className="btn join-item capitalize bg-white text-gray-500 text-xs btn-sm">
            <Image alt="dashboard" src={hamburger} /> List view
          </button>
        </div>
        <div>
          <div tabIndex={0} className="collapse collapse-arrow w-48 lg:pl-5">
            <div className="collapse-title p-0 py-1 min-h-0 text-xs font-medium">
              <div className="flex items-center gap-2">
                <Image alt="dashboard" src={lock} />
                <span className="text-xs">Limited Access</span>
              </div>
            </div>
            <div className="collapse-content">
              <p className="text-xs">Limited access option goes here</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 lg:pl-4">
          <p className="text-xs">Owners</p>
          <Image alt="twitter" src={twitter} />
          <p className="text-xs capitalize">twitter team</p>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-8">
          <div className="form-control w-full max-w-xs relative">
            <Image alt="image" className="absolute left-5 top-1" src={search} />
            <input
              type="text"
              placeholder="Search tasks"
              className="input input-bordered w-full lg:max-w-[176px] pl-12 rounded-lg placeholder:text-xs input-sm"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-evenly lg:justify-start gap-2">
        <button className="btn btn-square btn-outline bg-white border-[#EBEEF2] hover:bg-base-300 hover:border-[#EBEEF2]">
          <Image alt="icon" src={select_file} />
        </button>
        <button className="btn btn-square btn-outline bg-white border-[#EBEEF2] hover:bg-base-300 hover:border-[#EBEEF2]">
          <Image alt="icon" src={center_align} />
        </button>
        <button className="btn btn-square btn-outline bg-white border-[#EBEEF2] hover:bg-base-300 hover:border-[#EBEEF2]">
          <Image alt="icon" src={left_align} />
        </button>
        <button className="btn btn-square btn-outline bg-white border-[#EBEEF2] hover:bg-base-300 hover:border-[#EBEEF2]">
          <Image alt="icon" src={shape_circles} />
        </button>
        <button className="btn btn-square btn-outline bg-white border-[#EBEEF2] hover:bg-base-300 hover:border-[#EBEEF2]">
          <Image alt="icon" src={customize_arrangement} />
        </button>
      </div>
    </div>
  );
};

export default TaskBoardViewOptions;
