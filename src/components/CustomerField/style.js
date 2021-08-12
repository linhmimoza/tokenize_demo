import AppDimens from 'common/AppDimens';
import AppStyles from 'common/AppStyles';
import AppColors from 'common/AppColors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  userInfoCont: {
    backgroundColor: AppColors.lightGrey,
    height: 40,
    width: '100%',
    flexDirection: 'row',
    ...AppStyles.centerStyle,
    paddingHorizontal: AppDimens.padding.small,
    marginTop: 8,
    borderRadius: 8
  },
  categoriesTxt: {
    color: AppColors.red,
    fontSize: 14,
    fontWeight: '700',
    flex: 1
  },
  userImg: {
    width: 24, height: 24,
    marginRight: AppDimens.padding.small
  },
  normalTxt: {
    flex: 1,
    fontSize: 14,
  },
  navIc: {
    width: 24, height: 24
  },
  greyTxt: {
    color: AppColors.darkGrey,
    lineHeight: 20,
    width: 120
  },
  rowCont: {
    flexDirection: 'row',
    paddingVertical: AppDimens.padding.tiny,
    alignItems: 'center',
  },
  editBtn: {
    marginTop: 8,
    right: -12,
    padding: 12,
  },
  greyBg: {
    // backgroundColor: AppColors.lightGrey,
    borderWidth: 0.5,
    borderColor: AppColors.grey,
    height: 64,
    borderRadius: 8,
    paddingHorizontal: AppDimens.padding.normal,
    paddingVertical: AppDimens.padding.tiny,
    marginBottom: 4,
    flexDirection: 'row'
  },
  smallTxt1: {
    fontSize: 12
  },
  txtInput: {
    color: AppColors.dark,
    paddingVertical: 0,
    marginTop: 6,
    fontSize: 16,
    lineHeight: 21,
  },
  btnCont: {
    backgroundColor: AppColors.blue,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8
  },
  redTxt: {
    ...AppStyles.textCustom(AppColors.red, 12, '500', 24),
    marginBottom: 3
  },
  redCont: {
    width: 40, height: 40, borderRadius: 20,
    ...AppStyles.centerStyle,
    backgroundColor: AppColors.lightRed,
    marginRight: AppDimens.padding.small
  }
});