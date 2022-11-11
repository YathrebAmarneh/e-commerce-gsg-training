import RatingStars from "../rating";
import style from "./style.module.css";

const TitleStarsPrice = ({ title, rating, price }) => {
  return (
    <div className={style.container}>
      <h3 className={style.title}>{title}</h3>
      <div className={style.priceRating}>
        <p className={style.price}>{`GSD ${price}`}</p>
        <div className={style.review}>
          <div className={style.stars}>
            <RatingStars rating={rating} />
          </div>
          <span className={style.ratingFromFive}>{`${rating} of 5`}</span>
        </div>
      </div>
    </div>
  );
};

export default TitleStarsPrice;
