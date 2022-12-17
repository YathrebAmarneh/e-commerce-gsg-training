import React, { createContext, useState } from "react";
import axios from "axios";
// import { apiKey } from "../api/config";
export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = (query) => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((response) => {
        setImages(response.data.photos.photo);
        setLoading(false);
      })
      .catch((error) => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  };
  return (
    <SearchContext.Provider value={{ images, loading, runSearch }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
