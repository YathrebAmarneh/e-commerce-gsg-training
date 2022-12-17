import Btn from "../shared-components/button";
import style from "./style.module.css";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useProducts } from "../../context/ProductsContext";
const OrderSummary = () => {
  const { cartItems, cartQuantity } = useShoppingCart();
  const { products } = useProducts();
  const totalCost = cartItems.reduce((total, cartItem) => {
    const item = products.find((product) => cartItem.id === product.id);

    return total + item?.price * cartItem.quantity;
  }, 0);
  return (
    <div className={style.orderSummary}>
      <h1>Order summary</h1>
      <hr />
      <div className={style.quantityPrice}>
        <span>{`items:${cartQuantity}`}</span>
        <span>{`${totalCost}$`}</span>
      </div>
      <div className={style.shipping}>
        <label>SHIPPING</label>
        <select>
          <option>International shipping</option>
          <option>Same-day delivery</option>
          <option>Hybrid shipping services</option>
        </select>
      </div>
      <div className={style.promoCode}>
        <label>PROMO CODE</label>
        <input type="number" placeholder="Enter your code" />
      </div>
      <input type="submit" value="APPLY" />
      <div className={style.totalCost}>
        <label>TOTAL COST</label>
        <span>{`${totalCost}$`}</span>
      </div>
      <Btn className="checkout" buttonContent="CHECKOUT" />
    </div>
  );
};

export default OrderSummary;
