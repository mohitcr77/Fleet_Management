import { ApplicationProvider } from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { StripeProvider } from "@stripe/stripe-react-native";

import * as eva from "@eva-design/eva";
import Toast from "react-native-toast-message";
import { store } from "../store/store";
import { toastConfig } from "../config/toastConfig";

export default function AppProvider({ children }) {
  return (
    <>
      <StripeProvider
        publishableKey={""}
        merchantIdentifier="merchant.identifier" // required for Apple Pay
        urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      >
        <ApplicationProvider {...eva} theme={eva.light}>
          <NavigationContainer>
            <Provider store={store}>{children}</Provider>
          </NavigationContainer>
        </ApplicationProvider>
      </StripeProvider>
      <Toast config={toastConfig} />
    </>
  );
}
