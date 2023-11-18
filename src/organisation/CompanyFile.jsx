import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #e5e1e1",
  boxShadow: 2,
  p: 2,
};

const CompanyFile = () => {
  const navigation = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [list, setList] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [trendingName, setTrendingName] = useState("");
  const [cin, setCin] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [gst, setGst] = useState("");
  const [uan, setUan] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    const tableRow = {
      id: uuidv4(),
      companyName,
      companyType,
      trendingName,
      cin,
      number,
      email,
      website,
      gst,
      uan,
      address,
    };

    setCompanyName("");
    setCompanyType("");
    setTrendingName("");
    setCin("");
    setNumber("");
    setEmail("");
    setWebsite("");
    setGst("");
    setUan("");
    setAddress("");
    setList([...list, tableRow]);
    console.log(tableRow);
  };

  //   delete code

  const handleDelete = (id) => {
    setList(list.filter((row) => row.id !== id));
  };
  return (
    <>
      <div className="dashboard-container">
        <SideBar />
        <div className="head-foot-part">
          <Header />
          <section className="company-table">
            {/* <Search search={search} setSearch={setSearch} /> */}
            <table className="table table-bordered table-hover shadow">
              <thead>
                <tr className="text-center">
                  <th>ID</th>
                  <th>Company Name</th>
                  <th>Company Type</th>
                  <th>Email</th>
                  <th>Website</th>
                  <th colSpan="3">Actions</th>
                </tr>
              </thead>

              <tbody className="text-center">
                {list.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.companyName}</td>
                      <td>{item.companyType}</td>
                      <td>{item.email}</td>
                      <td>{item.website}</td>
                      <td className="mx-2">
                        <button
                          className="btn btn-primary"
                          onClick={() =>
                            navigation(`/organisation/company/previewcompany`, {
                              state: { list: list, id: item.id },
                            })
                          }
                        >
                          <FaEye />
                        </button>
                      </td>
                      <td className="mx-2">
                        <button
                          className="btn btn-secondary"
                          onClick={() =>
                            navigation("/organisation/company/editcompany")
                          }
                        >
                          <FaEdit />
                        </button>
                      </td>
                      <td className="mx-2">
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(item.id)}
                        >
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div>
              <Button onClick={handleOpen} variant="contained">
                Add Company
              </Button>
            </div>
          </section>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <TextField
              margin="dense"
              label="Company"
              type="text"
              fullWidth
              name="companyName"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />

            <TextField
              margin="dense"
              label="companyType"
              type="text"
              fullWidth
              name="companyType"
              id="companyType"
              value={companyType}
              onChange={(e) => setCompanyType(e.target.value)}
              required
            />

            <TextField
              margin="dense"
              label="legalOrTrandingName"
              type="text"
              fullWidth
              name="legalOrTrandingName"
              id="legalOrTrandingName"
              value={trendingName}
              onChange={(e) => setTrendingName(e.target.value)}
              required
            />
            <TextField
              margin="dense"
              label="cin"
              type="text"
              fullWidth
              name="cin"
              id="cin"
              value={cin}
              onChange={(e) => setCin(e.target.value)}
              required
            />
            <TextField
              margin="dense"
              label="contact Number"
              type="text"
              fullWidth
              name="contactNumber"
              id="contactNumber"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            <TextField
              margin="dense"
              label="email"
              type="email"
              fullWidth
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              margin="dense"
              label="website"
              type="text"
              fullWidth
              name="website"
              id="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              required
            />
            <TextField
              margin="dense"
              label="gst"
              type="text"
              fullWidth
              name="gst"
              id="gst"
              value={gst}
              onChange={(e) => setGst(e.target.value)}
              required
            />
            <TextField
              margin="dense"
              label="uan"
              type="text"
              fullWidth
              name="uan"
              id="uan"
              value={uan}
              onChange={(e) => setUan(e.target.value)}
              required
            />

            <TextField
              margin="dense"
              label="address"
              type="text"
              fullWidth
              name="address"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />

            <Button variant="contained" onClick={handleClick}>
              Submit
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default CompanyFile;
