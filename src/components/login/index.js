import React, { useState } from "react";
import style from "./style.module.css";
// import axios from "axios";
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

  const handleNameChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  //   const handleEmailChange = (e) => {
  //     setFormData({ ...formData, email: e.target.value });
  //   };

  const handlePasswordChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(formData);
    // const {
    //   data: {
    //     data: { Token, Name },
    //   },
    // } = await axios.post(
    //   "http://restapi.adequateshop.com/api/authaccount/login",
    //   formData
    // );
    // setCookie("token", Token);
    // setCookie("name", Name);
    // console.log("data", data);

    auth.login(user);
    navigate(redirectPath, { replace: true });
  };
  return (
    <div className={style.container}>
      <form className={style.form}>
        <h1>Login</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        {/* <input
          type="email"
          name="email"
          placeholder="Type your email"
          onChange={handleEmailChange}
        /> */}
        <input
          value={formData.value}
          type="password"
          name="password"
          placeholder="Type your password"
          onChange={handlePasswordChange}
        />
        {/* <input type="submit" name="submit" onClick={handleSubmit} /> */}
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
      <a to="/signup">Not yet registered? Register Now</a>
    </div>
  );
};

export default Login;
