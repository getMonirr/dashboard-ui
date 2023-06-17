import Image from "next/image";
import Link from "next/link";
import React from "react";
import tag from "@/public/icons/link/tag.svg";
import add_circle from "@/public/icons/link/add_circle.svg";

const ProjectMenus = () => {
  const links = [
    {
      name: "Additional Calendar",
      path: "calender",
      icon: tag,
      count: 6,
    },
    {
      name: "Branch Logo Design",
      path: "logo-design",
      icon: tag,
      count: 11,
    },
    {
      name: "User Research",
      path: "research",
      icon: tag,
    },
    {
      name: "Marketing Sales",
      path: "marketing",
      icon: tag,
      count: 23,
    },
    {
      name: "New Project Template",
      path: "new-project",
      icon: add_circle,
    },
  ];

  return (
    <div className="leftBoard">
      <div className="collapse collapse-open collapse-arrow">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-xs font-medium px-0">Projects</div>
      <div className="collapse-content px-0">
        <ul className="space-y-[27px]">
          {links.map((item, index) => (
            <li key={index}>
              <Link href="/inbox" className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image src={item.icon} alt="link icon" />
                  <span className="text-xs">{item.name}</span>
                </div>
                {item.count && (
                  <div className="badge  text-[10px] font-extrabold text-[#2563EB] rounded-full bg-[#3B82F6]/10 px-[8px] py-[4px]">
                    {item.count}
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
    
  );
};

export default ProjectMenus;
