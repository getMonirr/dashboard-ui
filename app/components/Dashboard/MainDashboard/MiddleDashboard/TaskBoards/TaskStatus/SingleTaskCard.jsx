import Image from "next/image";

import task1 from "@/public/icons/taskboard/task-1.svg";
import file_present from "@/public/icons/taskboard/file_present.svg";
import message from "@/public/icons/taskboard/message.svg";
import AvatarGroup from "@/app/components/Shared/AvatarGroup";

const SingleTaskCard = () => {
  return (
    <div className="card w-full bg-base-100 shadow-xl rounded-lg">
      <div className="card-body p-5 xl:p-3">
        <div>
          <h2 className="card-title text-xs text-[#1F2633] justify-between font-medium">
            Model Answer
            <div className="flex items-center gap-[10px]">
              <Image alt="more" src={task1} />
              <span className="text-blue-600 font-extrabold text-[10px]  ">
                4
              </span>
            </div>
          </h2>
        </div>
        <div className="flex gap-2 items-center my-3">
          <div className="badge badge-primary bg-white text-gray-600 border-[#EBEEF2] text-[8px] font-extrabold">
            #UI007
          </div>
          <div className="badge badge-primary bg-[#3b82f61a] text-blue-600 border-[#EBEEF2] text-[8px] font-extrabold">
            Design
          </div>
          <div className="badge badge-primary bg-[#eab3081a] text-yellow-600 border-[#EBEEF2] text-[8px] font-extrabold">
            #Backlog
          </div>
        </div>
        <div className="flex justify-between items-center">
          <AvatarGroup
            hidden={true}
            ratio="w-[32px]  h-[32px] xl:w-[27px]  xl:h-[27px]"
          />
          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-[10px]">
              <Image alt="more" src={file_present} />
              <span className="text-purple-600-600 font-extrabold text-[10px]  ">
                2
              </span>
            </div>
            <div className="flex items-center gap-[10px]">
              <Image alt="more" src={message} />
              <span className="text-[#D97706] font-extrabold text-[10px]  ">
                3
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTaskCard;
