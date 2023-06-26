import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { Card, Modal, Text } from "@ui-kitten/components";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

import { largeScreen, scale, width, height } from "../helpers/scales";
import colors from "../constants/colors";
import Icons from "./Icons";

export default function AppImagePicker({ onDone, isVisible }) {
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
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
