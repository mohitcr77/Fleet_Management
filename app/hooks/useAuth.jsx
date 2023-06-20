import React, { useContext } from "react";
import TokenContext from "../auth/context";
import dataType from "../constants/dataType";
import { Role } from "../constants/entity";

export default useAuth = () => {
  const { userToken: auth, setAuth: setAuth } = useContext(TokenContext);
  let role = null;
  let token = null;
  console.log(auth, "qqq");
  if (auth) {
    role = Role.ADMIN;
    // role = typeof auth.role === dataType.string ? auth.role : auth.role.name;

    token = auth.token;
  }
  return {
    auth,
    setAuth,
    role,
    token,
  };
};
