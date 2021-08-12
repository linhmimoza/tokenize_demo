import AppStyles from 'common/AppStyles';
import AppDimens from 'common/AppDimens';
import AppColors from 'common/AppColors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF0FA',
    // paddingHorizontal: AppDimens.padding.small
  },
  flexRowCont: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: AppDimens.padding.primary
  },
  icSearch: {
    ...AppStyles.icCustom(),
    marginLeft: -4,
    marginRight: 8,
  },
  title: {
    ...AppStyles.textCustom(AppColors.dark, 16, '700', 16),
    flex: 1
  },
  itemCont: {
    flexDirection: 'row',
    backgroundColor: AppColors.white,
    borderRadius: 8,
    padding: AppDimens.padding.medium
  },
  coinIc: {
    width: 38, height: 38
  },
  midItemCont: {
    flex: 1,
    marginHorizontal: AppDimens.padding.small
  },
  titleTxt: {
    ...AppStyles.textCustom(AppColors.dark, 15, '700', 18)
  },
  normalTxt: {
    marginTop: 4,
    ...AppStyles.textCustom(AppColors.darkGrey, 14, '500', 18)
  },
  percentTxt: {
    marginTop: 5,
    ...AppStyles.textCustom(AppColors.green, 13, '500', 18)
  },
  priceTxt: {
    ...AppStyles.textCustom(AppColors.dark, 15, '500', 18)
  },
  headerCont: {
    backgroundColor: AppColors.regularGrey,
    width: 78, height: 32,
    ...AppStyles.centerStyle,
    borderRadius: 8,
    marginBottom: AppDimens.padding.small,
    marginTop: AppDimens.padding.medium
  },
  headerTitleTxt: {
    ...AppStyles.textCustom(AppColors.white, 15, '700', 18)
  },
  flCont: {
    marginHorizontal: AppDimens.padding.small
  },
  selectedCont: {
    backgroundColor: AppColors.blue,
  },
  whiteTxt: {
    color: AppColors.white
  }
});