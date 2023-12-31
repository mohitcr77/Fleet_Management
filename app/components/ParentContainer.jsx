import {
  useNavigation,
  DrawerActions,
  CommonActions,
} from "@react-navigation/native";
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
import colors from "../constants/colors";
import ListHeader from "./ListHeader";

export default function ParentContainer({
  title = null,
  children,
  containerStyle,
  useScroll = true,
  onBackButtonPressScreen,
  addScreen,
  noData = false,
}) {
  const navigation = useNavigation();

  const CompWrapper = () => {
    return (
      <View style={[styles.compContainer, containerStyle]}>
        {noData ? (
          <View style={styles.noDataContainer}>
            <Text style={styles.noDataText}>No Data</Text>
          </View>
        ) : (
          children
        )}
      </View>
    );
  };
  return (
    <View
      style={{
        minHeight: height + 30,
        alignItems: "center",
      }}
    >
      <Header
        title={title}
        onBackButtonPressScreen={onBackButtonPressScreen}
        addScreen={addScreen}
      />
      {useScroll ? (
        <ScrollView style={styles.container}>
          <CompWrapper />
        </ScrollView>
      ) : (
        <View style={{ height: height - 40 }}>
          <CompWrapper />
        </View>
      )}
    </View>
  );
}

export function Header({ title, onBackButtonPressScreen, addScreen }) {
  const navigation = useNavigation();

  function HeaderIcon() {
    if (onBackButtonPressScreen) {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate(onBackButtonPressScreen)}
        >
          <Text style={{ fontSize: 12, color: colors.lightThemeColor }}>
            Back
          </Text>
        </TouchableOpacity>
      );
    }

    if (addScreen) {
      return (
        <Icons.AddDocument
          // onPress={() => {
          //   dispatch(addInputForm(addScreen[1].form));

          //   navigation.navigate(...addScreen);
          // }}
          onPress={() =>
            navigation.dispatch(
              CommonActions.reset({
                routes: [addScreen],
              })
            )
          }
        />
      );
    }

    return <View />;
  }
  return (
    <View style={styles.header}>
      <View style={customStyles.flex_row_between}>
        <Icons.Menu
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        <Image
          source={require("../assets/images/logo-truck.png")}
          style={{ width: 60, height: 50, marginLeft: 5 }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.headerTitle}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{title}</Text>
      </View>
      <View style={styles.iconContainer}>
        <HeaderIcon />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  noDataContainer: { marginTop: height / 4 },
  noDataText: { fontSize: 18 },
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
    position: "relative",
  },
  compContainer: {
    padding: dimensions.mainHorizontalPadding,
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
  headerTitle: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 16,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    zIndex: -1,
    // backgroundColor: "red",
  },
});
