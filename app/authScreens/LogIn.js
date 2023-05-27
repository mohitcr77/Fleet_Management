import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { TextInput } from "react-native-paper";
import { useState, useEffect, useContext } from "react";
import index from "../service/index";
import TokenContext from "../service/context";
import LoadingScreen from "../screens/LoadingScreen";
import dimensions from "../constatnts/dimensions";
import { Layout, Text } from "@ui-kitten/components";
import { AuthLayoutContainer } from "./SelectUserType";
import AppButton from "../components/AppButton";

const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const token = useContext(TokenContext);
  const [passwordVisible, setPasswordVisible] = useState(true);

  // const getLoadingScreen = async () => {
  //   setIsLoading(true);
  //   const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  //   try {
  //     await sleep(2000);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  //verifying the entered email,password and saving it in expo store
  const addNewId = async () => {
    const data = {
      email: email,
      password: password,
    };
    setIsLoading(true);
    const res = await index.getApiData(data);
    //console.log(res);
    if (res.data) {
      token.setUserToken(res.data);
      index.saveData(JSON.stringify(res.data));
    } else {
      alert("Invalid userId or password");
    }
    setIsLoading(false);
  };

  return (
    <AuthLayoutContainer>
      <LoadingScreen loading={isLoading} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={passwordVisible}
        right={
          <TextInput.Icon
            icon={passwordVisible ? "eye" : "eye-off"}
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
        }
      />
      <AppButton
        title="Login"
        onPress={getLoadingScreen}
        // loading={isLoading}
      />
      <SignUpOption />
    </AuthLayoutContainer>
  );
  function SignUpOption() {
    return (
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={{ fontWeight: "bold", color: "#001aff" }}>SignUp</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default LogIn;

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginVertical: 25,
    marginHorizontal: 20,
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
});
