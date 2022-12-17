import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductDetailsPage from "./views/ProductDetailsPage";
import Login from "./components/login";
import NoMatch from "./components/no-match";
import ShoppingCart from "./components/shopping-cart";
import SearchBar from "./components/search-icon";
import Profile from "./components/profile";
import WishListPage from "./views/wishlist-page/WishListPage";
import { ContextProvider } from "./components/authentication";
import RequireAuth from "./components/sale/require-auth";
import ShoppingCartProvider from "./context/ShoppingCartContext";
import ProductsProvider from "./context/ProductsContext";
import WishlistProvider from "./context/WishlistContext";
import SearchContextProvider from "./context/SearchContext";
import SearchPage from "./views/search-page";
const LazyLoadingProductListing = React.lazy(() =>
  import("./views/ProductListing")
);
const LazyLoadingHome = React.lazy(() => import("./views/HomePage"));

const slides = [
  { url: "c97458358789c033061390d08b4fdcf4e98893b0.png" },
  { url: "066bc105c9c7c03204c1c306029ffa7dcc6a9203.png" },
  { url: "3af295aa3c1881b822ecfea58c707e38b4931794.png" },
];

const Router = () => {
  const [data, setData] = useState([]);

  const [isFetch, setIsFetch] = useState(true);

  const getData = async () => {
    setIsFetch(true);
    const response = await axios.get("https://dummyjson.com/products");
    setData(response.data);
    setIsFetch(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isFetch) {
    return "Data is Loading ...";
  }

  return (
    <BrowserRouter>
      <ProductsProvider>
        <ContextProvider>
          <ShoppingCartProvider>
            <WishlistProvider>
              <Routes>
                <Route element={<Layout data={data} />}>
                  <Route
                    index
                    element={
                      <React.Suspense fallback="...Loading">
                        <LazyLoadingHome data={data} slides={slides} />
                      </React.Suspense>
                    }
                  />
                  <Route
                    path="ProductListing"
                    element={
                      <React.Suspense fallback="...Loading">
                        <LazyLoadingProductListing data={data} />
                      </React.Suspense>
                    }
                  />
                  <Route
                    path="ProductDetails/:idUrl"
                    element={<ProductDetailsPage data={data} />}
                  />
                  <Route path="login" element={<Login />} />
                  <Route
                    path="search"
                    element={
                      <SearchContextProvider>
                        <SearchPage />
                      </SearchContextProvider>
                    }
                  />
                  <Route path="heart" element={<WishListPage />} />
                  <Route
                    path="profile"
                    element={
                      <RequireAuth>
                        <Profile />
                      </RequireAuth>
                    }
                  />
                </Route>
                <Route path="ShoppingCart" element={<ShoppingCart />} />
                <Route path="*" element={<NoMatch />} />
              </Routes>
            </WishlistProvider>
          </ShoppingCartProvider>
        </ContextProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
};

export default Router;
