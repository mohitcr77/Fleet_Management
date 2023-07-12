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
  <TouchableOpacity onPress={onPress}>
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

const Attachment = (props) => (
  <TouchableOpacity {...props}>
    <Entypo name="attachment" size={20} color={props.color || colors.border2} />
  </TouchableOpacity>
);

const ChatCamera = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ marginHorizontal: 8 }}>
    <AntDesign name="camera" size={23} color={colors.border2} />
  </TouchableOpacity>
);

const File = () => (
  <FontAwesome
    name="file"
    size={20}
    color={colors.border2}
    style={{ marginRight: 10 }}
  />
);

const Information = () => (
  <MaterialCommunityIcons
    name="information-outline"
    size={24}
    color={colors.themeColor}
  />
);

const CheckBox = ({ checked, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ width: 30 }}>
      <Fontisto
        name={checked ? "checkbox-active" : "checkbox-passive"}
        size={24}
        color="black"
      />
    </TouchableOpacity>
  );
};
const Data = () => (
  <Entypo name="database" size={24} color={colors.themeColor} />
);

const Chevron = ({ closed }) => (
  <MaterialIcons
    name={closed ? "keyboard-arrow-down" : "keyboard-arrow-up"}
    size={24}
    color="black"
  />
);

const PdfIcon = () => <MaterialCommunityIcons name="file-pdf-box" size={50} color="#999999" />;

const JpgIcon = () => <MaterialCommunityIcons name="file-jpg-box" size={50} color="#999999" />;

const EyeIcon = () => <Ionicons name="eye-outline" size={27} color="white" />;

const DownloadIcon = () => <AntDesign name="download" size={27} color="white" />

const ToggleEye = (props) => (
  <Entypo name={props.show ? "eye" : "eye-with-line"} size={24} color="black" />
);

const AddDocument = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ alignItems: "center" }}>
    <Ionicons
      name="md-add-circle-outline"
      size={26}
      color={colors.themeColor}
    />
    {/* <Text style={{ fontSize: 10, color: colors.border2 }}>Add Document</Text> */}
  </TouchableOpacity>
);

const PersonLogo = ({ onPress }) => (
  <Ionicons name="person-circle-outline" size={50} color={colors.gray2} />
);

export default {
  PersonLogo,
  AddDocument,
  Chevron,
  Attachment,
  Camera,
  ChatCamera,
  CheckBox,
  Close,
  Data,
  EditPencil,
  File,
  Gallery,
  Information,
  Menu,
  Pencil,
  PlushCircle,
  Send,
  User,
  ToggleEye,
  EyeIcon,
  PdfIcon,
  JpgIcon,
  DownloadIcon,
};

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: "white",
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});
