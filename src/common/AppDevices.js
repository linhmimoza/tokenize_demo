/** @format */

import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const isIphone = Platform.OS === "ios" &&
  !Platform.isPad &&
  !Platform.isTVOS;

const isSmallScreen = height < 667;
const isRegularScreen = height >= 667 && height < 736;
const isMediumScreen = height >= 736 && height < 812;

const isIphoneX = isIphone && height >= 812;

const isIphone11 = isIphone && (height >= 896);

const isLargeScreen = height >= 896;

export default {
  isIphoneX,
  ToolbarHeight: isIphoneX ? 35 : 0,
  isSmallScreen,
  isMediumScreen,
  isIphone11,
  isLargeScreen,
  isRegularScreen,
};
