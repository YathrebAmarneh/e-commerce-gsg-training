import style from "./style.module.css";
import ShoppingCartTableImage from "../shopping-cart-table-image";
import { useProducts } from "../../context/ProductsContext";
import { Button, ButtonGroup } from "@mui/material";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const ShoppingCartItem = ({ id, quantity }) => {
  const { increaseCartQuantity, decreaseCartQuantity, removeItemFromCart } =
    useShoppingCart();
  const { products } = useProducts();
  const item = products.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <>
      <tr className={style.tr}>
        <td>
          <ShoppingCartTableImage quantity={quantity} {...item} />
        </td>
        <td>
          <ButtonGroup
            variant="outlined"
            aria-label="outlined primary button group"
          >
            <Button onClick={() => increaseCartQuantity(id)}>+</Button>
            <Button>{quantity}</Button>
            <Button
              onClick={() =>
                quantity > 1 ? decreaseCartQuantity(id) : removeItemFromCart(id)
              }
            >
              -
            </Button>
          </ButtonGroup>
        </td>
        <td>
          <b>{`${item.price}$`}</b>
        </td>
        <td>
          <b>{`${item.price * quantity}$`}</b>
        </td>
      </tr>
    </>
  );
};

export default ShoppingCartItem;
