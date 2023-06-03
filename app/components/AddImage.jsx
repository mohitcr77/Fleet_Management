import { View, Pressable, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";

import customStyles from "../constants/styles";
import colors from "../constants/colors";
import AppImagePicker from "./AppImagePicker";

export default function AddImage() {
  const [image, setImage] = useState(null);
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <Pressable style={styles.btn} onPress={() => setVisible(true)}>
        <Text>Add</Text>
      </Pressable>
      <View
        style={[
          customStyles.inputBorder,
          { height: 200, justifyContent: "center" },
        ]}
      >
        {image && (
          <Image resizeMode="contain" source={{ uri: image }} height={195} />
        )}
      </View>

      <AppImagePicker
        isVisible={visible}
        onDone={(e) => {
          setVisible(false);
          if (!e) return;

          setImage(`data:image/jpeg;base64,${e.assets[0].base64}`);
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  btn: {
    ...customStyles.inputBorder,
    width: 70,
    height: 30,
    backgroundColor: colors.gray4,
    marginBottom: 10,
    borderColor: "black",
    ...customStyles.center,
  },
});
