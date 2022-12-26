import { useShoppingCart } from "../../context/ShoppingCartContext";
import ShoppingCartItem from "../shopping-cart-item";
import style from "./style.module.css";
import { TbShoppingCartPlus } from "react-icons/tb";

const ShoppingCartItemTable = () => {
  const { cartItems } = useShoppingCart();
  return (
    <div className={style.container}>
      {cartItems.length ? (
        <table className={style.cartTable}>
          <tr>
            <th>Product details</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>

          {cartItems.map((item) => {
            console.log("item", item);
            return <ShoppingCartItem key={item.id} {...item} />;
          })}
        </table>
      ) : (
        <div className={style.emptyCart}>
          <h1>Your shopping cart is empty</h1>
          <TbShoppingCartPlus
            size="4rem"
            color="grey"
            style={{ margin: "auto" }}
          />
        </div>
      )}
    </div>
  );
};

export default ShoppingCartItemTable;
