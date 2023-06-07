import { useNavigation, DrawerActions } from "@react-navigation/native";
import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { height, width } from "../helpers/scales";

import Icons from "./Icons";
import dimensions from "../constants/dimensions";
import customStyles from "../constants/styles";

export default function ParentContainer({
  children,
  containerStyle,
  useScroll = true,
  onBackButtonPressScreen,
  onAddDocumentScreen,
}) {
  const navigation = useNavigation();

  const CompWrapper = () => {
    return (
      <View style={[styles.compContainer, containerStyle]}>{children}</View>
    );
  };
  return (
    <View
      style={{
        minHeight: height + 30,
        alignItems: "center",
      }}
    >
      <View style={styles.header}>
        <View style={customStyles.flex_row_between}>
          <Icons.Menu
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
          <Image
            source={require("../assets/images/logo-truck.png")}
            style={{ width: 60, height: 50, marginLeft: 15 }}
            resizeMode="contain"
          />
          <Image
            source={require("../assets/images/logo-name.png")}
            style={{ width: 100, height: 50 }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.iconContainer}>
          <HeaderIcon />
        </View>
      </View>
      {useScroll ? (
        <ScrollView style={styles.container}>
          <CompWrapper />
        </ScrollView>
      ) : (
        <CompWrapper />
      )}
    </View>
  );

  function HeaderIcon() {
    if (onBackButtonPressScreen) {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate(onBackButtonPressScreen)}
        >
          <Text>Back</Text>
        </TouchableOpacity>
      );
    }

    if (onAddDocumentScreen) {
      return (
        <Icons.AddDocument
          onPress={() => navigation.navigate(onAddDocumentScreen)}
        />
      );
    }

    return <View />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "flex-end",
    flexDirection: "row",
    fontSize: 20,
    height: 100,
    paddingBottom: 17,
    paddingHorizontal: 20,
    paddingTop: 30,
    shadowColor: "#000",
    backgroundColor: "white",
    width: width,
    justifyContent: "space-between",
  },
  compContainer: {
    padding: dimensions.mainHorizontalPadding,
    minHeight: height,
    alignItems: "center",
    paddingBottom: 50,
  },
  iconContainer: {
    // backgroundColor: "blue",
    height: 45,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});
