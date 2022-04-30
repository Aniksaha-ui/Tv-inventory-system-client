import React from "react";

const Product = (props) => {
  const { _id, name, img, description, price, quantity, supplierName } =
    props.product;
  return (
    <div class="col">
      <div class="p-3 border bg-info">
        <div className="card h-100 w-100" style={{ width: "18rem" }}>
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{description}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <b>supplierName : </b>
              {supplierName}
            </li>
            <li class="list-group-item">
              <b>Stock : </b>
              {quantity > 0 ? quantity : "out of stock"}
            </li>
            <li class="list-group-item">
              <b>Price : </b>
              {price}
            </li>
          </ul>
          <div class="card-body">
            <button class="w-100 btn btn-danger">Update Amount</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
