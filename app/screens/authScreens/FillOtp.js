import { StyleSheet, View } from "react-native";
import React from "react";
import OTPTextView from "react-native-otp-textinput";
import { Button, Text } from "@ui-kitten/components";
import { useRef, useState, useEffect } from "react";
import service from "../../service";
import screenNames from "../../constants/screenNames";
import LoadingScreen from "../AdminScreens/LoadingScreen";
import useApi from "../../hooks/useApi";
import { authEndpoints } from "../../service/endpoint";

export default function FillOtp({ route, navigation }) {
  const { email } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [timerCount, setTimer] = useState(30);
  const [count, setCount] = useState(0);
  const [otp, setOtp] = useState(0);

  const { request: sendOtp } = useApi(authEndpoints.resend_top);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        lastTimerCount <= 1 && clearInterval(interval);
        return lastTimerCount - 1;
      });
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete
    return () => clearInterval(interval);
  }, [count]);

  let otpInput = useRef(null);

  clearText = () => {
    this.otpInput.clear();
  };

  const resendOtp = async () => {
    setTimer(30);
    setCount(count + 1);
    const data = {
      email: email,
    };
    setIsLoading(true);
    const requestConfig = {
      endpoint: authEndpoints.resend_top,
      body: data,
    };
    const res = await sendOtp(requestConfig);
    if (res.data.success) {
      alert("re-sending OTP successful");
    } else {
      alert("error in re-sending OTP");
    }
    setIsLoading(false);
  };

  const confirmOtp = async () => {
    const data = {
      email: email,
      otp: otp,
    };
    setIsLoading(true);
    const res = await service.verifyOTP(data);
    if (res.data.success) {
      navigation.navigate(screenNames.LOGIN_SCREEN);
      alert("OTP verified");
    } else {
      alert("Invalid OTP");
    }
    setIsLoading(false);
  };

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <LoadingScreen loading={isLoading} />
      <View style={styles.heading}>
        <Text category="h4">Enter the OTP sent to</Text>
        <Text status="info">{email}</Text>
      </View>
      <OTPTextView
        handleTextChange={setOtp}
        inputCount={6}
        on
        ref={(e) => (this.otpInput = e)}
      />
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
      <Button
        style={{ marginTop: 20 }}
        status="success"
        onPress={() => confirmOtp()}
      >
        Confirm OTP
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    flex: 0.3,
    margin: 20,
    alignItems: "center",
  },
});
