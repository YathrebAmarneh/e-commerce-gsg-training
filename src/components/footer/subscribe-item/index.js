import { SiFacebook } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import Btn from "../../shared-components/button";
import style from "./style.module.css";

const SubscribeItem = () => {
  return (
    <div className={style.container}>
      <h5>Subscribe to newsletter</h5>
      <div>
        <div className={style.form}>
          <input placeholder="Enter your email" />
          <Btn buttonContent="SUBSCRIBE" className="subscribeButton" />
        </div>

        <div className={style.socialIcons}>
          <SiFacebook className={style.facebook} />
          <AiFillTwitterCircle className={style.twitter} />
        </div>
      </div>
    </div>
  );
};

export default SubscribeItem;
