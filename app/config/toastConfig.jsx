import { BaseToast, ErrorToast } from "react-native-toast-message";
import colors from "../constants/colors";
import LoadingScreen from "../screens/AdminScreens/LoadingScreen";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { height, width } from "../helpers/scales";

export const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: colors.themeColor }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={styles.sText1}
    />
  ),

  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={styles.text1}
      text2Style={styles.text2}
    />
  ),

  loading: () => (
    <View style={styles.loader}>
      <Text>Loading...</Text>
      <ActivityIndicator size={"large"} />
    </View>
  ),
};

const styles = StyleSheet.create({
  loader: {
    height,
    width,
    backgroundColor: colors.translucent,
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: 17,
  },
  text2: {
    fontSize: 15,
  },
  sText1: {
    fontSize: 15,
    fontWeight: "400",
  },
});
