import "./style.css";

const ShopItem = ({ imagename, piecename }) => {
  return (
    <div className="shop-image">
      <img src={`assets/images/${imagename}`} alt="#" />
      {/* <button>SHOP NOW</button> */}
      <div className="piece-name">{piecename}</div>
    </div>
  );
};

export default ShopItem;
