import { StyleSheet } from "react-native";
import AppDimens from "common/AppDimens";
import AppFonts from "common/AppFonts";
import AppColors from "common/AppColors";
import AppStyles from "common/AppStyles";

export default StyleSheet.create({
  body: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: AppDimens.padding.tiny,
  },
  leftElement: {
    flexDirection: "row",
    alignItems: "center",
    ...AppStyles.centerStyle,
    paddingHorizontal: AppDimens.padding.small,
    width: 45, height: 45,
    borderRadius: 8,
    backgroundColor: '#1d1e1e',
  },
  titleStyle: {
    fontSize: 24,
    fontFamily: AppFonts.Regular,
    color: AppColors.primary,
  },
  menuIcon: {
    width: 28, height: 28,
  },
  badgeStyle: {
    position: 'absolute',

    backgroundColor: AppColors.red,
    width: 18,
    height: 18,
    borderRadius: 9,
    top: -8,
    right: -6,
    ...AppStyles.centerStyle
  }
});
