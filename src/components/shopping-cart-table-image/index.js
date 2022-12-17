import style from "./style.module.css";
import Btn from "../shared-components/button";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const ShoppingCartTableImage = ({ quantity, ...item }) => {
  const { removeItemFromCart } = useShoppingCart();
  return (
    <div className={style.container}>
      <div>
        <img src={item.thumbnail} />
      </div>
      <div className={style.imageDescription}>
        <span>
          {quantity > 1 ? (
            <span>{` ${quantity} x ${item.title}`}</span>
          ) : (
            item.title
          )}
        </span>
        <Btn
          className="removeItem"
          buttonContent="remove"
          onClick={() => removeItemFromCart(item.id)}
        />
      </div>
    </div>
  );
};

export default ShoppingCartTableImage;
