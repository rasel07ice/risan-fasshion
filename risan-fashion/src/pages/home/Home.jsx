import Register from "@/components/authentication/Register";
import Banner from "@/components/banner/Banner";
import ShopByCategory from "@/components/category/ShopByCategory";
import AddProduct from "@/components/dashboard/AddProduct";
import Features from "@/components/feature/Features";

import TopSeller from "@/components/topSeller/TopSeller";

const Home = () => {
  return (
    <>
      <Banner />
      <Features />
      <ShopByCategory />
      <TopSeller />
      <Register />
      <AddProduct />
    </>
  );
};

export default Home;
