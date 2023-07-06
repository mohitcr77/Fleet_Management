import React, { useState, useEffect } from "react";

import AuthNavigator from "./../routes/AuthNavigator";
import AppNavigator from "../routes/AppNavigator";
import StartupScreen from "./AdminScreens/StartupScreen";
import permanentStorage, { loginDetail } from "../auth/permanentStorage";
import useAuth from "../hooks/useAuth";
import { useSelector } from "react-redux";

export default function Root() {
  const [isLoading, setIsLoading] = useState(false);
  const { auth } = useSelector((state) => state.auth);
  const { setAuth, subscribed } = useAuth();

  useEffect(() => {
    get();
  }, []);

  async function get() {
    setIsLoading(true);
    let result = await permanentStorage.getData(loginDetail);
    setAuth({ key: "auth", data: result });

    setIsLoading(false);
  }

  if (isLoading) {
    return <StartupScreen />;
  }
  return auth ? <AppNavigator /> : <AuthNavigator />;
}
