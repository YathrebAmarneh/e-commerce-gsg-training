import { useShoppingCart } from "../../context/ShoppingCartContext";
import ShoppingCartItem from "../shopping-cart-item";
import style from "./style.module.css";
import { useProducts } from "../../context/ProductsContext";

const ShoppingCartItemTable = () => {
  const { products } = useProducts();
  console.log("products from table", products);
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
        <h1>Your shopping cart is empty</h1>
      )}
    </div>
  );
};

export default ShoppingCartItemTable;
