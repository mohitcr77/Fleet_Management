import React from "react";
import { Text, View, ActivityIndicator, Image, StyleSheet } from "react-native";
import { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";

const StartupScreen = () => {
  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    animation.current?.play();
  }, []);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Text>Loading...</Text> */}
      <Image
        style={styles.iconImage}
        source={require("../assets/atranz_logo.png")}
      />
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 150,
          height: 150,
          backgroundColor: "#ffffff00",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../assets/loading.json")}
      />
      {/* <ActivityIndicator size="large" /> */}
    </View>
  );
};

export default StartupScreen;

const styles = StyleSheet.create({
  iconImage: {
    height: 100,
    width: 300,
  },
});
