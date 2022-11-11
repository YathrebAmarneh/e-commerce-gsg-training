import { CgMenuRound } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import { useState } from "react";
import style from "./style.module.css";
import NavigationLinks from "../navigation-links";
import LoginSide from "../login-side";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <CgMenuRound
      className={style.Hamburger}
      size="20px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <CgCloseO
      className={style.Hamburger}
      size="20px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  );
  return (
    <nav className={style.mobileNav}>
      <div className={style.logoLoginBurger}>
        <img alt="logo" src="assets/images/logo.png" />
        <div className={style.loginBurger}>
          <LoginSide />
          {open ? closeIcon : hamburgerIcon}
        </div>
      </div>

      {open && (
        <div>
          <NavigationLinks />
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
