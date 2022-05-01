import React from "react";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const { _id, name, img, description, price, quantity, supplierName } =
    props.product;
  const navigate = useNavigate();
  const handleInventory = (id) => {
    // console.log(id);
    navigate(`/inventory/${id}`);
  };
  return (
    <div className="col">
      <div className="p-3 border bg-info">
        <div className="card h-100 w-100" style={{ width: "18rem" }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>supplierName : </b>
              {supplierName}
            </li>
            <li className="list-group-item">
              <b>Stock : </b>
              {quantity > 0 ? quantity : "out of stock"}
            </li>
            <li className="list-group-item">
              <b>Price : </b>
              {price}
            </li>
          </ul>
          <div className="card-body">
            <button
              onClick={() => handleInventory(_id)}
              className="w-100 btn btn-danger"
            >
              Update Amount
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
