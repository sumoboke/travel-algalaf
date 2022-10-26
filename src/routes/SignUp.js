import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Auth";

const SignUp = () => {
  const { users } = useAuth();
  return (
    <>
      {users ? (
        <Navigate to="/" />
      ) : (
        <div className="w-screen h-screen flex bg-gradient-to-br from-orange-700/50 via-amber-300/50">
          <div className="m-auto flex flex-col py-3 px-2 bg-white/20 backdrop-blur-md backdrop-contrast-75">
            <form></form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
