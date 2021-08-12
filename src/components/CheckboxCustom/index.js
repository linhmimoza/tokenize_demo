import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AppColors from 'common/AppColors';
import AppDimens from 'common/AppDimens';
import AppStyles from 'common/AppStyles';
import utils from 'utils';
import NavigationService from 'services/NavigationService';
import ScreenID from 'common/ScreenID';
import _ from 'lodash';

export default function CheckboxCustom(props) {
  const { item, isGive, isAttachs, isWarranty, title, onToggleProduct, childIndex, setVATInvoice, vatChecked, style, checked } = props;
  let maxInStore = item?.selectedChild ? item?.selectedChild :
    (item?.childs?.length > 0 ? item?.childs?.reduce((a, b) => a?.totalQuantityInStore > b?.totalQuantityInStore ? a : b) : item);

  const onPress = () => {
    if (vatChecked !== undefined) setVATInvoice();
    else onToggleProduct(undefined, undefined, childIndex, isGive, isAttachs);
  };

  return (
    <View
      disabled={!(item?.childs && item?.childs?.length > 0)}>
      <View style={styles.squareItem}>
        <TouchableOpacity onPress={onPress} style={[styles.checkboxTouch, style]}>
          <View style={[(!item?.isGiftTaken && !vatChecked && !checked) ? styles.squareRadioBtn : styles.activeSquareRadioBtn]}>
            {
              (item?.isGiftTaken || vatChecked || checked) && <Image style={styles.ic} source={require('../../../assets/icons/check.png')} />
            }
          </View>
        </TouchableOpacity>
        {maxInStore && <View style={{ flex: 1 }}>
          {isGive && !_.isEmpty(item?.code) && <Text style={styles.greyTxt}>{`(Quà tặng kèm - ${item?.code})`}</Text>}
          <Text style={[styles.normalTxt, isWarranty && { fontWeight: '500' }]}>{maxInStore?.productName}
            <Text style={[styles.normalTxt, { fontWeight: '400' }]}>{isWarranty && `. Giá: ${utils.formatCurrency(item?.sellingPrice)}`}</Text></Text>
          {!isWarranty && <Text style={styles.normalTxt}>Giá bán: {utils.formatCurrency(maxInStore?.sellingPrice)}</Text>}
          {isGive && <Text style={styles.normalTxt}>Giá thu lại: {utils.formatCurrency(item?.repurchasePrice)}</Text>}
          {isAttachs && <Text style={styles.normalTxt}>Giá chiết khấu: {utils.formatCurrency(item?.repurchasePrice)}</Text>}
          {!isWarranty && <Text style={{ ...AppStyles.textCustom(AppColors.blue, 12, '500', 20) }}>Tồn CTB: {maxInStore?.totalQuantityInStore || 0}</Text>}
        </View>}
        {title && <Text style={styles.titleField}>{title}</Text>}
        {item?.childs && item?.childs?.length > 0 &&
          <TouchableOpacity style={styles.checkboxTouch}
            onPress={() => NavigationService.pushToScreen(ScreenID.SimilarProduct, { parent: item, maxInStore: maxInStore, onToggleProduct, isGive, childIndex, isAttachs })}>
            <Image style={styles.navIc} source={require('../../../assets/icons/navigate_next.png')} resizeMode='contain' />
          </TouchableOpacity>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxTouch: {
    height: 24,
    ...AppStyles.centerStyle,
    paddingHorizontal: AppDimens.padding.normal,
  },
  titleField: {
    ...AppStyles.textCustom(AppColors.dark, 14, '400', 20),
    marginRight: AppDimens.padding.normal,
  },
  squareItem: {
    marginTop: AppDimens.padding.small,
    flexDirection: 'row',
    alignItems: 'center'
  },
  squareRadioBtn: {
    width: 20,
    height: 20,
    borderColor: AppColors.grey,
    borderRadius: 2,
    borderWidth: 2,
    ...AppStyles.centerStyle,
  },
  activeSquareRadioBtn: {
    width: 20,
    height: 20,
    backgroundColor: AppColors.red,
    ...AppStyles.centerStyle,
  },
  ic: {
    tintColor: AppColors.white,
    width: 20,
    height: 20,
  },
  greyTxt: {
    ...AppStyles.textCustom(AppColors.darkGrey, 12, '400', 20)
  },
  normalTxt: {
    ...AppStyles.textCustom(AppColors.black, 14, '600', 20),
    width: AppDimens.width - 100
  },
  navIc: {
    width: 24, height: 24, tintColor: AppColors.red,
    right: -4
  },
});