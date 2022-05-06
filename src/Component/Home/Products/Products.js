import React from "react";
import { useNavigate } from "react-router-dom";
import useProduct from "../../../Hooks/useProduct";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useProduct();

  const navigate = useNavigate();
  const handleManageInventory = () => {
    navigate("/manage");
  };

  return (
    <div>
      <div className="container mt-5">
        <h3>Product Informations</h3>
        <div className="row row-cols-lg-3 row-cols-1 g-2 g-lg-3 mt-3">
          <>
            {products.slice(0, 6).map((product) => (
              <Product product={product} key={product._id} />
            ))}
          </>
        </div>
        <button
          onClick={handleManageInventory}
          className="btn btn-danger mt-3 mb-4"
        >
          Manage Inventories
        </button>
      </div>
    </div>
  );
};

export default Products;
