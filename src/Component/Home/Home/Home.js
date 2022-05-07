import React from "react";
import AlertedProduct from "../AlertedProduct/AlertedProduct";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";

const Home = () => {
  return (
    <>
      <h2 className="text-primary mb-4">TV Inventory Management System</h2>
      <Banner />
      <Products />
      <AlertedProduct />
    </>
  );
};

export default Home;
