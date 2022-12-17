import React from "react";
import { useAuth } from "../authentication";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";

const Profile = () => {
  const navigate = useNavigate();

  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
    navigate("/", { replace: true });
  };
  return (
    <div className={style.container}>
      <h1>Welcome {auth.user}</h1>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
