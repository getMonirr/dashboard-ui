import DashboardMenus from "./DashboardMenus/DashboardMenus";
import Profile from "./Profile";
import ProjectMenus from "./ProjectMenus";

const LeftSidebar = () => {
  return (
    <div className="lg:w-[302px] border-r-[1px] px-8 min-h-screen py-8 hidden lg:block">
      <Profile />
      <DashboardMenus />
      <div className="divider"></div>
      <ProjectMenus />
    </div>
  );
};

export default LeftSidebar;
