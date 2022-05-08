import React from "react";
import banner from "../../../images/Banner/banner.png";
const Banner = () => {
  return (
    <div className="container mt-5">
      <div className="row d-flex align-items-center justify-content-center mt-5">
        <div className="col-lg-7 col-md-7 col-12 order-lg-1 order-2">
          <p className="header-text">
            <h3 className="text-primary mb-4">Description of the System</h3>
            This is a Inventory management system.In Home,you can see some
            section like some product description.To see all product you have to
            login.You can see all quantity of the products when you logged
            in.You can see manage inventory,myitems and new product in header.In
            manage inventory you can see all products description.You can delete
            the products by clicking delete.You can add a new product.In myitem
            page,you can see the product you added.In Blog page,there are some
            common questions and their answers
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
