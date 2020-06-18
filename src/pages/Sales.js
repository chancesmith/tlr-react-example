import React from "react";

const Sales = () => {
  return (
    <>
      <h1>Clearance</h1>
      <br />

      {/* <!--clearance alert--> */}

      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <h9>
          Unfortunately our clearance inventory sells so fast we cannot update
          the website fast enough, so you have to come down to the store to
          check it out!
        </h9>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      {/* <!--photos of the store and the clearance rack--> */}

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="img/out.png" alt="card-1" className="card-img-top" />
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="img/Rack.jpg" alt="card-1" className="card-img-top" />
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="img/in.png" alt="card-1" className="card-img-top" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sales;
