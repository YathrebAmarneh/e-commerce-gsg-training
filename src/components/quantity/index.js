import style from "./style.module.css";
import { BsQuestionSquare } from "react-icons/bs";
import Btn from "../shared-components/button";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useWishlist } from "../../context/WishlistContext";
const Quantity = ({ id, quantity }) => {
  const { getItemsQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const { wishlistCartItems, increaseWishlistQuantity } = useWishlist();
  console.log("wishlistCartItems length", wishlistCartItems.length);
  const Quant = getItemsQuantity(id);
  return (
    <div>
      <div className={style.content}>
        <div className={style.tripleButton}>
          <Btn
            className="plus"
            buttonContent="-"
            onClick={() => decreaseCartQuantity(id)}
          />
          <Btn className="counter" buttonContent={Quant} />
          <Btn
            className="minus"
            buttonContent="+"
            onClick={() => increaseCartQuantity(id)}
          />
        </div>
        <div className={style.cartWishList}>
          <Btn
            className="addToCart"
            buttonContent="Add to cart"
            onClick={() => increaseCartQuantity(id)}
          />
          <div className={style.questionWishList}>
            <BsQuestionSquare size="2rem" />
            <Btn
              className="addToWhishList"
              buttonContent="Add to wishlist"
              onClick={() => increaseWishlistQuantity(id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quantity;
