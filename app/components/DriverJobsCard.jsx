import React, { useContext } from "react";
import { View, Alert, StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../constants/colors";
import { scale, width, largeScreen } from "../helpers/scales";

export default function DriverJobsCard({ data, showBtn = true }) {
  const jobAccept = "yes";
  const jobReject = "no";

  const handleJobStatus = async (acceptance) => {
    // try {
    //   const resp = await services.driverJobAcceptance(
    //     data.id,
    //     { acceptance },
    //     auth.token
    //   );
    //   setRefresh(!refresh);
    //   if (resp.ok) {
    //     Alert.alert("", "Status Updated Successfully", [
    //       {
    //         text: "Ok",
    //         onPress: () =>
    //           navigation.navigate(
    //             screenNames.fullDktForm,
    //             acceptance === jobAccept ? data : null
    //           ),
    //       },
    //     ]);
    //   } else alert("Something Went Wrong");
    // } catch (error) {
    //   console.warn(error);
    // }
  };

  return (
    <View style={styles.card}>
      <View
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          padding: 5,
        }}
      >
        {data.map((item, index) => (
          <Text style={styles.text} key={index}>
            <Text style={{ fontWeight: "bold" }}>{item.name}: </Text>
            {item.value}
          </Text>
        ))}
      </View>

      {showBtn && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleJobStatus(jobAccept)}
          >
            <Text>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: colors.notDoneRed,
              },
            ]}
            onPress={() => handleJobStatus(jobReject)}
          >
            <Text style={{ color: "black" }}>Reject</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    // marginVertical: 30,
    height: 32,
    width: 98,
    borderColor: colors.border2,
    backgroundColor: colors.doneGreen,
    borderRadius: 4,
  },
  buttonContainer: {
    width: width - 50,
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginVertical: 15,
  },
  header: {
    width: width,
    paddingLeft: scale(25),
    height: 106,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: colors.white,
    justifyContent: "flex-end",
    paddingBottom: 17,
  },
  card: {
    width: width - 50,
    elevation: 5,
    borderRadius: 8,
    marginVertical: 10,
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: colors.white,
  },
  adaptiveScreen: {
    flexDirection: largeScreen() ? "column" : "row",
  },
  subheading: {
    fontSize: 10,
    marginTop: 4,
    marginBottom: 15,
    width: !largeScreen() ? width / 2 - 25 : null,
    paddingRight: !largeScreen() ? 20 : null,
    textAlign: !largeScreen() ? "right" : null,
  },
  detailsContainer: {
    // width: width / 2 - 25,
    marginTop: 20,
    flexDirection: "row",
    paddingLeft: 20,
  },
  text: {
    paddingLeft: 8,
    color: colors.themeColor,
    width: width / 2 - 30,
    // width: 70,
    marginVertical: 2,
    // backgroundColor: "green",
  },
});
