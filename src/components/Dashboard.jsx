import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <SideBar />
      <div className="head-foot-part">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
