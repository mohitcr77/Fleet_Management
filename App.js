import { ApplicationProvider } from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { useState, createContext, useEffect } from "react";
import * as eva from "@eva-design/eva";

import AuthNavigator from "./app/routes/AuthNavigator";
import { store } from "./app/store/store";
import DrawerNavigator from "./app/routes/AppRootDrawerNavigator";
import index from "./app/service/index";
import StartupScreen from "./app/screens/AdminScreens/StartupScreen";
import TokenContext from "./app/service/context";

export const Emailcontext = createContext();

export default function App() {
  const [userToken, setAuth] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const get = async () => {
    setIsLoading(true);
    let result = await index.getData();
    if (result) {
      const resultjson = JSON.parse(result);
      setAuth(resultjson);
    }
    setIsLoading(false);
  };
  useEffect(() => {
   // get();
  }, []);

  if (isLoading) {
    return <StartupScreen />;
  }

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Provider store={store}>
          <TokenContext.Provider value={{ userToken, setAuth }}>
            {userToken == null ? (
              <AuthNavigator />
            ) : (
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
