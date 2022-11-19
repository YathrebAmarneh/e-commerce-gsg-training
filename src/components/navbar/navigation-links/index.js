import { IoIosArrowDown } from "react-icons/io";
import style from "./style.module.css";

const NavigationLinks = () => {
  const data = ["SHOP", "FABRIC", "JOURNAL", "ABOUT"];
  return (
    <div className={style.NavigationLinks}>
      {data.map((item, index) => {
        return (
          <>
            <a key={index} href={`#${item.toLowerCase()}`}>
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
