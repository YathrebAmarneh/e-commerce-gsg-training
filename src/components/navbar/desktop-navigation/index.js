import NavigationLinks from "../navigation-links";
import LoginSide from "../login-side";
import style from "./style.module.css";
const DesktopNavigation = () => {
  return (
    <div className={style.desktopNavigation}>
      <div className={style.leftNavbar}>
        <img alt="logo" src="assets/images/logo.png" />
        <NavigationLinks />
      </div>
      <LoginSide />
    </div>
  );
};

export default DesktopNavigation;
