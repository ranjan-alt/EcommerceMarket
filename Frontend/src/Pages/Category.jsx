// import all_products from "../assets/allproducts"
import { useContext } from "react";
import Item from "../components/Item";
import { ShopContext } from "../Context/ShopContext";

const Category = ({ category, banner }) => {
  const { all_products } = useContext(ShopContext);
  console.log(all_products, "category component");
  return (
    <>
      <div>
        <img src={banner} alt="" />
      </div>
      <div>
        <h5>Showing 1-12 out of 36 products</h5>
      </div>
      <div>
        {all_products.map((item) => {
          if (category === item.category) {
            return (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                category={item.category}
                price={item.price}
                rating={item.rating}
              />
            );
          }
        })}
      </div>
    </>
  );
};

export default Category;
