import style from "./style.module.css";
import ThumbnailImagesDetails from "../thumbnail-images-details";
import TitleCloseModal from "../title-close-modal";
import TitleStarsPrice from "../title-stars-price";
import DescriptiveText from "../descriptive-text";
import Btn from "../shared-components/button";
import Quantity from "../quantity";

const ProductDetails = ({ onClick, productItem }) => {
  console.log("productItem from product details", productItem);
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images: [image1, image2, image3, image4, image5],
  } = productItem;
  return (
    <div className={style.container}>
      <div>
        <TitleCloseModal title={title} onClick={onClick} />
      </div>

      <div className={style.content}>
        <ThumbnailImagesDetails
          thumbnail={thumbnail}
          image1={image1}
          image2={image2}
          image3={image3}
          image4={image4}
          image5={image5}
        />

        <div className={style.description}>
          <TitleStarsPrice title={title} rating={rating} price={price} />
          <DescriptiveText
            description={description}
            discountPercentage={discountPercentage}
            brand={brand}
            category={category}
          />
          <Quantity quantity={stock} />
        </div>
      </div>
      <div className={style.viewFullProductDetails}>
        <Btn
          buttonContent="View Full product Details"
          className="viewFullProductDetails"
        />
      </div>
    </div>
  );
};

export default ProductDetails;
