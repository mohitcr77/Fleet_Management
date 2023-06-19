import { ApplicationProvider } from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { useState, createContext, useEffect } from "react";
import * as eva from "@eva-design/eva";
import Toast from "react-native-toast-message";

import { store } from "./app/store/store";
import { toastConfig } from "./app/config/toastConfig";
import AppNavigator from "./app/routes/AppNavigator";
import AuthNavigator from "./app/routes/AuthNavigator";
import index from "./app/service/index";
import StartupScreen from "./app/screens/AdminScreens/StartupScreen";
import TokenContext from "./app/auth/context";

export default function App() {
  const [userToken, setAuth] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const get = async () => {
    setIsLoading(true);
    let result = await index.getData();
    if (result) {
      setAuth(result);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    get();
  }, []);

  if (isLoading) {
    return <StartupScreen />;
  }

  return (
    <>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Provider store={store}>
            <TokenContext.Provider value={{ userToken, setAuth }}>
              {userToken == null ? <AuthNavigator /> : <AppNavigator />}
            </TokenContext.Provider>
          </Provider>
        </NavigationContainer>
      </ApplicationProvider>
      <Toast config={toastConfig} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
