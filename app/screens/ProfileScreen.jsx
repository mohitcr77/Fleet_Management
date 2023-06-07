import React from "react";
import { StyleSheet, Text } from "react-native";

import ParentContainer from "../components/ParentContainer";
import { width } from "../helpers/scales";
import colors from "../constants/colors";

export default function Profile({ route }) {
  return (
    <ParentContainer>
      <Text> hii</Text>
    </ParentContainer>
  );

  // const { auth, setAuth } = useContext(AuthContext);
  // const [image, setImage] = useState(genImageUrl(auth.profile_pic));

  // const pickFromGallery = async () => {
  //   try {
  //     let result = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //       allowsEditing: isAndroid(),
  //       quality: 0.1,
  //       base64: true,
  //     });

  //     if (!result.cancelled) {
  //       setImage(`data:image/jpeg;base64,${result.base64}`);
  //       try {
  //         const resp = await services.updateProfilePic(
  //           auth.user.toLowerCase(),
  //           { profile_pic: `data:image/jpeg;base64,${result.base64}` },
  //           auth.token
  //         );
  //         if (resp.ok) {
  //           const data = {
  //             ...auth,
  //             profile_pic: resp.data[auth.user.toLowerCase()].profile_pic,
  //           };
  //           setAuth(data);
  //           storage.storeDetails(JSON.stringify(data));
  //         } else {
  //           alert("Something Went Wrong!!");
  //         }
  //       } catch (error) {
  //         console.warn(error);
  //       }
  //     }
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };
  // return (
  //   <ParentContainer
  //     title="Profile"
  //     color={colors.lightThemeColor}
  //     textColor={colors.white}
  //   >
  //     <View style={styles.profileImageBackground}></View>
  //     <TouchableOpacity style={styles.imageContainer} onPress={pickFromGallery}>
  //       <Image
  //         source={
  //           auth.profile_pic
  //             ? { uri: image }
  //             : require("../../assets/images/profile.png")
  //         }
  //         style={styles.image}
  //       />
  //     </TouchableOpacity>

  //     <AppText style={styles.nameContainer}>{auth.name}</AppText>
  //     <View style={styles.textContainer}>
  //       <AppText>{auth.name}</AppText>
  //     </View>
  //     <View style={styles.textContainer}>
  //       <AppText>{auth.email}</AppText>
  //     </View>
  //     <View style={styles.textContainer}>
  //       <AppText> {auth.phone}</AppText>
  //     </View>
  //     <TouchableOpacity
  //       onPress={async () => {
  //         storage.deleteDetails();
  //         setAuth(null);
  //       }}
  //       style={styles.signOutButton}
  //     >
  //       <AppText style={styles.signOut}>Sign Out</AppText>
  //     </TouchableOpacity>
  //   </ParentContainer>
  // );
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
    height: 100,
    backgroundColor: colors.lightThemeColor,
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
