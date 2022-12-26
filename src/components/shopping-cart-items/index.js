import style from "./style.module.css";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import ShoppingCartItemTable from "../shopping-cart-item-table";

const ShoppingCartItems = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>Shopping Cart</h1>
        <Link to="/ProductListing">
          Continue Shopping <IoMdArrowDropright size="1.5rem" />
        </Link>
      </div>
      <ShoppingCartItemTable />
    </div>
  );
};

export default ShoppingCartItems;
