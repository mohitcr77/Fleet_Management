import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import { ColorPicker, toHsv } from "react-native-color-picker";
import customStyles from "../constants/styles";

const ColorPickerComponent = (props) => {
  const [pickerVisible, setPickerVisible] = useState(false);
  const [isColor, setColor] = useState("");
  const showColorPicker = () => {
    setPickerVisible(true);
  };

  function closeColorPicker(color) {
    props.onChangeText(color);
    setColor(color);
    setPickerVisible(false);
  }

  return (
    <View>
      <Pressable
        onPress={showColorPicker}
        style={[customStyles.inputBox, styles.box]}
      >
        <Text>{isColor ? isColor : "Select Color"}</Text>
      </Pressable>

       <Modal visible={pickerVisible}>
         <ColorPicker
          onColorSelected={(color) => closeColorPicker(color)}
          style={{ height: 500, outerWidth: 500 }}
        /> 
        <View style={{ alignItems: "center", margin: 40 }}>
          <Text style={{ fontSize: 15 }}>
            (Click the middle circle to confirm)
          </Text>
        </View>
      </Modal> 
    </View>
  );
};

export default ColorPickerComponent;

const styles = StyleSheet.create({
  box:{
    height:40,
    borderRadius: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ededed",
  }
});
