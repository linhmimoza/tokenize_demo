import { Dimensions, Platform, StatusBar } from "react-native";
import AppDevice from "./AppDevices";

const { width, height } = Dimensions.get("window");
const { isSmallScreen, isIphoneX } = AppDevice;
const widthRate = width / 375;
const heightRate = height / 812;

const calculcateScreenRate = () => {
  const deviceHypotenuse = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
  const designHypotenuse = Math.sqrt(Math.pow(375, 2) + Math.pow(812, 2));
  return deviceHypotenuse / designHypotenuse;
};

export default {
  width,
  height,
  widthRate,
  heightRate,
  screenRate: calculcateScreenRate(),

  extraBottom: isIphoneX ? 34 : 4,
  extraTop: Platform.OS === "ios" ? (isIphoneX ? 50 : 32) : StatusBar.currentHeight + 10,
  tabbarHeight: Platform.OS == "ios" ? 49 : 56,
  headerHeight: 56,
  headerHeightBig: 62,
  // logo app
  largeLogo: 178,
  smallLogo: 89,

  // padding / margin
  padding: {
    tiny: isSmallScreen ? 6 : 8,
    small: isSmallScreen ? 8 : 12,
    regular: isSmallScreen ? 10 : 14,
    normal: isSmallScreen ? 12 : 16,
    medium: isSmallScreen ? 14 : 20,
    primary: isSmallScreen ? 18 : 24,
    large: isSmallScreen ? 24 : 32,
    super: isSmallScreen ? 32 : 64,
  },
  size: {
    little: 4,
    tiny: 8,
    small: 12,
    regular: 14,
    normal: 16,
    medium: 20,
    primary: 24,
    large: 32,
    super: 64,
  },
  icon: {
    normal: 24,
    medium: 40,
    large: 45,
  },
};

