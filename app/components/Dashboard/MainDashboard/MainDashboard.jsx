import React from "react";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import RightSidebar from "./RightSidebar/RightSidebar";
import MiddleDashboard from "./MiddleDashboard/MiddleDashboard";

const MainDashboard = () => {
  return (
    <div className="flex justify-between text-dash-text">
      <div>
        <LeftSidebar />
      </div>
      <div className="flex-1">
        <MiddleDashboard />
      </div>
      <RightSidebar />
    </div>
  );
};

export default MainDashboard;
