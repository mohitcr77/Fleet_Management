import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import customStyles from "../constants/styles";
import DateTimePicker from "react-native-modal-datetime-picker";
import { useState } from "react";
import { Input } from "@ui-kitten/components";
import CompWrapper from "./CompWrapper";
import { TimePicker } from "./TimePicker";
import formatDate from "../helpers/formatDate";
import { useEffect } from "react";
import timeToDecimal from "../helpers/timeToDecimal";

const TotalTimeComp = ({ onTimeSelect }) => {
  const [show1, setShow1] = useState(false);
  const [time1, setTime1] = useState("");
  const [show2, setShow2] = useState(false);
  const [time2, setTime2] = useState("");
  const [show3, setShow3] = useState(false);
  const [time3, setTime3] = useState("");
  const [total, setTotal] = useState(true)
  const [totalTime, setTotalTime] = useState("")

  const onChange = (e, t) => {
    setShow1(false);
    setTime1(formatDate(e).hourMinFormat);
    onTimeSelect(formatDate(e).hourMinFormat + ":00");
    setTotal(!total)
  };

  const onChange2 = (e, t) => {
    setShow2(false);
    setTime2(formatDate(e).hourMinFormat);
    onTimeSelect(formatDate(e).hourMinFormat + ":00");
    setTotal(!total)
  };

  const onChange3 = (e, t) => {
    setShow3(false);
    setTime3(formatDate(e).hourMinFormat);
    onTimeSelect(formatDate(e).hourMinFormat + ":00");
    setTotal(!total)
  };

  const totalTimeCalculator = () => {
    var a= timeToDecimal(time1)
    var b= timeToDecimal(time2)
    var c= timeToDecimal(time3)
    setTotalTime((b-a-c).toFixed(2));
  }

  useEffect(() => {
    totalTimeCalculator()
  }, [total])
  

  return (
    <View>
      <CompWrapper name={"Start Time"}>
        <TouchableOpacity
          style={[
            customStyles.inputBox,
            {
              overflow: "hidden",
              justifyContent: "center",
              paddingLeft: 14,
              height: 40,
            },
          ]}
          onPress={() => setShow1(true)}
        >
          <Text style={{ color: "black" }}>{time1}</Text>
          <DateTimePicker
            isVisible={show1}
            onConfirm={onChange}
            onCancel={() => setShow1(false)}
            mode="time"
          />
        </TouchableOpacity>
      </CompWrapper>
      {/* <CompWrapper name={"Break"}>
        <TouchableOpacity
          style={[
            customStyles.inputBox,
            {
              overflow: "hidden",
              justifyContent: "center",
              paddingLeft: 14,
              height: 40,
            },
          ]}
          onPress={() => setShow3(true)}
        >
          <Text style={{ color: "black" }}>{time3}</Text>
          <DateTimePicker
            isVisible={show3}
            onConfirm={onChange3}
            onCancel={() => setShow3(false)}
            mode="time"
          />
        </TouchableOpacity>
      </CompWrapper> */}
      <CompWrapper name={"End Time"}>
        <TouchableOpacity
          style={[
            customStyles.inputBox,
            {
              overflow: "hidden",
              justifyContent: "center",
              paddingLeft: 14,
              height: 40,
            },
          ]}
          onPress={() => setShow2(true)}
        >
          <Text style={{ color: "black" }}>{time2}</Text>
          <DateTimePicker
            isVisible={show2}
            onConfirm={onChange2}
            onCancel={() => setShow2(false)}
            mode="time"
          />
        </TouchableOpacity>
      </CompWrapper>
      <CompWrapper name={"Total"}>
        <Input
          style={{
            backgroundColor: "white",
            borderRadius: 10,
          }}
          keyboardType={"number-pad"}
          placeholder={totalTime}
        />
      </CompWrapper>
    </View>
  );
};

export default TotalTimeComp;

const styles = StyleSheet.create({});
