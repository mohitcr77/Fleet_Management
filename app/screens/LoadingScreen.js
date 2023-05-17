import React from 'react'
import { Text, View,ActivityIndicator,Image,StyleSheet } from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Loading...</Text>
    <ActivityIndicator size="large" />
  </View>
);
}

export default LoadingScreen

const styles = StyleSheet.create({
  iconImage: {
      height: 100,
      width: 300,
    },
})