import App from "@/App";
import Login from "@/components/authentication/Login";
import Register from "@/components/authentication/Register";
import AddProduct from "@/components/dashboard/AddProduct";
import EditProduct from "@/components/dashboard/EditProduct";
import CartPage from "@/components/products/CartPage";
import ProductsTable from "@/components/products/ProductsTable";
import SingleFurniture from "@/components/products/SingleFurniture";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import Home from "@/pages/home/Home";
import ProductPage from "@/pages/Product/ProductPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "products/:id",
        element: <SingleFurniture />,
      },
      {
        path: "/products/category/:name",
        element: <ProductPage />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
        children: [
          {
            path: "/dashboard/products",
            element: <ProductsTable />,
          },
          {
            path: "/dashboard/addProduct",
            element: <AddProduct />,
          },
          {
            path: "/dashboard/editProduct/:id",
            element: <EditProduct />,
          },
        ],
      },
    ],
  },
]);

export default router;
