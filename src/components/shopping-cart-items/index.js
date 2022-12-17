import style from "./style.module.css";
import ShoppingCartItemTable from "../shopping-cart-item-table";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const ShoppingCartItems = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>Shopping Cart</h1>
      </div>
      <hr />
      <Link to="/ProductListing">
        {" "}
        <AiOutlineArrowLeft /> Continue Shopping
      </Link>
      <ShoppingCartItemTable />
    </div>
  );
};

export default ShoppingCartItems;
