import Image from "next/image";
import React from "react";
import avatar from "@/public/icons/img/avatar.jpg";

const UserProfile = () => {
  return (
    <div className="avatar indicator before:block before:absolute before:inset-1 before:rounded-full before:w-5 before:h-5  before:bg-red-500 before:border-4 before:border-white before:top-6 before:left-6 cursor-pointer ">
      <span className="indicator-item badge badge-secondary bg-red-500 text-white font-bold rounded-full">
        4
      </span>
      <div className="w-[32px]  rounded-full   ring ring-blue-500 ring-offset-base-100 ring-offset-2">
        <Image alt="image" src={avatar} />
      </div>
    </div>
  );
};

export default UserProfile;
