import AppColors from 'common/AppColors';
import AppDimens from 'common/AppDimens';
import AppStyles from 'common/AppStyles';

export default {
  datePicker: {
    position: 'absolute',
    left: 0, right: 0,
    bottom: 0,
    backgroundColor: AppColors.white,
    ...AppStyles.shadowObj()
  },
  doneBtn: {
    flexDirection: 'row-reverse',
    borderColor: AppColors.grey,
    borderBottomWidth: 0.5
  },
  doneTxt: {
    lineHeight: 50,
    fontWeight: 'bold',
    paddingHorizontal: AppDimens.padding.primary,
    fontSize: 14,
  },
};