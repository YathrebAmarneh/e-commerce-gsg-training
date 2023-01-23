import style from "./style.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useNavigate, Link } from "react-router-dom";
import { Badge, Avatar } from "@mui/material";
import { useAuth } from "../../authentication";
import { useShoppingCart } from "../../../context/ShoppingCartContext";
import { useWishlist } from "../../../context/WishlistContext";

const LoginSide = () => {
  const navigate = useNavigate();
  const { cartQuantity } = useShoppingCart();
  const { wishlistCartItems } = useWishlist();

  const auth = useAuth(); //{token,login,logout}
  const { token, userData } = auth;
  // console.log("auth", auth);
  return (
    <div className={style.rightNavbar}>
      {!token ? (
        <Link
          to="LOGIN"
          className={style.login}
          onClick={() => navigate("/login")}
        >
          LOGIN
        </Link>
      ) : (
        <div className={style.avatar}>
          <Avatar
            sx={{ bgcolor: "success.light" }}
            alt="Remy Sharp"
            src={userData.profilepicture}
            onClick={() => navigate("/profile")}
          >
            YA
          </Avatar>
        </div>
      )}

      <div className={style.headerIcons}>
        <Link to="search" className={style.search}>
          <FiSearch />
        </Link>

        <Badge badgeContent={wishlistCartItems.length} color="primary">
          <Link to="heart" className={style.heart}>
            <AiOutlineHeart />
          </Link>
        </Badge>

        <Badge badgeContent={cartQuantity} color="primary">
          <Link to="ShoppingCart" className={style.cart}>
            <HiOutlineShoppingBag />
          </Link>
        </Badge>
      </div>
    </div>
  );
};

export default LoginSide;
