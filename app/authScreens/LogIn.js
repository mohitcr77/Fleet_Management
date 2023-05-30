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
import index from "../service/index";
import TokenContext from "../service/context";
import LoadingScreen from "../screens/LoadingScreen";
import { Layout, Text, Input, Icon, IconElement } from "@ui-kitten/components";
import { AuthLayoutContainer } from "./SelectUserType";
import AppButton from "../components/AppButton";
import CustomIcons from "../components/CustomIcons";
import { Entypo } from "@expo/vector-icons";
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
    //setIsLoading(true);
    const res = await index.getApiData(data);
    console.log(res);
    if (res.data) {
      token.setUserToken(res.data);
      index.saveData(JSON.stringify(res.data));
    } else {
      alert("Invalid userId or password");
    }
    //setIsLoading(false);
  };

  //for password toggle visibilty

  const renderIcon = () => (
    <TouchableWithoutFeedback  onPress={() => setPasswordVisible(!passwordVisible)} >
      {/* <CustomIcons.toggleEye show={passwordVisible}  /> */}
      <Entypo name={ passwordVisible? "eye": "eye-with-line"} size={24} color="black" />
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
      {/* <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
      /> */}
      {/* <TextInput
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
      /> */}
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
