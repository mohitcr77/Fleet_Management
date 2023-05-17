import { StyleSheet, ScrollView, Button , View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react';
import AppInput from '../components/AppInput';
const DashBoard = () => {
  const initialState = {
    job_no: "",
    client_Name: "",
    date: "",
    operator: "",
    start_time: "",
    finish_time:"",
  };

  const form = [
    {
      name: "Job No.",
      key: "job_no",
    },
    {
      name: "Client Name",
      key: "client_Name",
    },
    {
      name: "Date",
      key: "date",
    },
    {
      name: "Start Time",
      key: "start_time",
    },
    {
      name: "Finish Time",
      key: "finish_time",
    },
  ];

  const [state, setState] = useState(initialState);

  return (
    <View style={styles.appContainer}>
    <Text>DashBoard</Text>
  </View>
  )
}

export default DashBoard

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#c0bfbf",
    borderRadius: 6,
  },
  textStyle: {
    fontSize: 15,
    margin: 10,
    fontWeight: "bold",
  },
  appContainer: {
   marginTop: 20,
    marginHorizontal: 16,
  },
  button: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
})