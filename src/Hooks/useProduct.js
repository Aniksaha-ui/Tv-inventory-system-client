import axios from "axios";
import React, { useEffect, useState } from "react";

const useProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://powerful-temple-45584.herokuapp.com/product")
      .then((res) => setProducts(res.data));
  }, []);
  return [products, setProducts];
};

export default useProduct;
