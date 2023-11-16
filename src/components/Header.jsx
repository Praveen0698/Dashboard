import React from "react";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search" name="search" />
        </div>
        <div className="profile">
          <i className="fa-solid fa-user"></i>
          <p>Samistha jena</p>
        </div>
      </div>
    </>
  );
};

export default Header;
