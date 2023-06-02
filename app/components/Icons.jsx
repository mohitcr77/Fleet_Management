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

const PlushCircle = ({ onPress }) => (
  <TouchableOpacity style={{ marginVertical: 10 }} onPress={onPress}>
    <Octicons name="plus-circle" size={40} color={colors.gray2} />
  </TouchableOpacity>
);

const Close = ({ onPress }) => (
  <TouchableOpacity
    style={{ margin: 3, marginRight: 10, alignSelf: "flex-end" }}
    onPress={onPress}
  >
    <AntDesign name="closecircle" size={24} color={colors.gray2} />
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

const Gallery = ({ size = 70, color = colors.blue2 }) => (
  <MaterialIcons name="photo" size={size} color={color} />
);

const Camera = ({ size = 70, color = colors.blue2 }) => (
  <AntDesign name="camera" size={size} color={color} />
);

const Send = ({ size = 16 }) => (
  <FontAwesome name="send" size={size} color={colors.white} />
);

const Pencil = () => <MaterialIcons name="edit" size={24} color={"white"} />;

export default {
  Camera,
  Gallery,
  Close,
  PlushCircle,
  EditPencil,
  Menu,
  User,
  Send,
  Pencil,
};

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: "white",
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});
