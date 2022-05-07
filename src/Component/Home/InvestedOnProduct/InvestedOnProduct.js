import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useProduct from "../../../Hooks/useProduct";

const InvestedOnProduct = () => {
  const [products, setProducts] = useProduct();
  return (
    <>
      <h3 className="mt-5 text-primary">Investement On Indiviual Product</h3>

      <div className="container d-flex align-items-center justify-content-center mt-4">
        <table id="mytable" className="table table-dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Investment</th>
              <th>img</th>
            </tr>
          </thead>
          <tbody>
            {products.slice(0, 6).map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.quantity * product.price}</td>
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
      </div>
    </>
  );
};

export default InvestedOnProduct;
