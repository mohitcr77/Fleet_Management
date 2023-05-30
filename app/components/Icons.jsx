import React from "react";
import {
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
  FontAwesome5,
  EvilIcons,
  FontAwesome,
  Ionicons,
  AntDesign,
  Zocial,
  Entypo,
  Octicons,
  Fontisto,
  SimpleLineIcons,
} from "react-native-vector-icons";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import colors from "../constants/colors";

const EditPencil = (props) => (
  <TouchableOpacity {...props}>
    <MaterialIcons name="edit" size={18} color={props.color} />
  </TouchableOpacity>
);
const Menu = ({ onPress, menuColor = "black" }) => (
  <TouchableOpacity onPress={onPress} style={{ marginRight: 15 }}>
    <Entypo name="menu" size={30} color={menuColor} />
  </TouchableOpacity>
);

const User = ({ image }) => {
  return (
    <>
      {image ? (
        <>
          {/* <Image
            source={{ uri: genImageUrl(image) }}
            style={{
              backgroundColor: "white",
              width: 80,
              height: 80,
              borderRadius: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
                    /> */}
        </>
      ) : (
        <View style={styles.profileContainer}>
          <FontAwesome
            name="user-circle"
            size={80}
            color={colors.lightThemeColor}
          />
        </View>
      )}
    </>
  );
};

export default {
  EditPencil,
  Menu,
  User,
};

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: "white",
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});
