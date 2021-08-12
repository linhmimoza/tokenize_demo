import { StyleSheet } from "react-native";
import AppStyles from "common/AppStyles";
import AppDimens from "common/AppDimens";
export default StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    ...AppStyles.centerStyle,
    marginBottom: AppDimens.extraBottom
  },
});
