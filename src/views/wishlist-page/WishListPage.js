import FeaturedCart from "../../components/featured-cart";
import MainTitle from "../../components/shared-components/main-title";
import { useWishlist } from "../../context/WishlistContext";
import style from "./style.module.css";
import { useProducts } from "../../context/ProductsContext";
import Btn from "../../components/shared-components/button";
import { MdOutlineFavorite } from "react-icons/md";

const WishListPage = () => {
  const { wishlistCartItems, removeWishlistItemFromCart } = useWishlist();
  const { products } = useProducts();
  return (
    <div className={style.container}>
      <MainTitle content="WishList">
        <MdOutlineFavorite size="2rem" color="red" />
      </MainTitle>
      {wishlistCartItems.length ? (
        <div className={style.wishlistContainer}>
          {wishlistCartItems.map((Item, index) => {
            const whishlistItem = products.find(
              (product) => product.id === Item.id
            );
            return (
              <FeaturedCart key={index} {...whishlistItem}>
                <Btn
                  className="removeWhishlist"
                  buttonContent="remove"
                  onClick={() => removeWishlistItemFromCart(whishlistItem.id)}
                />
              </FeaturedCart>
            );
          })}
        </div>
      ) : (
        <h2>Your Whishlist is empty.</h2>
      )}
    </div>
  );
};

export default WishListPage;
