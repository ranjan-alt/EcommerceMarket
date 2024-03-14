import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { FaOpencart } from "react-icons/fa";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const Header = () => {
  const { getTotalCartItem } = useContext(ShopContext);
  return (
    <div style={{ display: "flex", flexDirection: "row", margin: "10px" }}>
      {/* {logo} */}
      <div>
        <Link>Logo</Link>
      </div>
      {/* {navbar} */}
      <Navbar />
      {/* <div>buttons</div> //add hamburger here and do the styling */}
      <div style={{ display: "flex" }}>
        <NavLink to={"cart-page"}>
          <FaOpencart /> <span>{getTotalCartItem()}</span>
        </NavLink>
        {localStorage.getItem("auth-token") ? (
          <NavLink
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
            to={"logout"}
          >
            Logout
          </NavLink>
        ) : (
          <NavLink to={"login"}>Login</NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
