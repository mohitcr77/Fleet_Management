import React, { useContext } from "react";
import TokenContext from "../service/context";
import dataType from "../constants/dataType";

export default useAuth = () => {
  const { userToken: auth, setAuth: setAuth } = useContext(TokenContext);
  return {
    auth,
    setAuth,
    role: typeof auth.role === dataType.string ? auth.role : auth.role.name,
    token: auth.token,
  };
};
