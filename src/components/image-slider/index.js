import style from "./style.module.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Btn from "../shared-components/button";
import { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerStyles = {
    width: "1440px",
    height: "600px",
    margin: "0 auto",
  };
  const sliderStyles = { height: "100%", position: "relative" };

  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(./assets/images/${slides[currentIndex].url})`,
  };
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div style={containerStyles}>
      <div className={style.container} style={sliderStyles}>
        <div className={style.leftArrow} onClick={goToPrevious}>
          <MdOutlineKeyboardArrowLeft size="3rem" />
        </div>
        <div style={slideStyles}></div>
        {/* <img
        alt="img-slider"
        src="assets/images/c97458358789c033061390d08b4fdcf4e98893b0.png"
      /> */}

        <div className={style.content}>
          <h5>Perfume Tips Tricks</h5>
          <Btn className="shopNowBtn" buttonContent="SHOP NOW" />
        </div>

        <div className={style.rightArrow} onClick={goToNext}>
          <MdOutlineKeyboardArrowRight size="3rem" />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
