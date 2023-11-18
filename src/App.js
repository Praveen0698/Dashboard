import React from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Dashboard from "./components/Dashboard";
import Company from "./organisation/CompanyFile";
import EditCompany from "./organisation/EditCompany";
import LocationFile from "./organisation/LocationFile";
import Department from "./organisation/Department";
import Designation from "./organisation/Designation";
import Announcements from "./organisation/Announcements";
import Policies from "./organisation/Policies";
import Expenses from "./organisation/Expenses";
import PreviewCompany from "./organisation/PreviewCompany";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/organisation/company" element={<Company />} />
          <Route
            path="/organisation/company/editcompany"
            element={<EditCompany />}
          />
          <Route
            path="/organisation/company/previewcompany"
            element={<PreviewCompany />}
          />
          <Route path="/organisation/location" element={<LocationFile />} />
          <Route path="/organisation/department" element={<Department />} />
          <Route path="/organisation/designation" element={<Designation />} />
          <Route
            path="/organisation/announcements"
            element={<Announcements />}
          />
          <Route path="/organisation/policies" element={<Policies />} />
          <Route path="/organisation/expenses" element={<Expenses />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
