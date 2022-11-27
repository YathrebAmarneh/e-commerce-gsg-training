import { IoIosArrowDown } from "react-icons/io";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";

const NavigationLinks = () => {
  const data = ["HOME", "PRODUCTLISTING", "JOURNAL", "ABOUT"];
  const navigate = useNavigate();

  return (
    <div className={style.NavigationLinks}>
      {data.map((item, index) => {
        return (
          <>
            <a key={index} href={`#${item.toLowerCase()}`} onClick={() => navigate(`/${'HOME' ? '' : item}`)}>
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
