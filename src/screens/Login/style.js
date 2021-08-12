import AppStyles from "common/AppStyles";
import AppDimens from "common/AppDimens";
import AppColors from "common/AppColors";

export default {
  container: {
    flex: 1,
    ...AppStyles.centerStyle,
    ...AppStyles.fullScreen,
  },
  itemCont: {
    flexDirection: 'row',
    marginHorizontal: AppDimens.padding.small,
    borderWidth: 0.3,
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  whiteCont: {
    width: 60, height: 50,
    ...AppStyles.centerStyle
  },
  textInputCont: {
    paddingRight: AppDimens.padding.normal,
    flex: 1,
    ...AppStyles.centerStyle,
    color: AppColors.white,
    fontSize: 15,
    paddingVertical: 0,
  },
  LoginBtn: {
    flexDirection: 'row',
    marginHorizontal: AppDimens.padding.small,
    backgroundColor: '#BDCFFF',
    borderRadius: 8,
    height: 50,
    marginBottom: AppDimens.padding.medium,
    ...AppStyles.centerStyle,
  },
  loginTxt: {
    ...AppStyles.textCustom('#5073F2', 14, '700', 16),
    flex: 1,
    textAlign: "center",
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: AppDimens.padding.primary
  },
  errTxt: {
    lineHeight: AppDimens.padding.large,
    color: AppColors.red
  },
  bgImage: {
    width: AppDimens.width,
    height: AppDimens.height,
    position: 'absolute',
    left: 0, right: 0
  },
  smallIc: {
    width: 25,
    height: 25,
  },
  signInTxt: {
    ...AppStyles.textCustom(AppColors.white, 23, '900', 30),
  },
  normalTxt: {
    marginTop: AppDimens.padding.small,
    ...AppStyles.textCustom(AppColors.white, 16, '500', 24)
  },
  rowCont: {
    flexDirection: 'row',
    marginHorizontal: AppDimens.padding.small,
  },
  txt14: {
    ...AppStyles.textCustom(AppColors.white, 14, '500', 21)
  },
  txt14Bold: {
    ...AppStyles.textCustom(AppColors.white, 16, '700', 21)
  },
  bottomCont: {
    width: AppDimens.width,
    ...AppStyles.centerStyle,
  },
  ic: {
    width: 18,
    height: 18,
    tintColor: AppColors.white
  },
  customCheckbox: {
    width: 24,
    height: 24,
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 1,
    ...AppStyles.centerStyle,
    marginRight: 8
  }
};
