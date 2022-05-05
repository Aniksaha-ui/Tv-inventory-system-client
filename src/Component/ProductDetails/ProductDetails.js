import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
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
  const restockAmountRef = useRef("");

  useEffect(() => {
    setQuantity(stock);
    console.log(quan);
  }, [quantity]);

  //control Delivered Quantity
  const handleDeliveryQuantity = (id) => {
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

  //control Restock Quantity
  const handleRestock = (e) => {
    e.preventDefault();
    const id = _id;
    const restockAmount = parseInt(restockAmountRef.current.value);
    const currentQuantity = parseInt(quan + restockAmount);
    const updatedQuantity = { currentQuantity };
    const url = `https://vast-reaches-25407.herokuapp.com/product/quantityUpdate/${id}`;

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
    <>
      <h3 className="text-center text-primary mt-5">Product Details</h3>

      <div className="container d-flex align-items-center justify-content-center mt-2">
        <div
          className="card border-0 shadow rounded-3 my-5"
          style={{ maxWidth: "740px" }}
        >
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
                      onClick={() => handleDeliveryQuantity(_id)}
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
      {/* product quantity manage */}
      <h3 className="text-center text-primary mt-4">Restock Quantity</h3>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <form onSubmit={handleRestock}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      ref={restockAmountRef}
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Enter Quantity Amount"
                    />
                    <label for="floatingPassword">Enter Quantity Amount</label>
                  </div>

                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Update Quantity
                    </button>
                  </div>
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
