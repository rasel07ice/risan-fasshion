import axios from "axios";

const BASE_URL = "http://localhost:5001/api/";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export default axiosInstance
// export const getProducts = async () => {
//   return (await axiosInstance.get("products")).data;
// };

// export const getTodo = async (id) => {
//   const adata = (await axiosInstance.get(`todos/${id}`)).data;
//   console.log(adata);
//   return adata;
// };
