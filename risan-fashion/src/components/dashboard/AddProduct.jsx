import axiosInstance from "@/services/api";
import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { category: "" },
  });
  const [categories, setCategories] = useState([]);
  const [categoryObject, setCategoryObject] = useState({});
  const navigate = useNavigate();
  const imageHostKey = "56ee418a5ebf12871c85f1cf09692847";

  const getAllCategories = async () => {
    const response = await axiosInstance.get("categories");
    return response.data;
  };

  //   const addProducts = async(product) => {
  //     const response = await axiosInstance.post("/products",product);
  //     return response.data;
  //   }

  useEffect(() => {
    const fetchAllCategories = async () => {
      const allCategories = await getAllCategories();
      if (allCategories.categories) {
        setCategories(allCategories.categories);
        // Create category object after fetching categories
        // as we need to insert category._id while adding product into DB.
        const tempCategoryObject = {};
        allCategories.categories.forEach((category) => {
          tempCategoryObject[category.name] = category._id;
        });
        setCategoryObject(tempCategoryObject);
      }
    };
    fetchAllCategories();
  }, []);

  console.log(categories);

  const handleAddProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          // console.log(data);
          const product = {
            title: data.name,
            description: data.description,
            category: data.category,
            trending: false,
            coverImage: imgData.data.url,

            oldPrice: data.resalePrice,
            newPrice: data.resalePrice,
            postingTime: new Date(),

            status: "available",
          };

          axiosInstance.post("/products", product).then((res) => {
            console.log(res.data.product);
            toast.success("Product Status", {
              description: "Product added Successful!",
              action: {
                label: "Close",
                onClick: () => console.log("Undo"),
              },
            });
          });
        }
      });
  };
  return (
    <div>
      <div className="w-10/12 p-7">
        <h2 className="text-2xl text-[#FF652E] md:text-center text-left font-bold">
          Add a Product
        </h2>
        <form
          onSubmit={handleSubmit(handleAddProduct)}
          className="border shadow-lg py-2 px-6 mt-3 flex flex-col md:flex-row"
        >
          <div>
            <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-3">
              <div className="flex input-bordered rounded-none">
                <label className="label">
                  {" "}
                  <span className="label-text ">Product Name:</span>
                </label>

                <input
                  type="text"
                  {...register("name", {
                    required: "Product Name is Required",
                  })}
                  className="input input-bordered w-full max-w-xs rounded-none bg-white"
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name.message}</p>
              )}
            </div>

            <div className="flex justify-center w-full max-w-xs items-center border p-2 border-indigo-400 mb-3">
              <div className="form-control w-11/12 max-w-xs mr-4 mt-1">
                <label className="label">
                  {" "}
                  <span className="label-text ">Old Price</span>
                </label>

                <input
                  type="text"
                  {...register("oldPrice", {
                    required: "Old Price Required",
                  })}
                  className="input input-bordered w-full max-w-xs rounded-none bg-white"
                />
                {errors.resalePrice && (
                  <p className="text-red-600 text-xs">
                    {errors.resalePrice.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-center w-full max-w-xs items-center border p-2 border-indigo-400 mb-3">
              <div className="form-control w-11/12 max-w-xs mr-4 mt-1">
                <label className="label">
                  {" "}
                  <span className="label-text ">New Price</span>
                </label>

                <input
                  type="text"
                  {...register("newPrice", {
                    required: "New Price Required",
                  })}
                  className="input input-bordered w-full max-w-xs rounded-none bg-white"
                />
                {errors.resalePrice && (
                  <p className="text-red-600 text-xs">
                    {errors.newPrice.message}
                  </p>
                )}
              </div>
            </div>

            <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-3">
              <div className="flex justify-center items-center  max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text">Upload Photo:</span>
                </label>
                <input
                  type="file"
                  {...register("image", {
                    required: "Photo is Required",
                  })}
                  className="input input-bordered w-full max-w-xs p-1 rounded-none bg-white"
                />
                {errors.image && (
                  <p className="text-red-500 text-xs">{errors.image.message}</p>
                )}
              </div>
            </div>
          </div>

          <div className="ml-0 md:ml-12">
            <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-3">
              <div className="flex justify-center items-center  max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text">Product Category:</span>
                </label>
                <select
                  {...register("category", {
                    required: "Category is Required",
                  })}
                  className="input input-bordered w-full max-w-xs rounded-none text-sm bg-white"
                >
                  <option disabled value="">
                    select category
                  </option>
                  {Object.keys(categoryObject)?.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              {errors.category && (
                <p className="text-red-500 text-xs">
                  {errors.category.message}
                </p>
              )}
            </div>

            <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-3">
              <div className="flex input-bordered rounded-none">
                <label className="label">
                  {" "}
                  <span className="label-text ">Description:</span>
                </label>

                <input
                  type="text"
                  {...register("description", {
                    required: false,
                  })}
                  className="input input-bordered w-full max-w-xs rounded-none bg-white"
                />
              </div>
            </div>
            <input
              className="btn btn-info md:w-80 w-64 rounded-none mt-1"
              value="Add Product"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
