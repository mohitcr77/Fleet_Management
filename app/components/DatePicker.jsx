import React from "react";
import { StyleSheet, View } from "react-native";
import { Datepicker, Layout, Text } from "@ui-kitten/components";
import dimensions from "../constants/dimensions";
import customStyles from "../constants/styles";

export const DatePicker = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <View style={[customStyles.inputBox, { overflow: "hidden", height: 40 }]}>
      <Layout style={styles.container} level="1">
        <Datepicker
          date={date}
          onSelect={(nextDate) => setDate(nextDate)}
          controlStyle={{ backgroundColor: "white" }}
        />
      </Layout>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: dimensions.componentWidth,
    backgroundColor: "red",
  },
});
