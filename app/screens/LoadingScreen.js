import React from "react";
import { Text, View, ActivityIndicator, Modal } from "react-native";

const LoadingScreen = ({ loading }) => {
  return (
    <Modal visible={loading} transparent={true}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255,255,255,.5)",
        }}
      >
        <Text>Loading...</Text>
        <ActivityIndicator size="large" />
      </View>
    </Modal>
  );
};

export default LoadingScreen;
