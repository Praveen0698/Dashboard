import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const PreviewCompany = () => {
  const location = useLocation();
  const [newList, setNewList] = useState({});

  useEffect(() => {
    for (let i = 0; i < location.state.list.length; i++) {
      if (location.state.list[i].id === location.state.id) {
        setNewList(location.state.list[i]);
      }
    }
  }, []);
  return (
    <div className="dashboard-container">
      <SideBar />
      <div className="head-foot-part">
        <Header />
        <section className="shadow" style={{ backgroundColor: "whitesmoke" }}>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-3">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="avatar"
                      className="rounded-circle img-fluid"
                      style={{ width: 150 }}
                    />
                    <h5 className="my-3">
                      {`${newList.companyName} ${newList.companyType}`}
                    </h5>
                    <div className="d-flex justify-content-center mb-2">
                      <button type="button" className="btn btn-outline-primary">
                        Call
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-warning ms-1"
                      >
                        Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-9">
                <div className="card mb-4">
                  <div className="card-body">
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Company Name</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{newList.companyName}</p>
                      </div>
                    </div>

                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Company Type</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{newList.companyType}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Email</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{newList.email}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Website</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{newList.website}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PreviewCompany;
