import { StyleSheet, Modal, View, Text } from "react-native";
import React, { useState } from "react";
import { CardForm, useStripe } from "@stripe/stripe-react-native";

import customStyles from "./../constants/styles";
import colors from "../constants/colors";
import AppButton from "./AppButton";
import dimensions from "../constants/dimensions";
import useAuth from "../hooks/useAuth";
import SignOutBtn from "./SignOutBtn";

const cardHeight = { height: 300 };

export default function Payment() {
  const { confirmPayment } = useStripe();

  const { subscribed, setAuth } = useAuth();

  return (
    <Modal
      visible={!subscribed}
      onRequestClose={() => setAuth({ key: "subscribed", data: true })}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Your subscription has expired !!</Text>
        <Text style={[styles.heading, { fontSize: 14, marginTop: 30 }]}>
          Make payment to continue
        </Text>
        <View style={styles.form}>
          <CardForm style={cardHeight} />
        </View>
        <AppButton
          title={"Buy"}
          style={{ backgroundColor: colors.blue }}
          onPress={() => setAuth({ key: "subscribed", data: true })}
        />
        <SignOutBtn
          onPress={() => setAuth({ key: "subscribed", data: true })}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: dimensions.mainHorizontalPadding,
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginVertical: 15,
    backgroundColor: "red",
    ...customStyles.inputBox,
    padding: 5,
    ...cardHeight,
  },
  heading: {
    fontSize: 35,
    fontWeight: "bold",
    color: colors.red,
    textAlign: "center",
  },
});
