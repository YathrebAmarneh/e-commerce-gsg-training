import style from "./style.module.css";

const FigCaption = ({ src, textCaption }) => {
  return (
    <div>
      <figure>
        <img src={src} />
        <figcaption className={style.figCaption}>{textCaption}</figcaption>
      </figure>
    </div>
  );
};

export default FigCaption;
