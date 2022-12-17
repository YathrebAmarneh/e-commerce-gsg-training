import style from "./style.module.css";
import OrderSummary from "../order-summary";
import ShoppingCartItems from "../shopping-cart-items";

const ShoppingCart = () => {
  return (
    <div className={style.container}>
      <ShoppingCartItems />
      <OrderSummary />
    </div>
  );
};

export default ShoppingCart;
