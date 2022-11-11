import style from "./style.module.css";
import MainTitle from "../shared-components/main-title";

const AsSoonOn = () => {
  return (
    <div className={style.container}>
      <MainTitle content="As Soon On" />
      <img
        alt="as-soon-img"
        className={style.image}
        src="assets/images/07cd3f1fa1b05fc98036589db10782d230e394f7.png"
      />
    </div>
  );
};

export default AsSoonOn;
