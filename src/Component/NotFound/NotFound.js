import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container w-75 me-5 mt-5">
      <div className="card" style={{ width: "60rem" }}>
        <div className="d-flex align-items-center justify-content-center p-3">
          <img
            width="550"
            src="https://cdn4.vectorstock.com/i/1000x1000/60/73/page-not-found-error-404-template-vector-14996073.jpg   "
            className="img-fluid"
            alt="..."
          />
        </div>

        <div className="card-body">
          <Link to="/" className="btn btn-primary">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
