import React from 'react'
import { Text, View,ActivityIndicator,Image,StyleSheet } from 'react-native';

const StartupScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Text>Loading...</Text> */}
        <Image
                  style={styles.iconImage}
                  source={require("../assets/atranz_logo.png")}
                />
        <ActivityIndicator size="large" />
      </View>
    );
    }

export default StartupScreen

const styles = StyleSheet.create({
    iconImage: {
        height: 100,
        width: 300,
      },
  })