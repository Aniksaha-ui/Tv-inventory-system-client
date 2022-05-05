import React from "react";
import useProduct from "../../Hooks/useProduct";
import ShowInventoryProducts from "../ShowInventoryProducts/ShowInventoryProducts";
const ManageInventory = () => {
  const [products, setProducts] = useProduct();
  // const { _id, name, price, quantity, img } = products;
  // console.log(products);
  return (
    <>
      <h3 className="mt-3">Products -{products.length}</h3>
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
              <ShowInventoryProducts product={product} key={product._id} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageInventory;
