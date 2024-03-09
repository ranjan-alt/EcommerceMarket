import AddProduct from "../components/AddProduct";
import ListProduct from "../components/ListProduct";
import Sidebar from "../components/Sidebar";
import { Route, Routes } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        {/* copy from backend */}
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
      </Routes>
    </>
  );
};

export default Admin;
