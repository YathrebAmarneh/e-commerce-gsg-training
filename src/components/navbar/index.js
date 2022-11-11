import DesktopNavigation from "./desktop-navigation";
import MobileNav from "./mobile-navbar";
import style from "./style.module.css";
const Navbar = () => {
  return (
    <div className={style.navBar}>
      <DesktopNavigation />
      <MobileNav />
    </div>
  );
};

export default Navbar;
