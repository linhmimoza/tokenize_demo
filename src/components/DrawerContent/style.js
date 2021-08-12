import AppDimens from 'common/AppDimens';
import AppColors from 'common/AppColors';

export default {
  container: {
    flexDirection: 'row',
    marginTop:AppDimens.padding.tiny,
    alignItems: 'center',
    marginBottom: AppDimens.padding.normal
  },
  avatar: {
    width: 48, height: 48,
    borderColor: AppColors.red,
    borderWidth: 2,
    borderRadius: 48 / 2,
    marginLeft: AppDimens.padding.normal
  },
  nameTxt: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20
  },
  normalTxt: {
    fontSize: 14,
    lineHeight: 20
  },
  itemCont: {
    flex: 1,
  },
  mainCont: {
    flexDirection: 'row',
    paddingVertical: 11,
    alignItems: 'center',
  },
  ic: {
    width: 24,
    height: 24,
    marginLeft: AppDimens.padding.small,
    tintColor: AppColors.red
  },
  straightDivider: {
    height: 34,
    width: 4,
    borderRadius: 2,
    backgroundColor: AppColors.red
  },
  titleTxt: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    marginLeft: AppDimens.padding.normal
  },
  logoutBtn: {
    flexDirection: 'row',
    marginBottom: 34,
    marginTop: 12,
  }
};