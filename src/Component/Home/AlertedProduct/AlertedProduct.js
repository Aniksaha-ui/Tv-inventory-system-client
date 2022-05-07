import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

const AlertedProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://vast-reaches-25407.herokuapp.com/alertquantity")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <>
      <h3 className="mt-5 text-primary">Alerted Products</h3>
      <b className="text-info text-center">
        <small>
          (alerted product means which product quantity is less than 10)
        </small>
      </b>
      <div className="container d-flex align-items-center justify-content-center mt-4">
        <table id="mytable" className="table table-dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>img</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td>
                  <img
                    width="90px"
                    className="img-fluid"
                    src={product.img}
                    alt=""
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ToastContainer />
      </div>
    </>
  );
};

export default AlertedProduct;
