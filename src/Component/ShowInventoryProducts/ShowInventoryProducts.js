import React from "react";

const ShowInventoryProducts = (props) => {
  const { _id, name, quantity, price, img } = props.product;

  const handleDelete = (id) => {
    console.log(id);
  };

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td>
          <img width="90px" className="img-fluid" src={img} alt="" />
        </td>
        <td>
          <button onClick={() => handleDelete(_id)} className="btn-danger">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default ShowInventoryProducts;
