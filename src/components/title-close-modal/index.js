import style from "./style.module.css";
import { AiOutlineClose } from "react-icons/ai";
import Btn from "../shared-components/button";
const TitleCloseModal = ({ title, onClick }) => {
  return (
    <div className={style.header}>
      <h2>{title}</h2>
      <Btn className="closeModalBtn" onClick={onClick}>
        <AiOutlineClose size="2rem" />
      </Btn>
    </div>
  );
};

export default TitleCloseModal;
