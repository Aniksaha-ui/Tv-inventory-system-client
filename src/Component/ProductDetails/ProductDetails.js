import React from "react";
import "./ProductDetails.css";
const ProductDetails = (props) => {
  const { _id, name, email, description, img, price, supplierName } =
    props.product;

  let { quantity } = props.product;

  const handleQuantity = (id) => {
    console.log(id);
  };
  return (
    <div className="container d-flex align-items-center justify-content-center mt-5">
      <div className="card mb-3" style={{ maxWidth: "740px" }}>
        <div className="row g-0">
          <div className="col-md-5">
            <img src={img} className="img-fluid h-100" alt="..." />
          </div>
          <div className="col-md-7">
            <div className="card-header">{name}</div>
            <div className="card-body">
              <div>
                <p className="card-text">{description}</p>
              </div>
              <hr />
              <div className="d-flex align-item-center justify-content-between">
                <p className="card-text ">
                  <b>Price :</b> {price}
                </p>
                <p className="card-text">
                  <b>In Stock :</b> {quantity}
                </p>
              </div>

              <div className="d-flex align-item-center justify-content-center">
                <p className="card-text "></p>
                <p className="card-text">
                  <button
                    onClick={() => handleQuantity(_id)}
                    className="btn btn-primary rounded"
                  >
                    Delivered
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
