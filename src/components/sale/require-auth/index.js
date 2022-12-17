import { useAuth } from "../../authentication";
import { Navigate, useLocation } from "react-router-dom";
import React from "react";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};

export default RequireAuth;
