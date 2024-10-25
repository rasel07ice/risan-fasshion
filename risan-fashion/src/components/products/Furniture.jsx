import axiosInstance from "@/services/api";
import { useEffect, useState } from "react";
import FurnitureCard from "./FurnitureCard";

const Furniture = ({ categoryName }) => {
  const [furnitures, setFurnitures] = useState([]);
  console.log("category: ", categoryName);

  const getAllProductsByCategory = async () => {
    const response = await axiosInstance.get(`products/category/${categoryName?.name}`);
    return response.data;
  };

  useEffect(() => {
    const getAllFurnitures = async () => {
      const allFurnitures = await getAllProductsByCategory();
      if (allFurnitures.products) setFurnitures(allFurnitures.products);
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

export default Furniture;
