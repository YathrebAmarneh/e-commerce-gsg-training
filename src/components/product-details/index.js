import style from "./style.module.css";
import TitleCloseModal from "../title-close-modal";
import Btn from "../shared-components/button";
import { useNavigate } from "react-router-dom";
import ProductDetailsBasic from "../product-details-basic";

const ProductDetails = ({ onClick, productItem }) => {
  const navigate = useNavigate();

  console.log("productItem from product details", productItem);
  const { title } = productItem;

  return (
    <div className={style.container}>
      <div>
        <TitleCloseModal title={title} onClick={onClick} />
      </div>

      <ProductDetailsBasic id={productItem.id} productItem={productItem} />
      <div className={style.viewFullProductDetails}>
        <Btn
          onClick={() => {
            navigate(`/ProductDetails/${productItem.id}`);
          }}
          buttonContent="View Full product Details"
          className="viewFullProductDetails"
        />
      </div>
    </div>
  );
};

export default ProductDetails;
