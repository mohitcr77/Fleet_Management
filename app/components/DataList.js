import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DataList = (props) => {
  return (
    <View style={{width:150}} >
      <Text style={styles.title} >{props.name}</Text>
      <Text style={styles.text}>{props.value}</Text>
    </View>
  )
}

export default DataList

const styles = StyleSheet.create({

    title:{
        fontSize:15,
        padding:5,
        fontWeight:'bold'
    },
    text:{
        fontSize:12,
        padding:5,
    }
})