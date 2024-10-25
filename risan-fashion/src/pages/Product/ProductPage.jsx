import ShopByCategory from "@/components/category/ShopByCategory";
import Navbar from "@/components/header/Navbar";
import UpperNavber from "@/components/header/UpperNavber";
import Furniture from "@/components/products/Furniture";
import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
    const categoryName = useParams()   
  return (
    <div>
      <ShopByCategory />
      <Furniture categoryName={categoryName} />
    </div>
  );
};

export default ProductPage;
