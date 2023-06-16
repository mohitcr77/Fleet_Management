import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import React from "react";
import { LineChart, BarChart, PieChart } from "react-native-chart-kit";
import ParentContainer from "../../components/ParentContainer";

const DashBoard = () => {
  return (
    <ParentContainer title="Dashboard">
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#004fe2",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(225, 15, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(225, 15, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ff26a1",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <BarChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#0a40a4",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#f2f2f2",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(15, 125, 252, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(11, 115, 252, ${opacity})`,
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <PieChart
        data={[
          {
            name: "Seoul",
            population: 21500,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "Toronto",
            population: 2800,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "Beijing",
            population: 527,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "New York",
            population: 8538,
            color: "#3357cd",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "Moscow",
            population: 1192,
            color: "rgb(0, 0, 255)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
        ]}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        chartConfig={{
          backgroundColor: "#0a40a4",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#f2f2f2",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(15, 125, 252, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(11, 115, 252, ${opacity})`,
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor={"population"}
        backgroundColor={"#ffffff"}
        paddingLeft={"15"}
        center={[10, 50]}
        absolute
      />
    </ParentContainer>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
});
