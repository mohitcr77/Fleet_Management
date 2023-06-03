import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/routes/AuthNavigator";
import AppNavigator from "./app/routes/AppNavigator";
import { useState, createContext, useEffect } from "react";
export const Emailcontext = createContext();
import { store } from "./app/store/store";
import { Provider } from "react-redux";
import TokenContext from "./app/service/context";
import index from "./app/service/index";
import StartupScreen from "./app/screens/AdminScreens/StartupScreen";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import DrawerNavigator from "./app/routes/AppRootDrawerNavigator";

export default function App() {
  const [userToken, setAuth] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const getLoadingSreen = async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    try {
      await sleep(1000);
    } finally {
      setIsLoading(false);
    }
  };

  const get = async () => {
    let result = await index.getData();
    if (result) {
      const resultjson = JSON.parse(result);
      setAuth(resultjson);
    }
  };
  useEffect(() => {
    getLoadingSreen();
    get();
  }, []);

  if (isLoading) {
    return <StartupScreen />;
  }
  //console.log(userToken);
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Provider store={store}>
          <TokenContext.Provider value={{ userToken, setAuth }}>
            {/* <DrawerNavigator /> */}
            {userToken == null ? (
              // No token found, user isn't signed in
              <AuthNavigator />
            ) : (
              // User is signed in
              <DrawerNavigator />
              // <AppNavigator />
            )}
          </TokenContext.Provider>
        </Provider>
      </NavigationContainer>
    </ApplicationProvider>
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
