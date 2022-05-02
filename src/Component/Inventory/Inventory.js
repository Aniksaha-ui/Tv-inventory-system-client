import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import ProductDetails from "../ProductDetails/ProductDetails";

const Inventory = () => {
  const param = useParams();
  const id = param.id;
  const [user] = useAuthState(auth);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const email = user.email;
      const url = `https://guarded-spire-69476.herokuapp.com/product/${id}?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        setProduct(data);
      } catch {}
    };

    getProduct();
  }, [user]);

  return (
    <>
      <ProductDetails />
    </>
  );
};

export default Inventory;
