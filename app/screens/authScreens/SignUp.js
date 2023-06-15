import {
  View,
  Button,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Animated,
  Easing,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import {
  Text,
  Input,
  Select,
  SelectItem,
  IndexPath,
} from "@ui-kitten/components/ui";

import dimensions from "../../constants/dimensions";
import Icons from "../../components/Icons";
import screenNames from "../../constants/screenNames";
import useApi from "../../hooks/useApi";
import endpoint from "../../service/endpoint";
import generateKeyValueFromFormData from "../../helpers/generateKeyValueFromForm";
import useGet from "./../../hooks/useGet";
import dataType from "../../constants/dataType";
import isEmptyArray from "../../helpers/isEmptyArray";
import LoadingScreen from "./../AdminScreens/LoadingScreen";

const placements = [
  "top",
  "top start",
  "top end",
  "bottom",
  "bottom start",
  "bottom end",
  "left",
  "left start",
  "left end",
  "right",
  "right start",
  "right end",
];
const SignUp = ({ navigation }) => {
  const { data: currencyList } = useGet(endpoint.currency);

  const signupForm = [
    {
      placeholder: "Company Name",
      hidden: false,
      key: "company_name",
      type: dataType.text,
    },
    {
      placeholder: "Company Domain",
      hidden: false,
      key: "company_domain",
      type: dataType.text,
    },
    {
      placeholder: "Office Email",
      hidden: false,
      key: "office_email",
      type: dataType.text,
    },
    {
      placeholder: "Name",
      hidden: false,
      key: "name",
      type: dataType.text,
    },
    {
      placeholder: "Email",
      hidden: false,
      key: "email",
      type: dataType.text,
    },
    {
      placeholder: "Currency",
      hidden: false,
      key: "currency_id",
      type: dataType.dropdown,
      data: currencyList,
    },
    {
      placeholder: "Timezone",
      hidden: false,
      key: "timezone_id",
      type: dataType.dropdown,
      data: currencyList,
    },
    {
      placeholder: "Role",
      hidden: false,
      key: "role",
      type: dataType.text,
    },
    {
      placeholder: "Password",
      hidden: true,
      key: "password",
      type: dataType.text,
    },
    {
      placeholder: "Retype Password",
      hidden: true,
      key: "re_password",
      type: dataType.text,
    },
  ];

  const initialState = generateKeyValueFromFormData(signupForm);
  const [state, setState] = useState(initialState);
  const [placementIndex, setPlacementIndex] = useState();
  const placement = null;

  const { request: signUpUser } = useApi(handleSignUpSuccess);
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

  //verifying the entered email,password and saving it in expo store
  const onPlacementSelect = (index) => {
    setPlacementIndex(index);
  };
  const signUp = async () => {
    const requestConfig = {
      endpoint: endpoint.sign_up,
      body: state,
    };
    await signUpUser(requestConfig);
  };

  function handleSignUpSuccess() {
    navigation.navigate(screenNames.OTP_SCREEN, { email: state?.email });
  }

  const renderIcon = () => (
    <Pressable
      onPress={() => {
        setPasswordVisible(!passwordVisible);
      }}
    >
      <Icons.ToggleEye show={passwordVisible} />
    </Pressable>
  );
  const renderPlacementItem = (item) => <SelectItem title={item.name} />;

  const onDropDownSelect = (e, i) => {
    setState({ ...state, [i.key]: e });

    console.log(e, i);
  };
  if (isEmptyArray(currencyList)) {
    return <LoadingScreen loading={true} />;
  }

  return (
    <View style={styles.appContainer}>
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
            {signupForm.map((item, index) =>
              item.type == dataType.dropdown ? (
                <Select
                  placeholder={item.name}
                  value={placement}
                  selectedIndex={placementIndex}
                  onSelect={(e) => onDropDownSelect(e, item)}
                  style={styles.input}
                >
                  {item.data.map(renderPlacementItem)}
                </Select>
              ) : (
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
              )
            )}
            <View style={styles.btnStyle}>
              <TouchableOpacity onPress={() => signUp()} style={styles.button}>
                <Text style={{ fontSize: 20, color: "white" }}>SignUp</Text>
              </TouchableOpacity>
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
    marginVertical: 15,
    marginHorizontal: 20,
    borderColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    fontSize: 18,
    backgroundColor: "#ffffff",
    color: "white",
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
