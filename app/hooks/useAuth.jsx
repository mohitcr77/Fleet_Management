import React, { useContext } from "react";
import TokenContext from "../service/context";

export default useAuth = () => {
  const { userToken: auth, setAuth: setAuth } = useContext(TokenContext);

  return {
    auth,
    setAuth,
    role: auth.role.name,
    token: auth.token,
  };
};
