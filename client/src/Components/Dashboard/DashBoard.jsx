import React, { Fragment } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { totalCount } from "../../API/api";

const Dashboard = () => {
  useEffect(() => {
    totalCount();
  }, []);

  const count = useSelector((state) => state.Count.value);

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          {
          count.map((item, i) => {
            return (
              <div key={i} className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="animated fadeInUp">{item._id}</h5>
                    <h6 className="text-secondary animated fadeInUp">{item.Total}</h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
