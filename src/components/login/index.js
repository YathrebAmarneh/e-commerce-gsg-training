import React, { useState } from "react";
import style from "./style.module.css";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useAuth } from "../../components/authentication";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const auth = useAuth();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();
  const [user, setUser] = useState("");
  const [formData, setFormData] = useState({});

  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
    setUser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    auth.login(user);
    navigate(redirectPath, { replace: true });
    console.log(formData);
    const {
      data: {
        data: { Token, Name },
      },
    } = await axios.post(
      "http://restapi.adequateshop.com/api/authaccount/login",
      formData
    );
    setCookie("token", Token);
    setCookie("name", Name);
    console.log(Token, Name);
  };
  return (
    <div className={style.container}>
      <form className={style.form}>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          placeholder="Type your email"
          onChange={handleEmailChange}
        />

        <input
          value={formData.value}
          type="password"
          name="password"
          placeholder="Type your password"
          onChange={handlePasswordChange}
        />
        <input
          type="submit"
          name="Login"
          value="Login"
          onClick={handleSubmit}
        />
      </form>
      <a to="/signup">Not yet registered? Register Now</a>
    </div>
  );
};

export default Login;
