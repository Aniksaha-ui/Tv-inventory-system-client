import React from "react";
import { toast } from "react-toastify";
import useProduct from "../../Hooks/useProduct";
import Products from "../Home/Products/Products";

const ShowInventoryProducts = (props) => {
  const { _id, name, quantity, price, img } = props.product;
  const { setProducts } = props.setProducts;
  console.log(props);
  const [products] = useProduct();
  // console.log(props);

  const handleDelete = (id) => {
    const url = `http://localhost:4000/product/${id}`;
    const confirm = window.confirm("Are You Sure?");
    if (confirm) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data deleted", data);
          const remaining = products.filter((product) => product._id !== id);
          // console.log(remaining);
          setProducts(remaining);
        });
    } else {
    }
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
