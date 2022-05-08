import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const email = user.email;
      const url = `https://vast-reaches-25407.herokuapp.com/myitems?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setProducts(data);
      } catch (err) {
        // console.log(err.response.status);
        console.log(err.message);
        if (err.response.status === 401 || err.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getProducts();
  }, [user]);

  const handleDelete = (id) => {
    const url = `https://vast-reaches-25407.herokuapp.com/product/${id}`;
    const confirm = window.confirm("Are You Sure?");
    if (confirm) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data deleted", data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
          if (data.acknowledged) {
            toast("Data Deleted Successfully");
          }
        });
    } else {
    }
  };

  return (
    <div className="container">
      <h3 className="mt-3 text-primary">
        You Added -{products.length} product
      </h3>
      <div className="d-flex align-items-center justify-content-center mt-3">
        <table className="table table-dark" style={{ width: "1080px" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>img</th>
              <th>Action</th>
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

                <td>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ToastContainer />
      </div>
    </div>
  );
};

export default MyItem;
