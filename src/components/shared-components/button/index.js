import style from "./style.module.css";

const Btn = ({ buttonContent, className, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`${style.container} ${style[className]}`}
    >
      {buttonContent}
      {children}
    </button>
  );
};

export default Btn;
