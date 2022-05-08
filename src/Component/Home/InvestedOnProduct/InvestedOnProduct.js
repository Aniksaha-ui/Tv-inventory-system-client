import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useProduct from "../../../Hooks/useProduct";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const InvestedOnProduct = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  const [products, setProducts] = useProduct();
  return (
    <div className="container">
      <h3 className="mt-5 text-primary">Investement On Indiviual Product</h3>

      <div className="d-flex align-items-center justify-content-center mt-4">
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Investment</th>
              <th>img</th>
            </tr>
          </thead>
          {user ? (
            <>
              <tbody>
                {products.map((product) => (
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
            </>
          ) : (
            <>
              <tbody>
                {products.slice(0, 4).map((product) => (
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
            </>
          )}
        </table>
      </div>
    </div>
  );
};

export default InvestedOnProduct;
