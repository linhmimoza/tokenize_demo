import { Platform } from "react-native";
import AppColors from "./AppColors";
import AppDimens from "./AppDimens";

const barType = {
  light: "light-content",
  dark: "dark-content",
};

const primaryButtonStyle = {
  backgroundColor: AppColors.white,
  borderRadius: 27,
  height: 48,
  borderWidth: 2,
  alignItems: "center",
  justifyContent: "center",
};

const backIcon = {
  width: 20, height: 20, tintColor: AppColors.black
};

const copyIconRed = {
  width: 22, height: 22,
  tintColor: AppColors.red
};

const copyIconGrey = {
  width: 22, height: 22,
  tintColor: AppColors.grey
};

const primaryTextStyle = {
  color: AppColors.white,
  fontSize: AppDimens.size.normal,
};

const secondaryTextStyle = {
  color: AppColors.primary,
  fontSize: AppDimens.size.small,
};

const largeTextStyle = {
  color: AppColors.primary,
  fontSize: AppDimens.size.large,
};

const centerStyle = {
  alignItems: "center",
  justifyContent: "center",
};

const rowCenterStyle = {
  flexDirection: "row",
  alignItems: "center",
};

const absoluteFill = {
  position: "absolute",
  bottom: 0,
  top: 0,
  right: 0,
  left: 0,
};

const headerStyles = {
  headerContainer: {
    paddingTop: AppDimens.extraBottom,
    alignItems: "center",
  },
  headerTitle: {
    color: AppColors.superDark,
    fontSize: 20,
    textAlign: "center",
    marginTop: 5,
  },
};

const widthCenter = {
  width: '100%',
  alignItems: "center",
  justifyContent: "center",
};

const spinnerTextStyle = {
  fontSize: 12,
  color: AppColors.white,
  marginTop: AppDimens.padding.normal
};

const bgImage = {
  width: AppDimens.width,
  height: AppDimens.width / 1.333333,
  position: 'absolute',
  left: 0, right: 0
};

const headerTitleTxt = {
  fontSize: 16,
  fontWeight: 'bold',
};

const fullScreen = {
  height: AppDimens.height,
  width: AppDimens.width,
};

const greyBorderContainer = {
  borderRadius: 8,
  borderColor: AppColors.grey,
  borderWidth: 1,
  paddingHorizontal: AppDimens.padding.normal,
  paddingVertical: AppDimens.padding.tiny
};

export default {
  barType,
  fullScreen,
  primaryButtonStyle,
  primaryTextStyle,
  secondaryTextStyle,
  largeTextStyle,
  centerStyle,
  rowCenterStyle,
  absoluteFill,
  headerStyles,
  widthCenter,
  spinnerTextStyle,
  shadowObj: (opacity = 0.2, shadowColor = '#000', elevation = 3) =>
    Platform.select({
      ios: {
        shadowColor: shadowColor,
        shadowOpacity: opacity,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 3.84,
      },
      android: {
        elevation,
      },
    }),
  backIcon,
  copyIconRed,
  copyIconGrey,
  bgImage,
  headerTitleTxt,
  greyBorderContainer,
  textCustom: (color = AppColors.dark, fontSize = 12, fontWeight = '500', lineHeight = 20) => {
    return {
      color,
      fontSize,
      fontWeight,
      lineHeight
    };
  },
  icCustom: (width = 24, height = 24) => {
    return {
      width,
      height,
    };
  },
  menuItemHeight: 46,
};
