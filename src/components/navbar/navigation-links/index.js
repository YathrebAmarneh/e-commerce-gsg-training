import { IoIosArrowDown } from "react-icons/io";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";

const NavigationLinks = () => {
  const data = ["HOME", "PROFILE", "PRODUCTLISTING"];
  const navigate = useNavigate();

  return (
    <div className={style.NavigationLinks}>
      {data.map((item, index) => {
        return (
          <>
            <a
              key={index}
              onClick={() => navigate(`/${item === "HOME" ? "" : item}`)}
            >
              {item}
              <IoIosArrowDown className="IoIosArrowDown" />
            </a>
          </>
        );
      })}
    </div>
  );
};

export default NavigationLinks;
