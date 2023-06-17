"use client";
import React, { createContext, useState } from "react";

export const SidebarViewProvider = createContext(null);

const SidebarProvider = ({ children }) => {
  const [isShow, setIsShow] = useState(false);
  const viewInfo = {
    isShow,
    setIsShow,
  };

  return (
    <SidebarViewProvider.Provider value={viewInfo}>
      {children}
    </SidebarViewProvider.Provider>
  );
};

export default SidebarProvider;
