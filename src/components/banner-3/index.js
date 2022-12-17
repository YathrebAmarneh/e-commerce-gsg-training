import style from "./style.module.css";

import React from "react";
import FigCaption from "../fig-caption";

const Banner3 = () => {
  return (
    <div className={style.container}>
      <div>
        <FigCaption
          src="/assets/images/23b6a61cf7e04aa0f65cfba9c2c782a1cc814b81.png"
          textCaption="Lorem ipsum dolor sit amet"
        />
        <FigCaption
          src="/assets/images/9555ed1e8dfca9f402886f44b5ee4001a4034f1d.png"
          textCaption="Lorem ipsum dolor sit amet"
        />
        <FigCaption
          src="/assets/images/5dde6465fbcdab39c91f2f5d98796669d9b48c40.png"
          textCaption="Lorem ipsum dolor sit amet"
        />
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry’s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};

export default Banner3;
