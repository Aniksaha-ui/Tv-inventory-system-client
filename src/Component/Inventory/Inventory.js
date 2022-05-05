import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { signOut } from "firebase/auth";
import ProductDetails from "../ProductDetails/ProductDetails";

const Inventory = () => {
  const param = useParams();
  const id = param.id;
  const [user] = useAuthState(auth);
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      const email = user.email;
      const url = `https://vast-reaches-25407.herokuapp.com/product/${id}?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        setProduct(data);
      } catch (error) {
        // console.log(error);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };

    getProduct();
  }, [user]);

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default Inventory;
