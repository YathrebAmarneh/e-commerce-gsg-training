import NavigationLinks from "../navigation-links";
import LoginSide from "../login-side";
import style from "./style.module.css";
import { Link } from "react-router-dom";
const DesktopNavigation = () => {
  return (
    <div className={style.desktopNavigation}>
      <div className={style.leftNavbar}>
        <Link to="/">
          <img alt="logo" src="/assets/images/logo.png" />
        </Link>
        <NavigationLinks />
      </div>
      <LoginSide />
    </div>
  );
};

export default DesktopNavigation;
