import React from "react";
import banner from "../../../images/Banner/banner.png";
const Banner = () => {
  return (
    <div className="container mt-5">
      <div className="row d-flex align-items-center justify-content-center mt-5">
        <div className="col-lg-7 col-md-7 col-12 order-lg-1 order-2">
          <p className="header-text">
            <h3 className="text-primary mb-4">Description of the System</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            voluptatum inventore unde repudiandae odit dolor eaque nulla labore
            deserunt, repellat officiis? Minus assumenda hic nisi? Nobis odio,
            perspiciatis maxime dignissimos illo beatae quidem exercitationem
            incidunt? Tenetur, nobis delectus id magni debitis nihil quam
            consectetur, eius vero dolorum officia, quis voluptatum.
          </p>
        </div>
        <div className="col-lg-5 col-md-5 col-12 order-lg-2 order-1">
          <img className="img-fluid" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
