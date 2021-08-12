import { StyleSheet } from "react-native";
import AppColors from "common/AppColors";
import AppStyles from "common/AppStyles";
import AppDimens from "common/AppDimens";
export default StyleSheet.create({
  btnCont: {
    backgroundColor: AppColors.red,
    ...AppStyles.centerStyle,
    marginHorizontal: AppDimens.padding.tiny,
    marginVertical: 4, height: 48,
    borderRadius: 12
  },
  container: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    paddingBottom: AppDimens.extraBottom,
    backgroundColor: AppColors.white
  },
  titleTxt: {
    color: AppColors.white,
    fontWeight: '800'
  },
});
