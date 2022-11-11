import { BsPlayCircle } from "react-icons/bs";
import "./style.css";

const RecommendedVideosItem = ({ imageName, caption }) => {
  return (
    <div className="RecommendedVideosItem">
      <figure>
        <div className="video-thumb">
          <img alt="RecommendedVideosItem" src={`assets/images/${imageName}`} />
          <BsPlayCircle className="play-circle" />
        </div>
        <figcaption>{caption}</figcaption>
      </figure>
    </div>
  );
};

export default RecommendedVideosItem;
