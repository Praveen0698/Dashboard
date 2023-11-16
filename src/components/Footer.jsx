import React from "react";
import DateObject from "react-date-object";

const Footer = () => {
  const dateYear = new DateObject().year;
  return (
    <>
      <div className="footer-container">
        <div className="copy">
          <p>
            Copyright &copy; {dateYear}{" "}
            <span className="foot-span">Orive Solutions</span>
          </p>
        </div>
        <div className="nav-links">
          <p>Home</p>
          <p>Themes</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
