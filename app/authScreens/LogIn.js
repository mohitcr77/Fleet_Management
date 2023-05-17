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

const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const token = useContext(TokenContext);
  const [passwordVisible, setPasswordVisible] = useState(true);

  const getLoadingSreen = async () => {
    setIsLoading(true);
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    try {
      await sleep(2000);
    } finally {
      setIsLoading(false);
    }
  };
  //verifying the entered email,password and saving it in expo store
  const addNewid = async () => {
    const data = {
      email: email,
      password: password,
    };
    const res = await index.getApiData(data);
    getLoadingSreen();
    //console.log(res);
    if (res.data) {
      token.setUserToken(res.data);
      index.saveData(JSON.stringify(res.data));
    } else {
      alert("Invalid userId or passowrd");
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.appContainer}>
      <ImageBackground
        source={require("../assets/login-design.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Image
          style={styles.iconImage}
          source={require("../assets/truck-icon.jpg")}
        />
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
        <View style={styles.btnStyle}>
          <TouchableOpacity onPress={() => addNewid()} style={styles.button}>
            <Text style={{ fontSize: 20, color: "white" }}>Log in</Text>
          </TouchableOpacity>
          {/* <Button title="login" onPress={() => addNewid()} /> */}
        </View>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={{ fontWeight: "bold", color: "#001aff" }}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  heading: {
    marginTop: 20,
    fontSize: 30,
    fontFamily: "",
    borderRadius: 10,
    marginHorizontal: 20,
    padding: 10,
    fontWeight: "bold",
  },
  appContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    height: 40,
    marginVertical: 25,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    fontSize: 18,
    backgroundColor: "#ffffff",
  },
  textStyle: {
    fontSize: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  btnStyle: {
    marginTop: 15,
    marginBottom: 20,
  },
  button: {
    padding: 5,
    shadowOpacity: 5,
    height: 45,
    backgroundColor: "#0f255eff",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 20,
    width: dimensions.componentWidth - 20,
  },
  text: {
    marginHorizontal: 20,
  },
  iconImage: {
    height: 200,
    width: 300,
    alignSelf: "center",
    //marginTop: -120,
    marginBottom: 90,
  },
});
