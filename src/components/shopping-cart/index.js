import style from "./style.module.css";
import OrderSummary from "../order-summary";
import ShoppingCartItems from "../shopping-cart-items";

const ShoppingCart = () => {
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <ShoppingCartItems />
        <OrderSummary />
      </div>
    </div>
  );
};

export default ShoppingCart;
