import { StyleSheet, View } from "react-native";
import React from "react";
import OTPTextView from "react-native-otp-textinput";
import { Button, Text } from "@ui-kitten/components";
import { useRef, useState, useEffect } from "react";

const OtpScreen = () => {
  const [timerCount, setTimer] = useState(30);
  const [count, setCount] = useState(0)

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        lastTimerCount <= 1 && clearInterval(interval);
        return lastTimerCount - 1;
      });
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete
    return () => clearInterval(interval)
  }, [count]);

  let otpInput = useRef(null);

  clearText = () => {
    this.otpInput.clear();
  };

  setText = () => {
    this.otpInput.setValue("1234");
  };

  const resendOtp = () => {
    setTimer(30);
    setCount(count+1)
  };

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <OTPTextView ref={(e) => (this.otpInput = e)} />
      {/* <Button title="clear" onClick={this.clearText}/> */}
      <Text style={{ margin: 20 }}>Resend OTP in {timerCount} sec</Text>
      <Button
        disabled={timerCount === 0 ? false : true}
        size="small"
        status="danger"
        style={{ margin: 20 }}
        onPress={() => resendOtp()}
      >
        Resend
      </Button>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({});
