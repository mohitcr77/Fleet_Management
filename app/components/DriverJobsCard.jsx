import React, { useContext } from "react";
import { View, Alert, StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../constants/colors";
import { scale, width, largeScreen } from "../helpers/scales";
import { driverEndpoints } from "../service/endpoint";
import useApi from "../hooks/useApi";
import { JOBS_STATUS } from "../constants/entity";

export default function DriverJobsCard({ data, showBtn = true }) {
  const id = data.find((i) => i.name === "#Id").value;

  const { request: updateJobStatus } = useApi();

  const handleJobStatus = async (reply) => {
    const requestConfig = {
      endpoint: driverEndpoints.accept_job(id),
      body: { status: reply },
    };
    const resp = await updateJobStatus(requestConfig);
    console.log(resp, "ooooo");
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
            onPress={() => handleJobStatus(JOBS_STATUS.ACCEPTED)}
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
            onPress={() => handleJobStatus(JOBS_STATUS.DECLINE)}
          >
            <Text style={{ color: "black" }}>Decline</Text>
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
