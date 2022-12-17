import SearchBar from "../../components/search-icon";
import style from "./style.module.css";
import { useProducts } from "../../context/ProductsContext";
import Container from "../../components/container";

const SearchPage = () => {
  const { products } = useProducts();
  return (
    <div>
      <SearchBar data={products} />
      <Container />
    </div>
  );
};

export default SearchPage;
