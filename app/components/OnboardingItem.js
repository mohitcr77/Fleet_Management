import {
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  Animated,
  Easing,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { useState, useEffect, useContext, useRef } from "react";
import { Text, Button } from "@ui-kitten/components";
import dimensions from "../constants/dimensions";
//import { TouchableOpacity } from "react-native-gesture-handler";
const OnboardingItem = (props) => {
  const animation = useRef(null);
  useEffect(() => {
    animation.current?.play();
  }, []);
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", flex: 0.1 }}>
        <Text category="h3">Welcome Onboard</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <LottieView
          style={{
            width: dimensions.width,
            height: dimensions.width / 2,
          }}
          autoPlay
          ref={animation}
          source={props?.item?.image}
        />
      </View>
      <View style={{ flex: 0.4 }}>
        <Text style={styles.title}>{props?.item?.title}</Text>
        <Text style={styles.description}>{props?.item?.Description}</Text>
      </View>
      <View style={{ flex: 0.2 }}>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          {props?.index === 2 ? (
            <Button appearance="outline">Get Started</Button>
          ) : null}
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          flex: 0.1,
        }}
      >
        <TouchableOpacity
          onPress={
            props?.index === 0
              ? null
              : () => props.setscrollIndex(props?.index - 1)
          }
        >
          <Image
            tintColor={props?.index === 0 ? "#cccccc" : null}
            source={require("../assets/arrow-left.png")}
            style={{ height: 30, width: 30 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={
            props?.index === props?.listLength
              ? null
              : () => props.setscrollIndex(props?.index + 1)
          }
        >
          <Image
            tintColor={props?.index === props?.listLength ? "#cccccc" : null}
            source={require("../assets/arrow-right.png")}
            style={{ height: 30, width: 30 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: dimensions.width,
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
    width: 10,
  },
  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
    color: "#493d8a",
    textAlign: "center",
  },
  description: {
    fontWeight: "300",
    color: "#62656d",
    textAlign: "center",
    paddingHorizontal: 64,
    fontSize: 20,
  },
});
