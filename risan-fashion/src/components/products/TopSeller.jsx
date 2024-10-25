import { useEffect, useState } from "react";
import FurnitureCard from "./FurnitureCard";
// import { useFetchAllProductsQuery } from "@/redux/features/products/productsApi";
// import { getProducts } from "@/services/api";
// import axios from "axios";
import axiosInstance from "@/services/api";

const TopSeller = () => {
  const [furnitures, setFurnitures] = useState([]);

  const getAllProducts = async () => {
    const response = await axiosInstance.get("products");
    return response.data;
  };

  useEffect(() => {
    const getAllFurnitures = async () => {
      const allFurnitures = await getAllProducts();
      if (allFurnitures.products) {
        const topSellFurniture = allFurnitures.products.filter(
          (item) => item.trending === true
        );
        setFurnitures(topSellFurniture);
      }
    };
    getAllFurnitures();
  }, []);
  console.log(furnitures);

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center ">
      {furnitures?.map((item) => (
        <FurnitureCard key={item._id} furniture={item} />
      ))}
    </div>
  );
};

export default TopSeller;
