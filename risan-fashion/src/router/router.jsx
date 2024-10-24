import App from "@/App";
import Login from "@/components/authentication/Login";
import Register from "@/components/authentication/Register";
import AddProduct from "@/components/dashboard/AddProduct";
import CartPage from "@/components/topSeller/cartPage";
import SingleFurniture from "@/components/topSeller/SingleFurniture";
import Home from "@/pages/home/Home";
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
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "products/:id",
        element: <SingleFurniture />,
      },
    ],
  },
]);

export default router;
