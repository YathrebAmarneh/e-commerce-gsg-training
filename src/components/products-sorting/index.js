import Filteration from "../filteration";
import style from "./style.module.css";
import FeaturedCarts from "../featured-carts";
import { useState } from "react";

const ProductsSorting = ({ data, value, handleFilteringValue }) => {
  const [category, setCategory] = useState("");

  const handleOnClick = (category) => {
    setCategory(category);
  };

  return (
    <div className={style.container}>
      <Filteration
        handleOnClick={handleOnClick}
        handleFilteringValue={handleFilteringValue(category)}
      />
      <FeaturedCarts
        value={value}
        categoryName={category}
        className="containerListingProduct"
        data={data}
      />
    </div>
  );
};

export default ProductsSorting;
