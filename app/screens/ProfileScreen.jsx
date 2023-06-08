import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import ParentContainer from "../components/ParentContainer";
import { width } from "../helpers/scales";
import colors from "../constants/colors";
import useAuth from "../hooks/useAuth";
import Icons from "../components/Icons";
import { DrawerActions } from "@react-navigation/native";

export default function Profile({ navigation }) {
  // return (
  //   <ParentContainer>
  //     <Text> hii</Text>
  //   </ParentContainer>
  // );

  const { auth, setAuth } = useAuth();
  console.log(auth);
  const [image, setImage] = useState(null);

  const pickFromGallery = async () => {
    // try {
    //   let result = await ImagePicker.launchImageLibraryAsync({
    //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //     allowsEditing: isAndroid(),
    //     quality: 0.1,
    //     base64: true,
    //   });
    //   if (!result.cancelled) {
    //     setImage(`data:image/jpeg;base64,${result.base64}`);
    //     try {
    //       const resp = await services.updateProfilePic(
    //         auth.user.toLowerCase(),
    //         { profile_pic: `data:image/jpeg;base64,${result.base64}` },
    //         auth.token
    //       );
    //       if (resp.ok) {
    //         const data = {
    //           ...auth,
    //           profile_pic: resp.data[auth.user.toLowerCase()].profile_pic,
    //         };
    //         setAuth(data);
    //         storage.storeDetails(JSON.stringify(data));
    //       } else {
    //         alert("Something Went Wrong!!");
    //       }
    //     } catch (error) {
    //       console.warn(error);
    //     }
    //   }
    // } catch (e) {
    //   console.error(e);
    // }
  };
  return (
    <View>
      <View style={styles.profileImageBackground}>
        <Icons.Menu
          menuColor="white"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      </View>
      <TouchableOpacity style={styles.imageContainer} onPress={pickFromGallery}>
        <Image
          source={
            auth.profile_pic
              ? { uri: image }
              : require("../assets/images/profile.png")
          }
          style={styles.image}
        />
      </TouchableOpacity>

      <Text style={styles.nameContainer}>{auth.user.name}</Text>
      <View style={styles.textContainer}>
        <Text>{auth.user.name}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text>{auth.user.email}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text> {auth.phone}</Text>
      </View>
      <TouchableOpacity
        onPress={async () => {
          setAuth(null);
        }}
        style={styles.signOutButton}
      >
        <Text style={styles.signOut}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomText: {
    alignSelf: "center",
    marginTop: 20,
    position: "absolute",
    bottom: 50,
  },
  textContainer: {
    width: 312,
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: colors.border,
    height: 60,
    opacity: 0.4,
    justifyContent: "center",
    paddingLeft: 16,
    borderRadius: 8,
  },
  signOut: {
    alignSelf: "center",
    color: colors.white,
    fontSize: 18,
  },
  profileImageBackground: {
    width,
    height: 180,
    backgroundColor: colors.lightThemeColor,
    paddingTop: 60,
    paddingLeft: 20,
  },
  image: { height: 114, width: 114, borderRadius: 57 },
  imageContainer: {
    height: 120,
    width: 120,
    borderRadius: 60,
    // backgroundColor: "red",
    backgroundColor: colors.white,
    alignSelf: "center",
    marginTop: -60,
    justifyContent: "center",
    alignItems: "center",
    ...shadowStyle,
  },

  nameContainer: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
  },
  signOutButton: {
    backgroundColor: colors.red,
    marginTop: 100,
    width: width - 50,
    height: 50,
    borderRadius: 8,
    alignSelf: "center",
    justifyContent: "center",
    ...shadowStyle,
  },
});
const shadowStyle = {
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 2,
  elevation: 5,
};
