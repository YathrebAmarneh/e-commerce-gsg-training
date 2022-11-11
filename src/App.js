import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Sale from "./components/sale";
import Navbar from "./components/navbar";
import ImageSlider from "./components/image-slider";
import Featured from "./components/featured";
import AboutMatter from "./components/about-matter";
import Shop from "./components/shop";
import RecommendedVideos from "./components/recommended-videos";
import AsSoonOn from "./components/as-soon-on";
import Footer from "./components/footer";
import Explore from "./components/explore";
import HomePage from "./views/HomePage";
import ProductListing from "./views/ProductListing";

const slides = [
  { url: "c97458358789c033061390d08b4fdcf4e98893b0.png" },
  { url: "066bc105c9c7c03204c1c306029ffa7dcc6a9203.png" },
  { url: "3af295aa3c1881b822ecfea58c707e38b4931794.png" },
];

function App() {
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
  //   console.log("data", data);
  return (
    <>
      {/* <HomePage slides={slides} data={data} /> */}
      <ProductListing slides={slides} data={data} />

    </>
  );
}
export default App;
