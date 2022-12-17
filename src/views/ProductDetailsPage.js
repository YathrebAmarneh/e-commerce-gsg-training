import { useParams } from "react-router-dom";
import AsSeenOnInstagram from "../components/as-seen-on-instagram";
import Banner3 from "../components/banner-3";
import Banner2 from "../components/banner2";
import CustomerReviews from "../components/customer-reviews";
import ProductDetailsBasic from "../components/product-details-basic";
import YouMayLike from "../components/you-may-like";

const ProductDetailsPage = ({ data }) => {
  const idUrl = useParams();
  console.log("idUrl", idUrl);

  let productItem = data.products.find((Item) => {
    return Item.id === +idUrl.idUrl;
  });
  console.log("productItem from ProductDetailsPage", productItem);
  console.log("data from ProductDetailsPage", data.products);

  return (
    <div>
      <ProductDetailsBasic id={idUrl} productItem={productItem} />
      <Banner2 />
      <Banner3 />
      <AsSeenOnInstagram />
      <CustomerReviews />
      <YouMayLike />
    </div>
  );
};

export default ProductDetailsPage;
