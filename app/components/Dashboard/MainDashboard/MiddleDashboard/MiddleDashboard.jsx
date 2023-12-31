import Image from "next/image";

import TaskBoardViewOptions from "./TaskBoards/TaskBoardViewOptions";
import TaskBoardsNavbar from "./TaskBoards/TaskBoardsNavbar";

import SingleTaskCard from "./TaskBoards/TaskStatus/SingleTaskCard";
import TaskHeading from "./TaskBoards/TaskStatus/TaskHeading";
import AddNewTask from "./TaskBoards/TaskStatus/AddNewTask";

const MiddleDashboard = () => {
  return (
    <div className="py-9 px-4 md:px-8 xl:p-9 taskBoard lg:-mt-20 xl:mt-0">
      <TaskBoardsNavbar />
      <TaskBoardViewOptions />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div>
          {/* heading */}
          <div className="mb-8">
            <TaskHeading name="Backlog Tasks" count="5" />
          </div>
          {/* // task card */}
          <div className="space-y-6">
            <SingleTaskCard />
            <SingleTaskCard />
            <SingleTaskCard />
            <SingleTaskCard />
            <AddNewTask />
          </div>
        </div>
        <div>
          {/* heading */}
          <div className="mb-8">
            <TaskHeading name="To Do Tasks" count={4} />
          </div>
          {/* // task card */}
          <div className="space-y-6">
            <SingleTaskCard />
            <SingleTaskCard />
            <AddNewTask />
          </div>
        </div>
        <div>
          {/* heading */}
          <div className="mb-8">
            <TaskHeading name="In Progress" count={2} />
          </div>
          {/* // task card */}
          <div className="space-y-6">
            <SingleTaskCard />
            <SingleTaskCard />
            <SingleTaskCard />
            <AddNewTask />
          </div>
        </div>
        <div>
          {/* heading */}
          <div className="mb-8">
            <TaskHeading name="Done" count={5} />
          </div>
          {/* // task card */}
          <div className="space-y-6">
            <SingleTaskCard />
            <SingleTaskCard />
            <SingleTaskCard />
            <SingleTaskCard />
            <SingleTaskCard />
            <AddNewTask />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleDashboard;
