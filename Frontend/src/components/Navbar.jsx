import { NavLink } from "react-router-dom";
// import {MdHomeFilled} from "react-icons/md"

const Navbar = () => {
  return (
    <>
      {/* <h2>Hello navbar</h2> */}
      {/* <NavLink> <div> <MdHomeFilled/> Home </div></NavLink> */}
      <div style={{ display: "flex", margin: "10px", padding: "20px" }}>
        <NavLink to={"/"}>
          {" "}
          <div style={{ padding: "20px" }}> Home </div>
        </NavLink>
        <NavLink to={"/mens"}>
          {" "}
          <div style={{ padding: "20px" }}> Men </div>
        </NavLink>
        <NavLink to={"/womens"}>
          {" "}
          <div style={{ padding: "20px" }}> Women </div>
        </NavLink>
        <NavLink to={"/kids"}>
          {" "}
          <div style={{ padding: "20px" }}> Kids </div>
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
