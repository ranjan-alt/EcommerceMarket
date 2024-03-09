import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { TbTrash } from "react-icons/tb";

const CartItem = () => {
  const { all_products, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  return (
    <>
      <div>Cart items</div>
      <section>
        <table>
          <thead>
            <tr>
              <th>Products</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {all_products.map((e) => {
              if (cartItems[e.id] > 0) {
                return (
                  <tr key={e.id}>
                    <td>{e.name}</td>
                    <td>{e.price}</td>
                    <td>{cartItems[e.id]}</td>
                    <td>{e.price * cartItems[e.id]}</td>
                    <td>
                      <TbTrash onClick={() => removeFromCart(e.id)} />
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
        <div>
          <h4>Summary</h4>
          <div>
            <h4>Subtotal:</h4>
            <h4>${getTotalCartAmount()}</h4>
          </div>
          <div>
            <h4>Shipping fee</h4>
            <h4>free</h4>
          </div>
          <div>
            <h4>Total</h4>
            <h4>${getTotalCartAmount()}</h4>
          </div>
          <button>Checkout</button>
          <div>
            <h4>Your coupon code enter here</h4>
          </div>
          <div>
            <input type="text" placeholder="coupon code" />
            <button>Submit</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartItem;
