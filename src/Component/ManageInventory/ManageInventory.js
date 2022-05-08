import React from "react";
import { toast, ToastContainer } from "react-toastify";
import useProduct from "../../Hooks/useProduct";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ManageInventory = () => {
  const [products, setProducts] = useProduct();
  const navigate = useNavigate();
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

  const handleAddProduct = () => {
    navigate("/addproduct");
  };

  return (
    <div className="container">
      <div
        className="container d-flex align-items-center justify-content-between mt-3"
        style={{ width: "1080px" }}
      >
        <h3 className="mt-1">Number of total Products - {products.length}</h3>
        <div onClick={handleAddProduct} className="btn btn-danger ms-5">
          Add Product
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center mt-3">
        <table
          id="mytable"
          className="table table-dark"
          style={{ width: "1080px" }}
        >
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

export default ManageInventory;
