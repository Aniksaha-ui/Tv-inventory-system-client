import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";

const AddProduct = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const priceRef = useRef("");
  const quantityRef = useRef("");
  const supplierNameRef = useRef("");
  const imageRef = useRef("");

  const handleAddProduct = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const price = priceRef.current.value;
    const quantity = quantityRef.current.value;
    const supplierName = supplierNameRef.current.value;
    const img = imageRef.current.value;
    const product = {
      name,
      description,
      price,
      quantity,
      supplierName,
      img,
      email,
    };
    const url = `https://vast-reaches-25407.herokuapp.com/product`;
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast("Product Insert Successfully");
        }
      });
  };

  return (
    <>
      <h3 className="text-center text-primary mt-3">Add New Product</h3>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <form onSubmit={handleAddProduct}>
                  <div className="form-floating mb-3">
                    <input
                      ref={nameRef}
                      type="text"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Enter Product Name"
                    />
                    <label for="floatingPassword">Enter Product Name</label>
                  </div>

                  <div className="form-floating mb-3">
                    <textarea
                      ref={descriptionRef}
                      type="text"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Enter Product Description"
                    />
                    <label for="floatingPassword">
                      Enter Product Description
                    </label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      ref={priceRef}
                      type="text"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Enter Product Price"
                    />
                    <label for="floatingPassword">Enter Product Price</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      ref={quantityRef}
                      type="text"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Enter Product Quantity"
                    />
                    <label for="floatingPassword">Enter Product Quantity</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      ref={supplierNameRef}
                      type="text"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Enter Supplier Name"
                    />
                    <label for="floatingPassword">Enter Supplier Name</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      ref={imageRef}
                      type="text"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Enter Image Url"
                    />
                    <label for="floatingPassword">Enter Image Url</label>
                  </div>

                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Add New Product
                    </button>
                  </div>
                  <br />
                </form>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
