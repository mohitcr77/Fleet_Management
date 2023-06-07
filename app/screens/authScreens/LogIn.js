import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
//import { TextInput } from "react-native-paper";
import { useState, useContext } from "react";
import { Card, Text, Input } from "@ui-kitten/components";

import { AuthLayoutContainer } from "./SelectUserType";
import { Entypo } from "@expo/vector-icons";
import AppButton from "../../components/AppButton";
import dimensions from "../../constants/dimensions";
import LoadingScreen from "../AdminScreens/LoadingScreen";
import service from "../../service";
import TokenContext from "../../service/context";
import customStyles from "../../constants/styles";
import colors from "../../constants/colors";
import screenNames from "../../constants/screenNames";

const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState(0);
  const token = useContext(TokenContext);
  const [passwordVisible, setPasswordVisible] = useState(true);

  const addNewId = async () => {
    const data = {
      email: email,
      password: password,
    };
    setIsLoading(true);
    const res = await service.getApiData(data);
    if (res.data) {
      token.setAuth(res.data);
      service.saveData(JSON.stringify(res.data));
    } else {
      alert("Invalid userId or password");
    }
    setIsLoading(false);
  };

  //for password toggle visibilty

  const renderIcon = () => (
    <TouchableWithoutFeedback
      onPress={() => setPasswordVisible(!passwordVisible)}
    >
      {/* <CustomIcons.toggleEye show={passwordVisible}  /> */}
      <Entypo
        name={passwordVisible ? "eye" : "eye-with-line"}
        size={24}
        color="black"
      />
    </TouchableWithoutFeedback>
  );

  return (
    <AuthLayoutContainer>
      <LoadingScreen loading={isLoading} />
      {/* <Roles /> */}
      <Input style={styles.input} placeholder="Email" onChangeText={setEmail} />
      <Input
        style={styles.input}
        placeholder="Password"
        accessoryRight={renderIcon}
        secureTextEntry={passwordVisible}
        onChangeText={setPassword}
      />

      <AppButton
        title="Login"
        onPress={() => addNewId()}
        // loading={isLoading}
      />
      <SignUpOption />
    </AuthLayoutContainer>
  );

  function Roles(params) {
    const btn = [
      { role: "Admin", cardType: "danger" },
      { role: "Driver", cardType: "success" },
      { role: "Mechanic", cardType: "warning" },
    ];
    return (
      <View style={styles.roleContainer}>
        {btn.map((i, index) => (
          <Card
            key={i.role}
            onPress={() => setRole(index)}
            style={{
              backgroundColor: role === index ? colors.green1 : null,
            }}
            status={i.cardType}
          >
            <Text
              style={{
                color: role === index ? "white" : null,
              }}
            >
              {i.role}
            </Text>
          </Card>
        ))}
      </View>
    );
  }

  function SignUpOption() {
    return (
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(screenNames.SIGN_UP_SCREEN)}>
          <Text style={{ fontWeight: "bold", color: "#001aff" }}>SignUp</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default LogIn;

const styles = StyleSheet.create({
  roleContainer: {
    width: dimensions.componentWidth,
    height: 60,
    ...customStyles.flex_row_between,
  },
  input: {
    height: 40,
    marginVertical: 25,
    marginHorizontal: 10,
    borderColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    fontSize: 18,
    backgroundColor: "#ffffff",
  },
  btnStyle: {
    marginTop: 15,
    marginBottom: 20,
  },
  text: {
    marginHorizontal: 20,
  },
  layoutContainer: {
    marginTop: 200,
  },
  icon: {
    width: 32,
    height: 32,
  },
});
