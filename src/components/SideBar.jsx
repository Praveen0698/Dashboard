import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const [dropdown, setDropdown] = useState("org-dropdown");
  const [empDropdown, setEmpDropdown] = useState("org-dropdown");
  const [perDropdown, setPerDropdown] = useState("org-dropdown");
  const [timeDropdown, setTimeDropdown] = useState("org-dropdown");
  const [payDropdown, setPayDropdown] = useState("org-dropdown");
  const [reqDropdown, setReqDropdown] = useState("org-dropdown");
  const [trainDropdown, setTrainDropdown] = useState("org-dropdown");

  const handleOrgclick = () => {
    if (dropdown === "org-dropdown") {
      setDropdown("org-open");
    } else {
      setDropdown("org-dropdown");
    }
  };
  const handleEmpclick = () => {
    if (empDropdown === "org-dropdown") {
      setEmpDropdown("org-open");
    } else {
      setEmpDropdown("org-dropdown");
    }
  };

  const handlePerclick = () => {
    if (perDropdown === "org-dropdown") {
      setPerDropdown("org-open");
    } else {
      setPerDropdown("org-dropdown");
    }
  };

  const handleTimeclick = () => {
    if (timeDropdown === "org-dropdown") {
      setTimeDropdown("org-open");
    } else {
      setTimeDropdown("org-dropdown");
    }
  };

  const handlePayclick = () => {
    if (payDropdown === "org-dropdown") {
      setPayDropdown("org-open");
    } else {
      setPayDropdown("org-dropdown");
    }
  };
  const handleReqclick = () => {
    if (reqDropdown === "org-dropdown") {
      setReqDropdown("org-open");
    } else {
      setReqDropdown("org-dropdown");
    }
  };
  const handleTrainclick = () => {
    if (trainDropdown === "org-dropdown") {
      setTrainDropdown("org-open");
    } else {
      setTrainDropdown("org-dropdown");
    }
  };

  const navigation = useNavigate();

  return (
    <>
      <div className="sidebar-container">
        <h3>Orive Solutions</h3>

        <p>Dashboard</p>
        <p id="dropdown" onClick={handleOrgclick}>
          Organisation<i className="fa-solid fa-caret-down"></i>
        </p>
        <div className={dropdown}>
          <p onClick={() => navigation("/organisation/company")}>Company</p>
          <p onClick={() => navigation("/organisation/location")}>Location</p>
          <p onClick={() => navigation("/organisation/department")}>
            Department
          </p>
          <p onClick={() => navigation("/organisation/designation")}>
            Designation
          </p>
          <p onClick={() => navigation("/organisation/announcements")}>
            Announcements
          </p>
          <p onClick={() => navigation("/organisation/policies")}>Policies</p>
          <p onClick={() => navigation("/organisation/expenses")}>Expenses</p>
        </div>
        <p id="dropdown" onClick={handleEmpclick}>
          Employees<i className="fa-solid fa-caret-down"></i>
        </p>
        <div className={empDropdown}>
          <p>Employees</p>
          <p>SetRoles</p>
          <p>Awards</p>
          <p>Transfers</p>
          <p>Resignation</p>
          <p>Travels</p>
          <p>Promotions</p>
          <p>Complaints</p>
          <p>Warnings</p>
          <p>Termination</p>
          <p>Last Login</p>
          <p>Employee Exit</p>
        </div>
        <p id="dropdown" onClick={handlePerclick}>
          Performance<i className="fa-solid fa-caret-down"></i>
        </p>
        <div className={perDropdown}>
          <p>Indicator</p>
          <p>Appraisel</p>
        </div>
        <p id="dropdown" onClick={handleTimeclick}>
          Timesheets<i className="fa-solid fa-caret-down"></i>
        </p>
        <div className={timeDropdown}>
          <p>Attendance</p>
          <p>Date Wise Attendance</p>
          <p>Update Attendance</p>
          <p>Leaves</p>
          <p>Office Shifts</p>
          <p>Holidays</p>
        </div>
        <p id="dropdown" onClick={handlePayclick}>
          Payroll<i className="fa-solid fa-caret-down"></i>
        </p>
        <div className={payDropdown}>
          <p>Payroll Templates</p>
          <p>Hourly Wages</p>
          <p>Manage Salary</p>
          <p>Advance Salary</p>
          <p>Generate Payslip</p>
          <p>Payment History</p>
        </div>
        <p>Projects</p>
        <p>Tickets</p>
        <p>Worksheet</p>
        <p id="dropdown" onClick={handleReqclick}>
          Requirement<i className="fa-solid fa-caret-down"></i>
        </p>
        <div className={reqDropdown}>
          <p>Job Posts</p>
          <p>Job Listing Frontend</p>
          <p>Job Candidates</p>
          <p>Job Interviews</p>
        </div>
        <p id="dropdown" onClick={handleTrainclick}>
          Training<i className="fa-solid fa-caret-down"></i>
        </p>
        <div className={trainDropdown}>
          <p>Training List</p>
          <p>Trainer List</p>
        </div>
      </div>
    </>
  );
};

export default SideBar;
