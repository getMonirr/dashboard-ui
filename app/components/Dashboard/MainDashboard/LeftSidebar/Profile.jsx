import Image from "next/image";
import person from "@/public/icons/img/avatar.jpg";
import unfold_more from "@/public/icons/unfold_more.svg";

const Profile = () => {
  return (
    <div className="hidden lg:block">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div>
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image alt="image" src={person} />
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-gray-800 text-xs mb-1">
              Nancy Martino
            </h2>
        <p className="text-gray-400 text-[11px]">Designer</p>
          </div>
        </div>

        <div>
          <Image alt="image" className="cursor-pointer" src={unfold_more} />
        </div>
      </div>
      
      <div className="divider"></div>
    </div>
  );
};

export default Profile;
