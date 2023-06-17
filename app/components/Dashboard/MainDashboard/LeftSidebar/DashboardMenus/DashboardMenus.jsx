import Image from "next/image";
import Link from "next/link";
import React from "react";
import inbox from "@/public/icons/link/inbox.svg";
import drive_folder_upload from "@/public/icons/link/drive_folder_upload.svg";
import dashboard_customize from "@/public/icons/link/dashboard_customize.svg";
import access_time from "@/public/icons/link/access_time.svg";
import data_usage from "@/public/icons/link/data_usage.svg";
import space_dashboard from "@/public/icons/link/space_dashboard.svg";
import sell from "@/public/icons/link/sell.svg";
import payment from "@/public/icons/link/payment.svg";
import lock_clock from "@/public/icons/link/lock_clock.svg";
import image_search from "@/public/icons/link/image_search.svg";
import tune from "@/public/icons/link/tune.svg";

const DashboardMenus = () => {
  const links = [
    {
      name: "Inbox",
      path: "inbox",
      icon: inbox,
      count: 4,
    },
    {
      name: "Drive Files",
      path: "drive-files",
      icon: drive_folder_upload,
      count: 435,
    },
    {
      name: "dashboards",
      path: "dashboards",
      icon: dashboard_customize,
      count: 5,
    },
    {
      name: "Updates",
      path: "access-time",
      icon: access_time,
    },
    {
      name: "Analytics",
      path: "data-usage",
      icon: data_usage,
      count: 2,
    },
    {
      name: "CRM Dashboard",
      path: "space-dashboard",
      icon: space_dashboard,
      count: 2,
    },
    {
      name: "Ecommerce",
      path: "ecommerce ",
      icon: sell,
    },
    {
      name: "Cryptocurrency",
      path: "cryptocurrency",
      icon: payment,
      count: 4,
    },
    {
      name: "Projects",
      path: "project",
      icon: lock_clock,
    },
    {
      name: "NFT Marketplace",
      path: "NFT-marketplace",
      icon: image_search,
    },
    {
      name: "Settings",
      path: "settings",
      icon: tune,
      count: 2,
    },
  ];

  return (
    <div className="leftBoard">
      <div className="collapse collapse-open collapse-arrow">
        <input type="radio" name="accordion" defaultChecked />
        <div className="collapse-title text-xs font-medium px-0">Dashboard</div>
        <div className="collapse-content px-0">
          <ul className="space-y-[27px]">
            {links.map((item, index) => (
              <li key={index}>
                <Link
                  href="/inbox"
                  className="flex items-center justify-between"
                >
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

export default DashboardMenus;
