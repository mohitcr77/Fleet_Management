import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import { useState, useContext } from "react";
import { Card, Text, Input } from "@ui-kitten/components";

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
  const token = useContext(TokenContext);
  const [passwordVisible, setPasswordVisible] = useState(true);

  const addNewId = async () => {
    const data = {
      email: email,
      password: password,
    };
    setIsLoading(true);
    try {
      const res = await service.getApiData(data);
      // console.log(res.data, "res");
      if (res.data) {
        token.setAuth(res.data);
        service.saveData(JSON.stringify(res.data));
      } else {
        alert("Invalid userId or password");
      }
    } catch (error) {
      console.warn(error);
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

  function SignUpOption() {
    return (
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(screenNames.SIGN_UP_SCREEN)}
        >
          <Text style={{ fontWeight: "bold", color: "#001aff" }}>SignUp</Text>
        </TouchableOpacity>
      </View>
    );
  }
};
function AuthLayoutContainer({ children }) {
  return (
    <View style={styles.appContainer}>
      <ImageBackground
        source={require("../../assets/login-design.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.layoutContainer}>{children}</View>
      </ImageBackground>
    </View>
  );
}
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
  appContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
