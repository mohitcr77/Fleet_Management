import { View, Text, StyleSheet, Image } from "react-native";
import { Modal } from "@ui-kitten/components";
import React, { useState, useRef } from "react";
import SignatureScreen from "react-native-signature-canvas";

import AppButton from "./AppButton";
import colors from "../constants/colors";
import customStyles from "./../constants/styles";
import dimensions from "../constants/dimensions";
import AppImagePicker from "./AppImagePicker";
import { width } from "../helpers/scales";

export default function PickSignature() {
  const [image, setImage] = useState(null);
  const [showImagePicker, setShowImagePicker] = useState(false);
  const [showSignatureModal, setShowSignatureModal] = useState(false);

  return (
    <View style={[styles.signatureContainer, customStyles.inputBorder]}>
      {/* <Text style={{ color: colors.gray2 }}>Signature</Text> */}
      <View style={customStyles.flex_row_between}>
        <AppButton
          title={"Manually"}
          type="small"
          onPress={() => setShowSignatureModal(true)}
        />
        <AppButton
          title={"Upload"}
          type="small"
          onPress={() => setShowImagePicker(true)}
        />
      </View>
      <View style={[customStyles.inputBox, styles.sign]}>
        {image && (
          <Image
            resizeMode="contain"
            source={{ uri: image }}
            style={{ height: 180 }}
          />
        )}
      </View>
      <Canvas
        showModal={showSignatureModal}
        onDone={() => setShowSignatureModal(false)}
      />
      <AppImagePicker
        isVisible={showImagePicker}
        onDone={(e) => {
          setShowImagePicker(false);
          if (!e) return;

          setImage(`data:image/jpeg;base64,${e.assets[0].base64}`);
        }}
      />
    </View>
  );
  function Canvas({ showModal, onDone }) {
    const sign = useRef();

    const handleOK = (s) => {
      setImage(s);
      onDone();
    };
    return (
      <Modal
        visible={showModal}
        onBackdropPress={onDone}
        backdropStyle={styles.backdrop}
      >
        <View>
          {/* {manually ? ( */}
          <View style={{ height: 350, width: width - 50, alignSelf: "center" }}>
            <SignatureScreen
              ref={sign}
              //   onEnd={() => onDone(null)}
              onOK={handleOK}
            />
          </View>
          {/* ) : (
            <View style={styles.imageContainer}>
              {image !== "" ? (
                <Image
                  resizeMode="contain"
                  source={{ uri: image.length > 500 ? image : image.uri }}
                  style={styles.image}
                />
              ) : null}
            </View>
          )} */}
        </View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  signatureContainer: {
    backgroundColor: "white",
    padding: 5,
  },

  sign: {
    height: 200,
    justifyContent: "center",
  },
});
