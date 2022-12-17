import style from "./style.module.css";
import ThumbnailImagesDetails from "../thumbnail-images-details";
import TitleStarsPrice from "../title-stars-price";
import DescriptiveText from "../descriptive-text";
import Quantity from "../quantity";

function ProductDetailsBasic({ productItem }) {
  // console.log("productItem from ProductDetailsBasic", productItem);
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
        <Quantity id={productItem.id} quantity={stock} />
      </div>
    </div>
  );
}

export default ProductDetailsBasic;
