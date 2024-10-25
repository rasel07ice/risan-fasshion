import { FaUser } from "react-icons/fa";
import { MdSystemSecurityUpdateGood } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 justify-center md:grid-cols-5">
        <div className="col-span-1">
          <div className="flex flex-col items-center">
            <img
              className="size-24"
              src="https://img.freepik.com/premium-vector/gray-user-icon-inside-circular-frame-simple-head-shoulders-silhouette-representsa_213497-5015.jpg?semt=ais_hybrid"
              alt="image"
            />
            <p className="text-sm">Faiya Karim Sarkar Risan</p>
            <p className="text-sm">
              <span>Email:</span>risan@gmail.com
            </p>
          </div>
          <ul className="menu menu-xs bg-base-200 rounded-lg w-full max-w-xs text-lg">
            <li>
              <details open>
                <summary>
                  <MdSystemSecurityUpdateGood />
                  Products
                </summary>
                <ul>
                  <li>
                    <Link to="/dashboard/products">Products</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/AddProduct">Add Product</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary>
                  <FaUser />
                  Users
                </summary>
                <ul>
                  <li>
                    <a>Admin</a>
                  </li>
                  <li>
                    <a>Customer</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>@sareng Tech.com</a>
            </li>
          </ul>
        </div>
        <div className="col-span-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
