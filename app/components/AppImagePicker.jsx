import React, { useState, useRef, useContext, useEffect } from "react";
import { View, ScrollView, StyleSheet, Pressable, Image } from "react-native";
import { Button, Card, Modal, Text } from "@ui-kitten/components";

import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
// import { ImageEditor } from "expo-image-editor";
import * as FileSystem from "expo-file-system";

import { largeScreen, scale, width, height } from "../helpers/scales";

import colors from "../constants/colors";
import AppButton from "./AppButton";
import Icons from "./Icons";
import customStyles from "../constants/styles";
import dimensions from "../constants/dimensions";
// import AuthContext from "../auth/context";
// import Icons from "../component/Icons";
// import isAndroid from "../helpers/platform";
// import googleServices from "../services/googleServices";
// import DocumentScanner from "react-native-document-scanner-plugin";

export default function AppImagePicker({
  type = "image",
  pickerOption,
  setPickerOption,
  onDone,
  isVisible,
}) {
  const gallery = async () => {
    const getPerm = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (!getPerm.granted) {
      const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!perm.granted) return;
    }
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 0.1,
        base64: true,
      });
      const base64 = await FileSystem.readAsStringAsync(result.assets[0].uri, {
        encoding: "base64",
      });
      result.base64 = base64;

      if (!result.canceled) {
        onDone(result);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const capture = async () => {
    const getPerm = await ImagePicker.getCameraPermissionsAsync();
    if (!getPerm.granted) {
      const perm = await ImagePicker.requestCameraPermissionsAsync();
      if (!perm.granted) return;
    }

    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 0.1,
        base64: true,
      });

      if (!result.canceled) {
        onDone(result);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Modal
      visible={isVisible}
      backdropStyle={styles.backdrop}
      onBackdropPress={() => onDone(null)}
    >
      <Card disabled={true} style={{ width: 200, alignItems: "center" }}>
        <Pressable onPress={capture}>
          <Icons.Camera />
          <Text style={{ textAlign: "center" }}>Camera</Text>
        </Pressable>
        <Pressable style={{ marginTop: 20 }} onPress={gallery}>
          <Icons.Gallery />
          <Text style={{ textAlign: "center" }}>Gallery</Text>
        </Pressable>
      </Card>
    </Modal>
  );

  // const sign = useRef();

  // const { auth, refresh, setRefresh, setAuth } = useContext(AuthContext);
  // const [image, setImage] = useState("");
  // const [mode, setMode] = useState("date");
  // const [show, setShow] = useState(false);
  // const [showEditor, setShowEditor] = useState(false);

  // return (
  //   <View key={refresh}>
  //     <ScrollView style={styles.container}>
  //       <BottomSheet
  //         isVisible={pickerOption}
  //         containerStyle={{ backgroundColor: "rgba(0.5, 0.25, 0, 0.2)" }}
  //       >
  //         <View
  //           style={{
  //             width: "100%",
  //             height: 200,
  //             backgroundColor: colors.white,
  //             alignItems: "center",
  //           }}
  //         >
  //           <View
  //             style={{
  //               flexDirection: "row",
  //               width: width,
  //               justifyContent: "space-around",
  //               paddingVertical: 20,
  //             }}
  //           >
  //             {type == "all" && (
  //               <TouchableOpacity
  //                 style={{
  //                   alignItems: "center",
  //                   padding: 10,
  //                   // backgroundColor: "red",
  //                 }}
  //                 onPress={() => galleryPermission("file")}
  //               >
  //                 <Icons.FileIcon />
  //                 <AppText>File</AppText>
  //               </TouchableOpacity>
  //             )}
  //             <TouchableOpacity
  //               style={{
  //                 alignItems: "center",
  //                 // backgroundColor: "green"
  //               }}
  //               onPress={() => galleryPermission("image")}
  //             >
  //               <Icons.Gallery />
  //               <AppText>Gallery</AppText>
  //             </TouchableOpacity>
  //             <TouchableOpacity
  //               style={{ alignItems: "center" }}
  //               onPress={capturePermission}
  //             >
  //               <Icons.Camera />
  //               <AppText>Camera</AppText>
  //             </TouchableOpacity>
  //           </View>
  //           <TouchableOpacity
  //             style={styles.crossContainer}
  //             onPress={() => setPickerOption(false)}
  //           >
  //             <Icons.Cross />
  //           </TouchableOpacity>
  //         </View>
  //       </BottomSheet>
  //     </ScrollView>
  //     {image?.type === "image" || image?.mimeType?.includes("image") ? (
  //       <ImageEditor
  //         visible={showEditor}
  //         onCloseEditor={() => setShowEditor(false)}
  //         imageUri={image.uri}
  //         fixedCropAspectRatio={16 / 9}
  //         // lockAspectRatio={aspectLock}
  //         minimumCropDimensions={{
  //           width: 100,
  //           height: 100,
  //         }}
  //         onEditingComplete={async (result) => {
  //           if (image.height === result.height && image.width === result.width)
  //             return;
  //           const base64 = await FileSystem.readAsStringAsync(result.uri, {
  //             encoding: "base64",
  //           });
  //           onDone({ ...image, ...result, base64, mimeType: "image/jpg" });
  //           setImage({ ...image, ...result, base64 });
  //           // setImageData(result);
  //         }}
  //         mode="full"
  //       />
  //     ) : null}
  //   </View>
  // );
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  crossIconContainer: {
    height: 50,
    width: 50,
    position: "absolute",
    right: 10,
    top: 10,
    // justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    alignSelf: "flex-end",
  },
  signatureButtonContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
    paddingHorizontal: 100,
  },
  btn: {
    height: 50,
    width: scale(172),
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 30,
  },
  adaptiveScreen: {
    flexDirection: largeScreen() ? "row" : "column",
    alignItems: "center",
    width: width - scale(50),
    justifyContent: "space-between",
  },
  container: {
    backgroundColor: colors.white,
    width: width,
  },
  customerSignContainer: { width: scale(338) },
  dataContainer: {
    paddingTop: 15,
    width: width - 30,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignSelf: "center",
  },
  header: {
    width: width,
    paddingLeft: scale(25),
    height: 106,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    backgroundColor: colors.white,
    elevation: 5,
    justifyContent: "flex-end",
    paddingBottom: 17,
  },
  noteContainer: {
    width: scale(338),
    // height: 140,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 15,
    padding: 15,
  },
  switchContainer: {
    width: scale(320),
    marginVertical: 15,
    height: 60,
  },
  customerSignBox: {
    width: scale(336),
    height: 200,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.border,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    paddingVertical: 50,
    paddingHorizontal: 30,
    width: width - 50,
    alignItems: "center",
    alignSelf: "center",
  },
  image: {
    minHeight: 200,
    minWidth: 200,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.border2,
    padding: 20,
    alignSelf: "center",
  },
  input: { width: width - 50 },
  dropDownTextInput: {
    width: scale(338),
    height: 45,
    paddingLeft: 10,
    marginTop: 20,
    borderRadius: 4,
    borderColor: "#C5C5C5",
    borderWidth: 1,
    alignSelf: "center",
    paddingTop: 12,
  },
  dropdownList: {
    // height: 200,
  },
  dropdownContainer: {
    width: scale(338),
    marginTop: 15,
    zIndex: 6,
  },
  searchResult: {
    zIndex: 100,
    paddingLeft: 15,
    paddingVertical: 10,
    width: scale(280),
  },
  modalContainer: {
    height: 200,
    width: width - 50,
    paddingTop: 20,
    alignItems: "center",
    height,
  },
  materialDKTInput: {
    width: scale(308),
    height: 45,
    // backgroundColor: "red",
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 5,
    paddingHorizontal: 5,
  },
  docketDetailsInput: {
    height: 140,
    width: scale(308),
    // height: 140,
    // backgroundColor: "red",
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 5,
    padding: 5,
  },
  checkBoxContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    alignItems: "flex-start",
  },
});
