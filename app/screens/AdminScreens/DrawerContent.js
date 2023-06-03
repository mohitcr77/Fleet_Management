import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { useContext, useState } from "react";
import index from "../../service/index";
import TokenContext from "../../service/context";

const Item = ({ title, icon, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Image style={styles.iconImage} source={icon} />
    <Text style={[styles.title, { color: textColor }]}>{title}</Text>
  </TouchableOpacity>
);

const listArray = [
  { icon: require("../../assets/speedometer_icon.png"), title: "Dashboard" },
  { icon: require("../../assets/open_lock.png"), title: "User Permissions" },
  { icon: require("../../assets/reports_icon.png"), title: "User Roles" },
  { icon: require("../../assets/user.png"), title: "Users" },
  { icon: require("../../assets/truck_icon.png"), title: "Regos" },
  { icon: require("../../assets/car.png"), title: "Drivers" },
  { icon: require("../../assets/car.png"), title: "Mechanic" },
  {
    icon: require("../../assets/maintenance.png"),
    title: "Vehicle Maintenance",
  },
  { icon: require("../../assets/user.png"), title: "Staff" },
  { icon: require("../../assets/speedometer_icon.png"), title: "Fuel Log" },
  { icon: require("../../assets/chat_icon.png"), title: "Chat" },
  { icon: require("../../assets/message_icon.png"), title: "SMS" },
  {
    icon: require("../../assets/speedometer_icon.png"),
    title: "Fuel Efficiency",
  },
  { icon: require("../../assets/reports_icon.png"), title: "JobEntry" },
  { icon: require("../../assets/user.png"), title: "Client" },
  { icon: require("../../assets/reports_icon.png"), title: "Report Issue" },
  {
    icon: require("../../assets/timesheet_icon.png"),
    title: "Mechanic Timesheet",
  },
  { icon: require("../../assets/sales.png"), title: "Estimate" },
  { icon: require("../../assets/tax.png"), title: "Tax" },
  { icon: require("../../assets/reports_icon.png"), title: "Company Info" },
  { icon: require("../../assets/paint_bucket.png"), title: "Job Color" },
  { icon: require("../../assets/currency.png"), title: "Currencies" },
  { icon: require("../../assets/time-zone.png"), title: "Timezones" },
];

const DrawerContent = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);
  const token = useContext(TokenContext);

  const logoutHandler = () => {
    index.deleteData();
    token.setAuth(null);
  };

  const renderItem = ({ item }) => {
    const backgroundColor = item.title === selectedId ? "#808080" : "white";
    const color = item.title === selectedId ? "white" : "black";
    function switchScreen() {
      navigation.navigate(item.title);
      setSelectedId(item.title);
    }
    return (
      <Item
        backgroundColor={backgroundColor}
        textColor={color}
        onPress={switchScreen}
        title={item.title}
        icon={item.icon}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/profile.png")}
        />
        <Text
          style={{
            color: "#000000",
            fontWeight: "bold",
            marginTop: 25,
            fontSize: 15,
          }}
        >
          {token.userToken.user.name}
        </Text>
        <View style={styles.topIcons}>
          <View style={styles.topIconsBorder}>
            <Image
              style={styles.iconImage}
              source={require("../../assets/settings_icon.png")}
            />
          </View>
          <View style={styles.topIconsBorder}>
            <Image
              style={styles.iconImage}
              source={require("../../assets/mail_icon.png")}
            />
          </View>
          <View style={styles.topIconsBorder}>
            <Image
              style={styles.iconImage}
              source={require("../../assets/key_icon.png")}
            />
          </View>
          <View style={styles.topIconsBorder}>
            <Pressable onPress={() => logoutHandler()}>
              <Image
                style={styles.iconImage}
                source={require("../../assets/power_icon.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 0.7,
          borderBottomWidth: 1,
          borderBottomColor: "#000000",
        }}
      >
        <FlatList
          data={listArray}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
        />
      </View>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  topContainer: {
    flex: 0.3,
    paddingTop: 50,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    backgroundColor: "#ffffff",
    borderBottomEndRadius: 5,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 8,
    flexDirection: "row",
    borderRadius: 6,
  },
  title: {
    fontSize: 18,
    color: "#000000",
    marginLeft: 10,
  },
  iconImage: {
    height: 25,
    width: 25,
  },
  topIcons: {
    flexDirection: "row",
    marginTop: 10,
    alignContent: "flex-end",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
  topIconsBorder: {
    borderWidth: 1,
    padding: 6,
    borderRadius: 6,
    borderColor: "#000000",
  },
});
