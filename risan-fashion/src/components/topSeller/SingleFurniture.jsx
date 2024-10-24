// import { useFetchProductByIdQuery } from "@/redux/features/products/productsApi";
import axiosInstance from "@/services/api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleFurniture = () => {
  const [furniture, setFurniture] = useState({});
  const { id } = useParams();

  const getProduct = async () => {
    const response = await axiosInstance.get(`products/${id}`);
    return response.data;
  };

  useEffect(() => {
    const getFurniture = async () => {
      const furniture = await getProduct();
      if (furniture.product) setFurniture(furniture.product);
    };
    getFurniture();
  }, []);

  console.log(furniture);

  return (
    <div className="py-8">
      <div>
        <div className="flex flex-col md:flex-row gap-3 items-center mt-2">
          <img
            className="size-96 rounded-lg shadow-sm"
            src={furniture?.coverImage}
            alt=""
          />
          <div className="text-left">
            <h3 className="text-xl font-bold">
              <span className="font-semibold">Course Name: </span>
              {furniture?.title}
            </h3>
            <p className="text-lg">
              <span className="font-semibold">Level: </span>
              {furniture?.category}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Student: </span>
              {furniture?.oldPrice}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Duration: </span>
              {furniture?.newPrice}
            </p>
          </div>
        </div>

        <div className="text-left space-y-5">
          <p>
            <span>Description: </span>
            {furniture?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleFurniture;
