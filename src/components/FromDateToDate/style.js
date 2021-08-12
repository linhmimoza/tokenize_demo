import { StyleSheet } from "react-native";
import AppColors from "common/AppColors";
import AppStyles from "common/AppStyles";

export default StyleSheet.create({
  datePickerCont: {
    height: 40,
    borderColor: AppColors.darkGrey,
    borderWidth: 1,
    borderRadius: 8,
    ...AppStyles.centerStyle
  },
});
