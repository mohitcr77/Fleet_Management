import React, { useContext } from "react";
import TokenContext from "../service/context";

const { userToken: auth, setUserToken: setAuth } = useContext(TokenContext);

export default {
  auth,
  setAuth,
};
