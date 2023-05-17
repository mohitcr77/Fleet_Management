import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={{marginHorizontal: 50 }}>
        <Image
              style={styles.iconImage}
              source={require("../assets/atranz_logo.png")}
            />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    iconImage: {
        height: 50,
        width: 150,
      },
})