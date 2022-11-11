import ExploreItem from "./explore-item";
import style from "./style.module.css";
import MainTitle from "../shared-components/main-title";
import Btn from "../shared-components/button";

const Explore = () => {
  const exploreItems = [
    {
      id: "1",
      date: "FIELDTESTED.JANUARY 19, 2017",
      headerTitle: "Connected Clothing: Raye Padit",
      headerSize: "big",
      content:
        "As a voice for conscious fashion, Raye Padit is motivated by the belief that one person’s actions, no matter how small, holds great impact. This core ideal has driven him to start his three passion projects: Connected Threads Asia, PeyaR, and Swagalls. ",
      imageName: "c7663a357d9244c46a1e6fa3c99a91133043df2c",
      className: "",
    },
    {
      id: "2",
      date: "FIELDTESTED.JANUARY 19, 2017",
      headerTitle: "Kérastase: A Collaboration",
      headerSize: "small",
      content: "",
      imageName: "e2bc90982fb7e7249aa7e2b3a0dcb7947a202eee",
      className: "",
    },
    {
      id: "3",
      date: "FIELDTESTED.JANUARY 19, 2017",
      headerTitle: "Jaclynn Seah",
      headerSize: "small",
      content:
        "Jaclynn’s wandering spirit has brought her from the lush greenery of South America to the craters of Indonesia.",
      imageName: "",
      className: "pContent",
    },
    {
      id: "4",
      date: "FIELDTESTED.JANUARY 19, 2017",
      headerTitle: "Remarkable Resilience: Grace Kim",
      headerSize: "small",
      content:
        "A woman in my life who has shown remarkable resilience is my best friend Grace. Since she was a kid, she struggled with general anxiety disorder and panic disorder.",
      imageName: "",
      className: "",
    },
    {
      id: "5",
      date: "FIELDTESTED.JANUARY 19, 2017",
      headerTitle: "How To Wear The Lounge Lunghi",
      headerSize: "small",
      content: "",
      imageName: "7eeccc1183cfe27c1a9b800c0037999ba9921181",
      className: "",
    },
  ];

  const shiftedElement = exploreItems.shift();
  return (
    <div className={style.container}>
      <MainTitle content="Explore" />
      <div className={style.content}>
        <div className={style.shiftedElement}>
          <ExploreItem {...shiftedElement} />
        </div>
        <div className={style.fourItems}>
          {exploreItems.map((exploreItem) => {
            const { id } = exploreItem;
            return (
              <>
                <ExploreItem key={id} {...exploreItem} />
              </>
            );
          })}
        </div>
      </div>
      <div className={style.exploreButton}>
        <Btn buttonContent="See the journal" className="exploreButton" />
      </div>
    </div>
  );
};

export default Explore;
