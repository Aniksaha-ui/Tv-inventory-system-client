import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import "./ProductDetails.css";
const ProductDetails = (props) => {
  const { _id, name, email, quantity, description, img, price, supplierName } =
    props.product;

  const [user] = useAuthState(auth);
  const userEmail = user.email;
  const stock = quantity;
  const [quan, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(stock);
    console.log(quan);
  }, [quantity]);

  const handleQuantity = (id) => {
    const url = `https://vast-reaches-25407.herokuapp.com/product/quantityUpdate/${id}`;
    const currentQuantity = quan - 1;
    const updatedQuantity = { currentQuantity };
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast("Product Quantity Updated");
          setQuantity(currentQuantity);
        }
      });
  };
  return (
    <div className="container d-flex align-items-center justify-content-center mt-5">
      <div className="card mb-3" style={{ maxWidth: "740px" }}>
        <div className="row g-0">
          <div className="col-md-6">
            <img src={img} className="img-fluid h-100" alt="..." />
          </div>
          <div className="col-md-6">
            <div className="card-header">{name}</div>
            <div className="card-body">
              <div>
                <p className="card-text">Product Id : {_id}</p>

                <p className="card-text">{description}</p>
              </div>
              <hr />
              <div className="d-flex align-item-center justify-content-between">
                <p className="card-text ">
                  <b>Price :</b> {price}
                </p>
                <p className="card-text">
                  <b>In Stock :</b> {quan}
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
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
