import Image from "next/image";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import folder_open from "@/public/icons/folder_open.svg";
import notifications_none from "@/public/icons/notifications_none.svg";
import avatar from "@/public/icons/img/avatar.jpg";
import UserProfile from "@/app/components/Shared/UserProfile";

const TopNavbar = () => {
  return (
    <div className="flex justify-between items-center border-b-[1px] py-[21px] px-[30px]">
      <div>
        <SearchBar />
      </div>
      <Navbar />
      <div className="flex items-center gap-4">
        <Image alt="image" className="cursor-pointer" src={folder_open} />
        <Image
          alt="image"
          className="cursor-pointer"
          src={notifications_none}
        />
        <UserProfile />
      </div>
    </div>
  );
};

export default TopNavbar;
