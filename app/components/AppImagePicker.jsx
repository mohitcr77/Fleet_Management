import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { Card, Modal, Text } from "@ui-kitten/components";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { StorageAccessFramework } from "expo-file-system";
import * as DocumentPicker from "expo-document-picker";

import Icons from "./Icons";
import dataType from "../constants/dataType";

export default function AppImagePicker({ onDone, isVisible, type, ...props }) {
  console.log(type, "oooo");
  const gallery = async () => {
    const getPerm = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (!getPerm.granted) {
      const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!perm.granted) return;
    }

    try {
      let r = await DocumentPicker.getDocumentAsync({
        type: type == dataType.image ? "image/*" : ["image/*", "application/*"],
        copyToCacheDirectory: true,
      });
      const x = r.uri.replace("/", "");
      console.log(x);
      try {
        const base64 = await FileSystem.readAsStringAsync(x, {
          encoding: "base64",
        });
        console.log(base64, "llll");
      } catch (error) {
        console.warn(error);
      }
      // result.base64 = base64;

      // if (!result.canceled) {
      //   onDone(result);
      // }
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
