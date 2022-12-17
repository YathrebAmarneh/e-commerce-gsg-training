import style from "./style.module.css";
import Btn from "../shared-components/button";
import { useState } from "react";
import QuickViewModal from "../quick-view-modal";

const FeaturedCart = ({ children, ...productItem }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className={style.container}>
      <div className={style.featuredImage}>
        <img alt="featuredCarts" src={productItem.thumbnail} />
      </div>

      <div className={style.imageDescription}>
        <p className={style.title}>{productItem.title}</p>
        <p className="price">{`${productItem.price} $`}</p>
      </div>

      <div className={style.hover}>
        <Btn
          buttonContent="Quick view"
          className="quickView"
          onClick={() => setModalIsOpen(true)}
        />
        {children}
        <QuickViewModal
          id={productItem.id}
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
