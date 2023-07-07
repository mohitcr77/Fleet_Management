import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import ParentContainer from "../components/ParentContainer";
import colors from "../constants/colors";
import { height, width } from "../helpers/scales";
import Icons from "../components/Icons";

import dimensions from "../constants/dimensions";
import useAuth from "../hooks/useAuth";
import { Role } from "../constants/entity";
import screenNames from "../constants/screenNames";

export default function ChatRoom() {
  const { role } = useAuth();
  return (
    <ParentContainer
      onBackButtonPressScreen={
        role === Role.ADMIN ? screenNames.CHAT_LIST_SCREEN : null
      }
    >
      <View
        style={{
          width: dimensions.componentWidth,
          height: height,
        }}
      >
        <Text>ChatRoom</Text>
        <ChatInput />
      </View>
    </ParentContainer>
  );
}

function ChatInput() {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  return (
    <View style={[styles.inputTextContainer, { marginBottom: 10 }]}>
      <View style={styles.textInput}>
        {image ? <Icons.File /> : null}
        <TextInput
          style={{ width: 200 }}
          value={message}
          placeholder="Type Something..."
          onChangeText={(v) => setMessage(v)}
        />
        <Icons.Attachment onPress={() => {}} />
        <Icons.ChatCamera onPress={() => {}} />
        <Pressable style={styles.send} onPress={() => {}}>
          <Icons.Send />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputTextContainer: {
    width: dimensions.componentWidth,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
    position: "absolute",
    bottom: 100,
  },
  textInput: {
    backgroundColor: colors.white,
    height: 60,
    width: width - 20,
    paddingLeft: 10,
    paddingRight: 5,
    borderRadius: 15,
    borderColor: colors.lightBorder,
    borderWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  send: {
    backgroundColor: colors.lightThemeColor,
    height: 40,
    width: 40,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
