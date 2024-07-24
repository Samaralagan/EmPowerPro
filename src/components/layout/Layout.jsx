import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css";

import SideBar from "../common/SideBar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="dashboard">
      <SideBar/>
      <div className="dashboard-content">
        <div className="col min-vh-100 page">
          <Header />
          <hr />
          <div className="outlet">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
