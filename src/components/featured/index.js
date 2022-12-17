import FeaturedCarts from "../featured-carts";
import MainTitle from "../shared-components/main-title";
import style from "./style.module.css";

const Featured = ({ data }) => {
  return (
    <div className={style.container}>
      <MainTitle content="Featured" />
      <FeaturedCarts className="container" data={data} />
    </div>
  );
};

export default Featured;
