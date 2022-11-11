import style from "./style.module.css";
import Btn from "../shared-components/button";
import { useState } from "react";
import QuickViewModal from "../quick-view-modal";

const FeaturedCart = ({ id, ...productItem }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // console.log("productItem", productItem.title);

  return (
    <div className={style.container}>
      <div className={style.featuredImage}>
        {/* <span className={style.new}>{brandNew ? "New" : ""}</span> */}
        <img alt="featuredCarts" src={productItem.thumbnail} />
      </div>

      <div className={style.imageDescription}>
        <p className="description">{productItem.description}</p>
        <p className="price">{`${productItem.price} $`}</p>
      </div>

      <div className={style.hover}>
        <Btn
          buttonContent="Quick view"
          className="quickView"
          onClick={() => setModalIsOpen(true)}
        />
        <QuickViewModal
          modalIsOpen={modalIsOpen}
          onClick={() => setModalIsOpen(false)}
          onRequestClose={() => setModalIsOpen(false)}
          productItem={productItem}
        />
      </div>
    </div>
  );
};

export default FeaturedCart;
