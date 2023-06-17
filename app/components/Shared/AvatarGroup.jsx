import avatar from "@/public/icons/img/avatar.jpg";
import add_button from "@/public/icons/add_button.svg";
import Image from "next/image";

const AvatarGroup = ({ ratio = "w-[40px] h-[40px]", hidden = false }) => {
  return (
    <div className="flex justify-between taskBoard-avatar-group items-center">
      <div className="avatar-group -space-x-4">
        {!hidden && (
          <div className="avatar">
            <div className={`${ratio}`}>
              <Image src={avatar} />
            </div>
          </div>
        )}
        <div className="avatar">
          <div className={`${ratio}`}>
            <Image src={avatar} />
          </div>
        </div>
        <div className="avatar">
          <div className={`${ratio}`}>
            <Image src={avatar} />
          </div>
        </div>
        <div className="avatar placeholder">
          <div className={` bg-[#F2F4F7] text-neutral-content ${ratio}`}>
            <span className="text-gray-500 font-extrabold text-xs">+5</span>
          </div>
        </div>
      </div>
      <div className="avatar placeholder ml-8 xl:ml-0 rounded-full">
        <div
          className={`bg-[#F2F4F7] rounded-full text-neutral-content cursor-pointer ${ratio}`}
        >
          <Image className="w-full" src={add_button} />
        </div>
      </div>
    </div>
  );
};

export default AvatarGroup;
