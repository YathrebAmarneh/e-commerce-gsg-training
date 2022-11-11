import style from "./style.module.css";
import MainTitle from "../shared-components/main-title";

const AboutMatter = () => {
  return (
    <div className={style.container}>
      <MainTitle content="About Matter" />
      <div className={style.content}>
        <img
          alt="about-matter"
          src="assets/images/fc26b70da783a49001cf63c38ed1ad5c5044b323.png"
        />
        <div className={style.textContent}>
          <p className={style.p1}>
            Our mission is threefold - to foster designer-artisan
            collaborations, inspire consumers to value provenance and process,
            and pioneer industry chang and sustainability for rural textile
            communities.
          </p>
          <p className={style.p2}>ARTISAN EMPLOYMENT DAYS CREATED</p>
          <p className={style.p3}>123456</p>
          <p className={style.p4}>
            India
            <br /> China
            <br /> Sri Lanka
          </p>
          <p className={style.p5}>#MATTERAIBLE</p>
          <p className={style.p6}>
            12 designers <br />
            12 factories
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMatter;
