import style from "./style.module.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import ShoppingCartItemTable from "../shopping-cart-item-table";

const ShoppingCartItems = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>Shopping Cart</h1>
      </div>
      <hr />
      <ShoppingCartItemTable />

      <Link to="/ProductListing">
        {" "}
        <AiOutlineArrowLeft /> Continue Shopping
      </Link>
    </div>
  );
};

export default ShoppingCartItems;
