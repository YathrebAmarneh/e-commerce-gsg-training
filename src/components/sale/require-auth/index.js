import { useAuth } from "../../authentication";
import { Navigate, useLocation } from "react-router-dom";
import React from "react";
// useLocation()  selects which pathe ypu are in
const RequireAuth = ({ children }) => {
  const location = useLocation();
  console.log("location", location);
  //location: {pathname: '/profile', search: '', hash: '', state: null, key: 'catk9oy2'}
  const { token } = useAuth();
  if (!token) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};

export default RequireAuth;
