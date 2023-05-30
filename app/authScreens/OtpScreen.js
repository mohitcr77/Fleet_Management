import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OTPTextView from 'react-native-otp-textinput'
import { Button } from '@ui-kitten/components'

const OtpScreen = () => {
  clearText = () => {
    this.otpInput.clear();
}

setText = () => {
    this.otpInput.setValue("1234");
}
  return (
    <View>
      <View>
            <OTPTextView ref={e => (this.otpInput = e)} />
            {/* <Button title="clear" onClick={this.clearText}/> */}
            <Button onClick={() =>clearText()}>Clear</Button>
        </View>
    </View>
  )
}

export default OtpScreen

const styles = StyleSheet.create({})