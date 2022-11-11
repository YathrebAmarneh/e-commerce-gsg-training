import style from "./style.module.css";
import { BsQuestionSquare } from "react-icons/bs";
import Btn from "../shared-components/button";
import { useState } from "react";

const Quantity = ({ quantity }) => {
  const [counter, setCounter] = useState(quantity);
  return (
    <div>
      <div className={style.quantity}>Quantity</div>
      <div className={style.content}>
        <div className={style.tripleButton}>
          <Btn
            className="plus"
            buttonContent="-"
            onClick={() => setCounter(counter - 1)}
          />
          <Btn className="counter" buttonContent={counter} />
          <Btn
            className="minus"
            buttonContent="+"
            onClick={() => setCounter(counter + 1)}
          />
        </div>
        <div className={style.cartWishList}>
          <Btn className="addToCart" buttonContent="Add to cart" />
          <div className={style.questionWishList}>
            <BsQuestionSquare size="2rem" />
            <Btn className="addToWhishList" buttonContent="Add to wishlist" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quantity;
