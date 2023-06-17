import React from "react";
import TopBar from "./TopBar/TopBar";
import MainDashboard from "./MainDashboard/MainDashboard";

const Dashboard = () => {
  return (
    <div className="bg-dash-bg">
      <TopBar />
      <MainDashboard />
    </div>
  );
};

export default Dashboard;
