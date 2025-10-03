import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div>
      <Navbar />
      {/* <h1 className="text-3xl">This is applayout page</h1> */}
      <Outlet />
    </div>
  );
}

export default AppLayout;
