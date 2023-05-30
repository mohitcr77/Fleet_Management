import { Platform } from "react-native";

export default isAndroid = () => {
  return Platform.OS == "android";
};
