import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import Sale from "./components/sale";
import Navbar from "./components/navbar";
import SearchBar from "./components/search-icon";
const Layout = () => {
  return (
    <div>
      <Sale />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
