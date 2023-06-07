import {
  View,
  Button,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useState, useEffect, useContext, useRef } from "react";
import service from "../../service";
import TokenContext from "../../service/context";
import LoadingScreen from "../AdminScreens/LoadingScreen";
import dimensions from "../../constants/dimensions";
import { Animated, Easing } from "react-native";
import { Text, Input } from "@ui-kitten/components/ui";
import Icons from "../../components/Icons";
import OtpScreen from "./OtpScreen";
import screenNames from "../../constants/screenNames";

const SignUp = ({ navigation }) => {
  const [state, setState] = useState(initialState);
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

  const initialState = {
    company_domain: "",
    company_name: "",
    email: "",
    name: "",
    office_email: "",
    currency_id: "",
    timezone_id: "",
    role:"",
    password: "",
    re_password: "",
  };

  const signupForm = [
    {
      placeholder: "Company Name",
      hidden: false,
      key: "company_name"
    },
    {
      placeholder: "Company Domain",
      hidden: false,
      key:"company_domain"
    },
    {
      placeholder: "Office Email",
      hidden: false,
      key:"office_email"
    },
    {
      placeholder: "Name",
      hidden: false,
      key:"name"
    },
    {
      placeholder: "Email",
      hidden: false,
      key: "email"
    },
    {
      placeholder:"Currency",
      hidden: false,
      key:"currency_id"
    },
    {
      placeholder:"Timezone",
      hidden: false,
      key: "timezone_id"
    },
    {
      placeholder:"Role",
      hidden: false,
      key: "role"
    },
    {
      placeholder: "Password",
      hidden: true,
      key:"password"
    },
    {
      placeholder: "Retype Password",
      hidden: true,
      key:"re_password"
    },
  ];
  //verifying the entered email,password and saving it in expo store
  const addNewid = async () => {
    setIsLoading(true);
    //console.log(state?.email);
    const res = await service.signUpApi(state);
    if (res) {
      //console.log(res?.data);
      navigation.navigate(screenNames.OTP_SCREEN, { email: state?.email } );
    } else {
      alert("Invalid userId or passowrd");
    }
    setIsLoading(false);
  };

  const renderIcon = () => (
    <Pressable
      onPress={() => {
        setPasswordVisible(!passwordVisible);
      }}
    >
      <Icons.ToggleEye show={passwordVisible} />
    </Pressable>
  );

  return (
    <View style={styles.appContainer}>
      {/* <LottieView
        style={{
          width: 250,
          backgroundColor: "#ffffff00",
          alignSelf: "center",
        }}
        progress={animationProgress.current}
        source={require("../assets/signup-truck.json")}
      /> */}
      <LoadingScreen loading={isLoading} />
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../../assets/signup-design.png")}
      >
        <View style={{ flex: 0.4 }}></View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>SignUp</Text>
        </View>
        <View style={styles.layoutContainer}>
          <ScrollView>
            {signupForm.map((item, index) => (
              <Input
                key={index}
                placeholder={item?.placeholder}
                secureTextEntry={item?.hidden && passwordVisible}
                style={styles.input}
                accessoryRight={item?.hidden && renderIcon}
                onChangeText={(e) => {
                  setState({ ...state, [item.key]: e });
                }}
              />
            ))}
            <View style={styles.btnStyle}>
              <TouchableOpacity
                onPress={() => addNewid()}
                style={styles.button}
              >
                <Text style={{ fontSize: 20, color: "white" }}>SignUp</Text>
              </TouchableOpacity>
              {/* <Button title="login" onPress={() => addNewid()} /> */}
            </View>
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <Text>Already have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate(screenNames.LOGIN_SCREEN)}
              >
                <Text style={{ fontWeight: "bold", color: "#001aff" }}>
                  LogIn
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
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
    borderColor: "#ffffff",
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
