import MainTitle from "../shared-components/main-title";
import ShopItem from "./shop-item";
import "./style.css";
const shopData = [
  {
    imagename: "c3d74b651e3f521439ae7e68750fa01c13171c98.png",
    piecename: "Pants",
  },
  {
    imagename: "ac22cf3d613f85df2f2d5fbe238567718c47fa96.png",
    piecename: "Jumpsuits",
  },
  {
    imagename: "ee642707bfa9abb265f97fb49aeca2886b3db030.png",
    piecename: "Tops",
  },
  {
    imagename: "2362345cd93c41ef9634d80b90866ae9394758d9.png",
    piecename: "Accessories",
  },
];

const Shop = () => {
  return (
    <div className="shop">
      <MainTitle content="Shop" />
      <div className="shop-images">
        {shopData.map((shopdata, index) => {
          const { imagename, piecename } = shopdata;

          return (
            <>
              <ShopItem
                key={index}
                imagename={imagename}
                piecename={piecename}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
