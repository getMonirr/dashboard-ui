import Image from "next/image";
import more_horiz from "@/public/icons/taskboard/more_horiz.svg";

const TaskHeading = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-6">
        <span className="text-sm font-semibold">Backlog tasks</span>
        <div className="badge badge-primary bg-[#EAB308] bg-opacity-10 badge-sm p-3 rounded-full  py-4 text-[#CA8A04] border-0">
          5
        </div>
      </div>
      <Image alt="more" src={more_horiz} />
    </div>
  );
};

export default TaskHeading;
