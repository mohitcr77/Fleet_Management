import {
  View,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { TextInput } from "react-native-paper";
import { useState, useEffect, useContext, useRef } from "react";
import index from "../service/index";
import TokenContext from "../service/context";
import LoadingScreen from "../screens/AdminScreens/LoadingScreen";
import dimensions from "../constants/dimensions";
import { Animated, Easing } from "react-native";
import OtpScreen from "./OtpScreen";
const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const token = useContext(TokenContext);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const animationProgress = useRef(new Animated.Value(0));

  //lottie animation
  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  const signupForm = [
    {
      placeholder: "Company Name",
      hidden: false,
    },
    {
      placeholder: "Company Domain",
      hidden: false,
    },
    {
      placeholder: "Office Email",
      hidden: false,
    },
    {
      placeholder: "Name",
      hidden: false,
    },
    {
      placeholder: "Email",
      hidden: false,
    },
    {
      placeholder: "Password",
      hidden: true,
    },
    {
      placeholder: "Retype Password",
      hidden: true,
    },
  ];

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
    if (res.data) {
      token.setAuth(res.data);
      index.saveData(JSON.stringify(res.data));
    } else {
      alert("Invalid userId or passowrd");
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <OtpScreen />
    // <View style={styles.appContainer}>
    //   <LottieView
    //     style={{
    //       width: 250,
    //       backgroundColor: "#ffffff00",
    //       alignSelf: "center",
    //     }}
    //     progress={animationProgress.current}
    //     source={require("../assets/signup-truck.json")}
    //   />
    //   <View style={{ alignItems: "center" }}>
    //     <Text style={{ fontSize: 20, fontWeight: "bold" }}>SignUp</Text>
    //   </View>
    //   <View style={styles.layoutContainer}>
    //     <ScrollView>
    //       {signupForm.map((item, index) => (
    //         <TextInput
    //           placeholder={item.placeholder}
    //           secureTextEntry={item.hidden && passwordVisible}
    //           style={styles.input}
    //           right={
    //             item.hidden && (
    //               <TextInput.Icon
    //                 icon={passwordVisible ? "eye" : "eye-off"}
    //                 onPress={() => setPasswordVisible(!passwordVisible)}
    //               />
    //             )
    //           }
    //         />
    //       ))}
    //       <View style={styles.btnStyle}>
    //         <TouchableOpacity onPress={() => addNewid()} style={styles.button}>
    //           <Text style={{ fontSize: 20, color: "white" }}>SignUp</Text>
    //         </TouchableOpacity>
    //         {/* <Button title="login" onPress={() => addNewid()} /> */}
    //       </View>
    //       <View style={{ flexDirection: "row", alignSelf: "center" }}>
    //         <Text>Already have an account?</Text>
    //         <TouchableOpacity onPress={() => navigation.navigate("Login")}>
    //           <Text style={{ fontWeight: "bold", color: "#001aff" }}>
    //             LogIn
    //           </Text>
    //         </TouchableOpacity>
    //       </View>
    //     </ScrollView>
    //   </View>
    //   {/* </ImageBackground> */}
    // </View>
  );
};

export default SignUp;

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
    backgroundColor: "#ffffff",
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
  layoutContainer: {
    flex: 1,
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
});
