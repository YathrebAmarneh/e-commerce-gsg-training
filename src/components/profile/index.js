import { useAuth } from "../authentication";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";

const Profile = () => {
  const navigate = useNavigate();

  const auth = useAuth();
  const { userData, logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className={style.container}>
      <h1>{`Hello ${userData.name} from ${userData.location}`}</h1>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
