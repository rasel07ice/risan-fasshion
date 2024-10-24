import { Button } from "../ui/button";

const ShopByCategory = () => {
  return (
    <div className="container">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-semibold text-left">Shop By Category</h2>
        <span className="font-light  hover:border-b-2 border-primary underline-offset-4 ">
          View All
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 items-center">
        <div className="relative group">
          <img
            className="opacity-75 w-full h-32 object-cover group-hover:opacity-100"
            src="./living-4.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex items-center justify-center ">
            <span className="group-hover:hidden text-white border-b-2 border-primary underline-offset-4">
              Living
            </span>
            <Button size="sm" className="hidden group-hover:block">
              View Products
            </Button>
          </div>
        </div>
        <div className="relative group">
          <img
            className="opacity-75 w-full h-32 object-cover group-hover:opacity-100"
            src="./dinning-2.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex items-center justify-center ">
            <span className="group-hover:hidden text-white border-b-2 border-primary underline-offset-4">
              Dinning
            </span>
            <Button size="sm" className="hidden group-hover:block">
              View Products
            </Button>
          </div>
        </div>
        <div className="relative group">
          <img
            className="opacity-75 w-full h-32 object-cover group-hover:opacity-100"
            src="./drawing-1.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex items-center justify-center ">
            <span className="group-hover:hidden text-white border-b-2 border-primary underline-offset-4">
              Drawing
            </span>
            <Button size="sm" className="hidden group-hover:block">
              View Products
            </Button>
          </div>
        </div>
        <div className="relative group">
          <img
            className="opacity-75 w-full h-32 object-cover group-hover:opacity-100"
            src="./chair-8.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex items-center justify-center ">
            <span className="group-hover:hidden text-white border-b-2 border-primary underline-offset-4">
              Chair
            </span>
            <Button size="sm" className="hidden group-hover:block">
              View Products
            </Button>
          </div>
        </div>
        <div className="relative group">
          <img
            className="opacity-75 w-full h-32 object-cover group-hover:opacity-100"
            src="./sofa-double_sit_sofa.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex items-center justify-center ">
            <span className="group-hover:hidden text-white border-b-2 border-primary underline-offset-4">
              Sofa
            </span>
            <Button size="sm" className="hidden group-hover:block">
              View Products
            </Button>
          </div>
        </div>
        <div className="relative group">
          <img
            className="opacity-75 w-full h-32 object-cover group-hover:opacity-100"
            src="./table-1.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex items-center justify-center ">
            <span className="group-hover:hidden text-white border-b-2 border-primary underline-offset-4">
              Table
            </span>
            <Button size="sm" className="hidden group-hover:block">
              View Products
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
