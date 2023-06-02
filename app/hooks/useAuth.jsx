import React, { useContext } from "react";
import TokenContext from "../service/context";

export default useAuth = () => {
  const { userToken: auth, setUserToken: setAuth } = useContext(TokenContext);

  return {
    auth,
    setAuth,
  };
};
