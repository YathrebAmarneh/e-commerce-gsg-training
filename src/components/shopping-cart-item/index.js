import style from "./style.module.css";
import ShoppingCartTableImage from "../shopping-cart-table-image";
import { useProducts } from "../../context/ProductsContext";

const ShoppingCartItem = ({ id, quantity }) => {
  console.log("useProducts from ShoppingCartItem", useProducts);
  const { products } = useProducts();
  const item = products.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <>
      <tr className={style.tr}>
        <td>
          <ShoppingCartTableImage quantity={quantity} {...item} />
        </td>
        <td>{quantity}</td>
        <td>{`${item.price}$`}</td>
        <td>{`${item.price * quantity}$`}</td>
      </tr>
    </>
  );
};

export default ShoppingCartItem;
