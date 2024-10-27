import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems.reduce((accumulator, item) => {
    return (accumulator += item.newPrice);
  }, 0);
  console.log(totalPrice);
  const handleDelete = () => {
    console.log();
  };

  return (
    <div className="container mt-8 overflow-x-auto">
      <h2 className="text-lg">Products</h2>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {cartItems.map((item) => (
            <tr key={item?._id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={item?.coverImage}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item?.title}</div>
                  </div>
                </div>
              </td>
              <td>{item?.category}</td>
              <td>{item?.newPrice}</td>
              <th className="space-x-1">
                <Link
                  className="btn btn-ghost btn-xs bg-primary"
                  onClick={() => handleDelete(item?._id)}
                >
                  Delete
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th>Sub Total</th>
            <th>{totalPrice}</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CartPage;
