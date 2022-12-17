import { createContext, useState, useContext, useEffect } from "react";

const WishlistContext = createContext({});
const initialWishlisttems = localStorage.getItem("whishlist")
  ? JSON.parse(localStorage.getItem("whishlist"))
  : [];

const WishlistProvider = ({ children }) => {
  const [wishlistCartItems, setWishlistCartItems] =
    useState(initialWishlisttems);
  useEffect(() => {
    localStorage.setItem("whishlist", JSON.stringify(wishlistCartItems));
  }, [wishlistCartItems]);
  const getWishlisttemsQuantity = (id) => {
    return wishlistCartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseWishlistQuantity = (id) => {
    setWishlistCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeWishlistItemFromCart = (id) => {
    setWishlistCartItems((currItems) =>
      currItems.filter((item) => item.id !== id)
    );
  };
  return (
    <WishlistContext.Provider
      value={{
        wishlistCartItems,
        getWishlisttemsQuantity,
        increaseWishlistQuantity,
        removeWishlistItemFromCart,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;

export const useWishlist = () => {
  return useContext(WishlistContext);
};
