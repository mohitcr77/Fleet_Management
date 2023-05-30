import screenNames from "../constants/screenNames";
import { View } from "react-native";

const getScreenFlow = (screen) => {
  switch (screen) {
    case screenNames.scanDktView:
      return {
        lastScreen: screenNames.scanDktList,
        nextScreen: screen,
        editScreen: screen,
        viewScreen: screen,
      };

    default:
      return {
        lastScreen: screen,
        nextScreen: screen,
        editScreen: screen,
        viewScreen: screen,
      };
  }
};

export default getScreenFlow;
