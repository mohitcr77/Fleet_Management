import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
const mainHorizontalPadding = 10;
const componentWidth = width - mainHorizontalPadding * 2;

export default { height, width, mainHorizontalPadding, componentWidth };
