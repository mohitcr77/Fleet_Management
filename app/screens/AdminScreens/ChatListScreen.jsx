import React from "react";
import { Divider, List, ListItem, Tab, TabView } from "@ui-kitten/components";

import ParentContainer, { Header } from "../../components/ParentContainer";
import { height, width } from "../../helpers/scales";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../../constants/colors";
import Icons from "../../components/Icons";
import screenNames from "../../constants/screenNames";
import StaffNavigator from "../../routes/StaffNavigator";

function ChatList() {
  const navigation = useNavigation();

  return (
    <>
      <Header title={"Staffs"} />
      <StaffNavigator />
    </>
  );
}

export default ChatList;
