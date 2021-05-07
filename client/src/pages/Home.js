import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

const Home = () => {
  const [currentCategory, setCategory] = useState("");

  return (
    <div className="container">
      <CategoryMenu setCategory={setCategory} />

      {/* {currentCategory} is prop that is passed to ProductList */}
      <ProductList currentCategory={currentCategory} />
    </div>
  );
};

export default Home;
