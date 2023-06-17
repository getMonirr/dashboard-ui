import UserProfile from "@/app/components/Shared/UserProfile";
import React from "react";

const RightSidebar = () => {
  const arraylength = 10;
  const userArray = Object.keys([...Array(arraylength)]).map(
    (i) => Number(i) + 1
  );

  // also can render with user status (online, offline, notification, photo)
  return (
    <div className="hidden lg:w-[88px] border-l-[1px] lg:flex lg:flex-col gap-10 justify-center items-center">
      {userArray.map((user, index) => (
        <UserProfile key={index} />
      ))}
    </div>
  );
};

export default RightSidebar;
