import style from "./style.module.css";
import { useState, useRef } from "react";
import { BsPlayCircle } from "react-icons/bs";

const ThumbnailImagesDetails = ({
  thumbnail,
  image1,
  image2,
  image3,
  image4,
  image5,
}) => {
  const image1Ref = useRef();
  const image2Ref = useRef();
  const image3Ref = useRef();
  const image4Ref = useRef();
  const image5Ref = useRef();

  const [src, setSrc] = useState(thumbnail);
  return (
    <div className={style.images}>
      <div className={style.imageDetails}>
        <img
          className={style.miniImage}
          alt="miniImage"
          src={image1}
          ref={image1Ref}
          onClick={() => setSrc(image1Ref.current.src)}
        />
        <img
          className={style.miniImage}
          alt="miniImage"
          src={image2}
          ref={image2Ref}
          onClick={() => setSrc(image2Ref.current.src)}
        />
        <img
          className={style.miniImage}
          alt="miniImage"
          src={image3}
          ref={image3Ref}
          onClick={() => setSrc(image3Ref.current.src)}
        />
        <img
          className={style.miniImage}
          alt="miniImage"
          src={image4}
          ref={image4Ref}
          onClick={() => setSrc(image4Ref.current.src)}
        />
        <div className={style.video}>
          <img
            className={style.miniImage}
            alt="miniImage"
            src={image5}
            ref={image5Ref}
            onClick={() => setSrc(image5Ref.current.src)}
          />
          <BsPlayCircle size="2rem" color="white" className={style.play} />
        </div>
      </div>
      <div className={style.mainImage}>
        <img alt="thumbnail" src={src} />
        {/* <BsPlayCircle size="5rem" color="white" className={style.playMain} /> */}
      </div>
    </div>
  );
};

export default ThumbnailImagesDetails;
