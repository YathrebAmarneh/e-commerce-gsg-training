import style from "./style.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { AiOutlineLock } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const LoginSide = () => {
  const navigate = useNavigate();

  return (
    <div className={style.rightNavbar}>
      <a href="#login" className={style.login} onClick={() => navigate("/login")}>

        {" "}
        LOGIN
      </a>
      <div className={style.headerIcons}>
        <FiSearch className="search" />
        <AiOutlineHeart className="heart" />
        <AiOutlineLock className="lineLock" />
      </div>
    </div>
  );
};

export default LoginSide;
