import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
    {/* {logo} */}
      <div>
        <Link>Logo</Link>
      </div>
      {/* {navbar} */}
      <Navbar/>
    </>
  );
};

export default Header;
