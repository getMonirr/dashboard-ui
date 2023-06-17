import Image from "next/image";

import TaskBoardViewOptions from "./TaskBoards/TaskBoardViewOptions";
import TaskBoardsNavbar from "./TaskBoards/TaskBoardsNavbar";

import SingleTaskCard from "./TaskBoards/TaskStatus/SingleTaskCard";
import TaskHeading from "./TaskBoards/TaskStatus/TaskHeading";

const MiddleDashboard = () => {
  return (
    <div className="py-9 px-4 lg:p-9 taskBoard">
      <TaskBoardsNavbar />
      <TaskBoardViewOptions />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div>
          {/* heading */}
          <div className="mb-8">
            <TaskHeading />
          </div>
          {/* // task card */}
          <div className="space-y-6">
            <SingleTaskCard />
            <SingleTaskCard />
            <SingleTaskCard />
            <SingleTaskCard />
          </div>
        </div>
        <div>
          {/* heading */}
          <div className="mb-8">
            <TaskHeading />
          </div>
          {/* // task card */}
          <div className="space-y-6">
            <SingleTaskCard />
            <SingleTaskCard />
            <SingleTaskCard />
            <SingleTaskCard />
          </div>
        </div>
        <div>
          {/* heading */}
          <div className="mb-8">
            <TaskHeading />
          </div>
          {/* // task card */}
          <div className="space-y-6">
            <SingleTaskCard />
            <SingleTaskCard />
            <SingleTaskCard />
            <SingleTaskCard />
          </div>
        </div>
        <div>
          {/* heading */}
          <div className="mb-8">
            <TaskHeading />
          </div>
          {/* // task card */}
          <div className="space-y-6">
            <SingleTaskCard />
            <SingleTaskCard />
            <SingleTaskCard />
            <SingleTaskCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleDashboard;
