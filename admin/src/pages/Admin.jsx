import Sidebar from "../components/Sidebar";
import { Route, Routes } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/addproduct" />
      </Routes>
    </>
  );
};

export default Admin;
