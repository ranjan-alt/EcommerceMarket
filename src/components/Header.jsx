import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { FaOpencart } from "react-icons/fa";
const Header = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", margin:"10px" }}>
      {/* {logo} */}
      <div>
        <Link>Logo</Link>
      </div>
      {/* {navbar} */}
      <Navbar />
      {/* <div>buttons</div> //add hamburger here and do the styling */}
      <div style={{display:"flex"}}>
        <NavLink to={"cart-page"}>
          <FaOpencart /> <span>0</span>
        </NavLink>
        <NavLink to={"logout"}>
          <p>Logout</p>
        </NavLink>
        <NavLink to={"login"}>Login</NavLink>
      </div>
    </div>
  );
};

export default Header;
