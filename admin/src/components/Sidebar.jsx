import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <Link to={"/addproduct"}>
        <button>
          <img src="" alt="" />
          <span>Add product</span>
        </button>
      </Link>
      <Link to={"/listproduct"}>
        <button>
          <img src="" alt="" />
          <span>Product List</span>
        </button>
      </Link>
    </>
  );
};

export default Sidebar;
