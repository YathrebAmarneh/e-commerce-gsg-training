import style from "./style.module.css";
const ExploreItem = ({
  id,
  date,
  headerTitle,
  headerSize,
  content,
  imageName,
  className,
}) => {
  return (
    <div>
      <hr />
      <p className={style.date}>{date}</p>
      {headerSize === "big" ? <h3>{headerTitle}</h3> : <h4>{headerTitle}</h4>}
      <p className={`${style.content}  ${style[className]}`}>{content}</p>
      {imageName.length ? (
        <img alt="exploreImages" src={`assets/images/${imageName}.png`} />
      ) : (
        ""
      )}
    </div>
  );
};

export default ExploreItem;
