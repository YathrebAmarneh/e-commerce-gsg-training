import style from "./style.module.css";
const MainTitle = ({ content, children }) => {
  return (
    <h1 className={style.container}>
      {content} {children}
    </h1>
  );
};

export default MainTitle;
