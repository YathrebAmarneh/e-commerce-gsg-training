import style from "./style.module.css";
import MainTitle from "../shared-components/main-title";
// import FigCaption from "../fig-caption";
import FeaturedCart from "../featured-cart";

const YouMayLike = () => {
  const images = [
    "/assets/images/57b25a954dd33a3587278bc87740a355f0c5bf8e.png",
    "/assets/images/88c6c728579097bb456b8880636063dd6d65bd1f.png",
    "/assets/images/53f89d0d982a9979caf057f322b2751f7c81f661.png",
    "/assets/images/e7f01adacb21c7ff8202323857b9f33998d4d934.png",
  ];
  return (
    <div className={style.container}>
      <MainTitle content="You May Also Like" />
      <div className={style.images}>
        {images.map((src) => {
          const productItem = {
            thumbnail: src,
            price: "$599.00",
            title: "Pueraria Mirifica And Study Phyto Estrogens",
          };

          console.log("productItem from you may like", productItem);
          return <FeaturedCart {...productItem} />;
        })}
      </div>
    </div>
  );
};

export default YouMayLike;
