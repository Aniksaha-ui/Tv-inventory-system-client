import React from "react";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";

const Home = () => {
  return (
    <>
      <h2 className="text-primary mb-4">TV Inventory Management System</h2>
      <Banner />
      <Products />
    </>
  );
};

export default Home;
