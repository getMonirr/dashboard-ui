import Image from "next/image";
import React from "react";
import new_task_button from "@/public/icons/taskboard/new_task_button.svg";

const AddNewTask = () => {
  return (
    <div className="w-full bg-white shadow-xl rounded-lg flex items-center justify-center p-2 cursor-pointer">
      <Image alt="plus" src={new_task_button} />
    </div>
  );
};

export default AddNewTask;
