import RatingStarsNumber from "../rating-stars-number";
import MainTitle from "../shared-components/main-title";
import style from "./style.module.css";
import Btn from "../shared-components/button";

const CustomerReviews = () => {
  return (
    <div className={style.container}>
      <MainTitle content="Customer Reviews" />
      <div className={style.title}>
        <RatingStarsNumber rating="4.8" />
        <div className={style.titleTwo}>
          <p className={style.one}>Share your thoughts with other customers</p>
          <Btn className="writeReview" buttonContent="Write a review" />
        </div>
      </div>
      <p className={style.two}>Top Customers Reviews</p>
      <RatingStarsNumber rating="4.8" />
      <p className={style.three}>By Customer Name on February 18, 2017</p>
      <p className={style.mainParagraph}>
        Millions of Americans turn to Lasik Surgery when their vision is less
        than perfect and they’re tired of being tied down to wearing glasses or
        contacts. What part of the eye is it that may be causing all your vision
        trouble? Your cornea! When the shape of your cornea is irregular, the
        image on your retina is blurry and out-of-focus. The cornea is a part of
        your eye that works to focus light and projects an image on the retina.
        This focusing of light is called refraction. The 3 main types of
        refractive errors are myopia (nearsightedness), hyperopia
        (farsightedness) and astigmatism.
      </p>
      <Btn className="showMoreReviews" buttonContent="Show more reviews" />
    </div>
  );
};

export default CustomerReviews;
