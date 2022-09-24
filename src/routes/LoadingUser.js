import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Auth";

const LoadingUser = () => {
  const { users } = useAuth();
  return <>{!users ? <Navigate to="/" /> : <div>Loading</div>}</>;
};

export default LoadingUser;
