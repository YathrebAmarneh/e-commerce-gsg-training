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
            <Button
              style={{
                color: "black",
                border: "1px solid grey",
                height: "30px",
              }}
              sx={{ borderRadius: 12.5 }}
              onClick={() => increaseCartQuantity(id)}
            >
              <b>+</b>
            </Button>
            <Button
              style={{
                color: "black",
                border: "1px solid grey",
                height: "30px",
              }}
            >
              <b>{quantity}</b>
            </Button>
            <Button
              style={{
                color: "black",
                border: "1px solid grey",
                height: "30px",
              }}
              sx={{ borderRadius: 12.5 }}
              onClick={() =>
                quantity > 1 ? decreaseCartQuantity(id) : removeItemFromCart(id)
              }
            >
              <b>-</b>
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
