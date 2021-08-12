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
    paddingLeft: AppDimens.padding.tiny,
    backgroundColor: AppColors.white,
    borderBottomWidth: 1,
    borderColor: AppColors.lightGrey
  },
  leftElement: {
    flexDirection: "row",
    alignItems: "center",
    ...AppStyles.centerStyle,
    paddingHorizontal: AppDimens.padding.small,
    width: 45, height: 45,
    marginRight: AppDimens.padding.normal
  },
  titleStyle: {
    fontSize: 24,
    fontFamily: AppFonts.Regular,
    color: AppColors.primary,
  },
  menuIcon: {
    width: 28, height: 28,
  },
  rightElement: {
    flexDirection: "row",
    alignItems: "center",
    ...AppStyles.centerStyle,
    paddingHorizontal: AppDimens.padding.normal,
    width: 50, height: 50,
    marginRight: 4,
  }
});
