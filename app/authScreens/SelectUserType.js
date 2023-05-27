import { View, StyleSheet, ImageBackground } from "react-native";
import AppButton from "../components/AppButton";

export function AuthLayoutContainer({ children }) {
  return (
    <View style={styles.appContainer}>
      <ImageBackground
        source={require("../assets/login-design.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.layoutContainer}>{children}</View>
      </ImageBackground>
    </View>
  );
}

export default function SelectUserType({ navigation }) {
  const options = [
    { name: "Admin", onPress: () => console.log("admin") },
    { name: "Driver", onPress: () => console.log("driver") },
    { name: "Mechanic", onPress: () => console.log("mechanic") },
  ];

  return (
    <AuthLayoutContainer>
      {options.map((item) => (
        <AppButton key={item.name} onPress={item.onPress} title={item.name} />
      ))}
    </AuthLayoutContainer>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    marginHorizontal: 20,
  },
  layoutContainer: {
    marginTop: 200,
  },
});
