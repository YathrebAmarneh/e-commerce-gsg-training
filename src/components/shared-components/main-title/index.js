import style from "./style.module.css";
const MainTitle = ({ content }) => {
  return <h1 className={style.container}>{content}</h1>;
};

export default MainTitle;
