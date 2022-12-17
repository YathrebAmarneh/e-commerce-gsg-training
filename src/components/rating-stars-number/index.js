import RatingStars from "../rating";
import style from "./style.module.css";

const RatingStarsNumber = ({ rating }) => {
  return (
    <div className={style.container}>
      <RatingStars rating={rating} />
      <span>4.8 of 5</span>
    </div>
  );
};

export default RatingStarsNumber;
