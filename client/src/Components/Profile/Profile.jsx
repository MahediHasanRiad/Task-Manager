import React from "react";

const Profile = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="container-fluid">
                <img className="icon-nav-img-lg" src={"/"} alt="" />
                <hr />
                <div className="row">
                  <div className="col-4 p-2">
                    <label>Profile Picture</label>
                    <input
                      ref={"/"}
                      placeholder="User Email"
                      className="form-control animated fadeInUp"
                      type="file"
                    />
                  </div>
                  <div className="col-4 p-2">
                    <label>Email Address</label>
                    <input
                      key={Date.now()}
                      defaultValue={"/"}
                      readOnly={true}
                      ref={"/"}
                      placeholder="User Email"
                      className="form-control animated fadeInUp"
                      type="email"
                    />
                  </div>
                  <div className="col-4 p-2">
                    <label>First Name</label>
                    <input
                      key={Date.now()}
                      defaultValue={"/"}
                      ref={"/"}
                      placeholder="First Name"
                      className="form-control animated fadeInUp"
                      type="text"
                    />
                  </div>
                  <div className="col-4 p-2">
                    <label>Last Name</label>
                    <input
                      key={Date.now()}
                      defaultValue={"/"}
                      ref={"/"}
                      placeholder="Last Name"
                      className="form-control animated fadeInUp"
                      type="text"
                    />
                  </div>
                  <div className="col-4 p-2">
                    <label>Mobile</label>
                    <input
                      key={Date.now()}
                      defaultValue={"/"}
                      ref={"/"}
                      placeholder="Mobile"
                      className="form-control animated fadeInUp"
                      type="mobile"
                    />
                  </div>
                  <div className="col-4 p-2">
                    <label>Password</label>
                    <input
                      key={Date.now()}
                      defaultValue={"/"}
                      ref={"/"}
                      placeholder="User Password"
                      className="form-control animated fadeInUp"
                      type="password"
                    />
                  </div>
                  <div className="col-4 p-2">
                    <button className="btn w-100 float-end btn-primary animated fadeInUp">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
