import { NavLink } from "react-router-dom";
// import {MdHomeFilled} from "react-icons/md"

const Navbar = () => {
  return (
    <>
      <h2>Hello navbar</h2>
      {/* <NavLink> <div> <MdHomeFilled/> Home </div></NavLink> */}
      <NavLink to={"/"}>
        {" "}
        <div> Home </div>
      </NavLink>
      <NavLink to={"/mens"}>
        {" "}
        <div> Men </div>
      </NavLink>
      <NavLink to={"/womens"}>
        {" "}
        <div> Women </div>
      </NavLink>
      <NavLink to={"/kids"}>
        {" "}
        <div> Kids </div>
      </NavLink>
    </>
  );
};

export default Navbar;
