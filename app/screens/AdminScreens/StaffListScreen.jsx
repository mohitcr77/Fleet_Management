import { Divider, List, ListItem } from "@ui-kitten/components";
import { StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import React from "react";

import colors from "../../constants/colors";
import formatDate from "../../helpers/formatDate";
import Icons from "../../components/Icons";
import screenNames from "../../constants/screenNames";

export default function StaffsList({ route }) {
  let list = useSelector((state) => state.dropDownData);
  const { listName } = route.params;
  const navigation = useNavigation();

  const renderItem = ({ item, index }) => (
    <ListItem
      onPress={() => navigation.navigate(screenNames.CHAT_ROOM_SCREEN)}
      style={{ height: 70 }}
      title={`${item.label} ${index + 1}`}
      description={`${item.user.email} ${index + 1}`}
      accessoryLeft={<Icons.PersonLogo />}
      accessoryRight={() => (
        <Text style={styles.time}>{formatDate(item.created_at).y_m_d}</Text>
      )}
    />
  );

  return (
    <List
      style={styles.container}
      data={list[listName]}
      renderItem={renderItem}
      ItemSeparatorComponent={<Divider />}
    />
  );
}

const styles = StyleSheet.create({
  time: {
    color: colors.gray2,
    fontSize: 12,
  },
});
