import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const CartItem = () => {
  const { all_products, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <>
      <div>Cart items</div>
      <section>
        <table>
          <thead>
            <tr>
              <th>Products</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {all_products.map((e) => {
              if (cartItems[e.id] > 0) {
                return (
                  <tr key={e.id}>
                    <td>{e.name}</td>
                    <td>{e.price}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default CartItem;
