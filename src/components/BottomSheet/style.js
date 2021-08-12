import { StyleSheet } from "react-native";
import AppColors from "common/AppColors";
import AppStyles from "common/AppStyles";
import AppDimens from "common/AppDimens";
export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    justifyContent: "flex-end",
  },
  btnClose: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: AppColors.primary,
    ...AppStyles.centerStyle,
    marginBottom: AppDimens.padding.medium,
    alignSelf: "center",
  },
  backdrop: {
    width: "100%",
    height: AppDimens.height - AppDimens.tabbarHeight - AppDimens.extraBottom,
    backgroundColor: "black",
    marginBottom: AppDimens.tabbarHeight + AppDimens.extraBottom,
  },
});
