import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ActivityIndicator, Pressable } from 'react-native';
import styles from './style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from 'actions';
import ScreenID from 'common/ScreenID';
import NavigationService from 'services/NavigationService';
import AppDimens from 'common/AppDimens';
import { Divider } from 'react-native-paper';
import AppStyles from 'common/AppStyles';
import AppColors from 'common/AppColors';
import _ from 'lodash';
import YesNoBtns from 'components/YesNoBtns';

function CustomerField(props) {
  const { currentBill } = props;
  return (
    <View style={[styles.container, { paddingTop: AppDimens.padding.normal }]}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.categoriesTxt}>THÔNG TIN KHÁCH HÀNG</Text>
        {currentBill?.customer && <Pressable hitSlop={12}
          onPress={() => NavigationService.pushToScreen(ScreenID.CustomerInfo)}>
          <Image source={require('../../../assets/icons/edit.png')} style={{ width: 24, height: 24 }} />
        </Pressable>}
      </View>
      {!currentBill?.customer ? <View>
        <TouchableOpacity style={styles.userInfoCont} onPress={() => NavigationService.pushToScreen(ScreenID.CustomerInfo)}>
          <Image style={styles.userImg} source={require('../../../assets/icons/people.png')} resizeMode='contain' />
          <Text style={styles.normalTxt}>Nhập thông tin khách hàng</Text>
          <Image style={styles.navIc} source={require('../../../assets/icons/navigate_next.png')} resizeMode='contain' />
        </TouchableOpacity>
      </View>
        : <View>
          <View style={[styles.rowCont, { marginTop: props?.isCreateBill ? 0 : AppDimens.padding.small }]}>
            <Text style={styles.greyTxt}>Khách hàng: </Text>
            <Text style={{ ...AppStyles.textCustom(AppColors.dark, 14, '700', 20) }}>{currentBill?.customer?.fullName}</Text>
          </View>
          <Divider />

          <View style={styles.rowCont}>
            <Text style={styles.greyTxt}>Điện thoại: </Text>
            <Text style={{ ...AppStyles.textCustom(AppColors.dark, 14, '700', 20) }}>{currentBill?.customer?.phoneNo}</Text>
          </View>
          <Divider />

          <View style={styles.rowCont}>
            <Text style={styles.greyTxt}>Điểm tích lũy: </Text>
            <Text style={{ ...AppStyles.textCustom(AppColors.dark, 14, '700', 20) }}>{currentBill?.customer?.point || 0}</Text>
          </View>
          <Divider />

          {/* {!props?.isCreateBill && <View>
            <View style={styles.rowCont}>
              <Text style={styles.greyTxt}>Mua hàng: </Text>
              <Text>2 đơn thành công</Text>
            </View>
            <Divider />

            <View style={styles.rowCont}>
              <Text style={styles.greyTxt}>Định giá: </Text>
              <Text>1 lần</Text>
            </View>
            <Divider />
          </View>} */}

          {props?.isCreateBill && <View>
            <View style={styles.rowCont}>
              <Text style={styles.greyTxt}>Địa chỉ: </Text>
              <Text style={{ width: '70%', ...AppStyles.textCustom(AppColors.dark, 14, '700', 20) }}
                numberOfLines={3}>
                {currentBill?.customer?.address}
                {_.isString(currentBill?.customer?.ward?.name) && `, ${currentBill?.customer?.ward?.name}`}
                {_.isString(currentBill?.customer?.district?.name) && `, ${currentBill?.customer?.district?.name}`}
                {_.isString(currentBill?.customer?.city?.name) && `, ${currentBill?.customer?.city?.name}`}
              </Text>
            </View>
            <Divider />

            {/* <View style={styles.rowCont}>
              <Text style={styles.greyTxt} >Công ty: </Text>
              <Text style={{ width: '70%', lineHeight: 20 }} numberOfLines={3}>{currentBill?.customer?.address}, {currentBill?.customer?.ward?.name}, {currentBill?.customer?.district?.name}, {currentBill?.customer?.city?.name}</Text>
            </View>
            <Divider /> */}
          </View>}
          {currentBill?.customer?.id && <YesNoBtns leftTitle='Xem chi tiết' rightTitle='Chỉnh sửa'
            style={{ marginTop: AppDimens.padding.tiny }}
            onLeftPress={() => NavigationService.pushToScreen(ScreenID.CustomerDetails, { item: currentBill?.customer })}
            onRightPress={() => NavigationService.pushToScreen(ScreenID.CustomerInfo)}
            leftStyle={{ backgroundColor: AppColors.darkGrey }} rightStyle={{ backgroundColor: AppColors.dark }}
          />}
        </View>}
    </View>
  );
}

function CustomerField2(props) {
  const { currentBill, loading, onTextChangePhoneNo, findCustomer, onTextChangeFullName, phoneNumber,
    fullName, isProductDetail, isCreateBill, err_name, err_phone, isTradeinModule, tradeInState } = props;

  if (isProductDetail) {
    return CustomerField(props);
  }
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {isTradeinModule && <View style={styles.redCont}>
          <Image source={require('../../../assets/icons/people_red.png')} style={{ width: 24, height: 24 }} />
        </View>}
        <Text style={[styles.categoriesTxt, { flex: 1 }]}>THÔNG TIN KHÁCH HÀNG</Text>
        {isCreateBill ? <TouchableOpacity style={styles.editBtn} onPress={() => NavigationService.pushToScreen(ScreenID.CustomerInfo)}>
          <Image source={require('../../../assets/icons/edit.png')} style={{ width: 24, height: 24 }} />
        </TouchableOpacity> : <View style={{ height: 50 }} />}
      </View>
      {isTradeinModule && <Divider style={{ marginBottom: 12 }} />}

      <View style={styles.greyBg}>
        <View style={{ flex: 1 }}>
          <Text style={styles.smallTxt1}>Số điện thoại *</Text>
          <TextInput
            placeholder='Nhập số điện thoại'
            placeholderTextColor={AppColors.grey}
            style={styles.txtInput}
            value={phoneNumber}
            keyboardType='number-pad'
            onChangeText={onTextChangePhoneNo}
          />
        </View>
        <View style={{ justifyContent: 'center' }}>
          <TouchableOpacity style={styles.btnCont} onPress={() => findCustomer(phoneNumber)} disabled={loading}>
            {!loading ? <Text style={{ ...AppStyles.textCustom(AppColors.white, 13, '700', 20) }}>Tìm</Text>
              : <ActivityIndicator color={"white"} size={"small"}
              />}
          </TouchableOpacity>
        </View>
      </View>
      {_.isString(err_phone) && !_.isEmpty(err_phone) && <Text style={styles.redTxt}>{err_phone}</Text>}


      <View style={styles.greyBg}>
        <View style={{ flex: 1 }}>
          <Text style={styles.smallTxt1}>Khách hàng *</Text>
          <TextInput
            placeholder='Nhập Họ và tên'
            placeholderTextColor={AppColors.grey}
            style={styles.txtInput}
            value={fullName}
            onChangeText={onTextChangeFullName}
          />
        </View>
      </View>
      {_.isString(err_name) && !_.isEmpty(err_name) && <Text style={styles.redTxt}>{err_name}</Text>}


      {currentBill?.customer?.id && !isTradeinModule && <YesNoBtns leftTitle='Xem chi tiết' rightTitle='Chỉnh sửa'
        style={{ marginTop: AppDimens.padding.tiny }}
        onLeftPress={() => NavigationService.pushToScreen(ScreenID.CustomerDetails, { item: currentBill?.customer })}
        onRightPress={() => NavigationService.pushToScreen(ScreenID.CustomerInfo)}
        leftStyle={{ backgroundColor: AppColors.darkGrey }} rightStyle={{ backgroundColor: AppColors.dark }}
      />}

      {tradeInState?.customer?.id && isTradeinModule && <YesNoBtns leftTitle='Xem chi tiết' rightTitle='Chỉnh sửa'
        style={{ marginTop: AppDimens.padding.tiny }}
        onLeftPress={() => NavigationService.pushToScreen(ScreenID.CustomerDetails, { item: tradeInState?.customer })}
        onRightPress={() => NavigationService.pushToScreen(ScreenID.CustomerInfo, { disableEditPhone: true, cusProp: tradeInState?.customer, isTradeinModule })}
        leftStyle={{ backgroundColor: AppColors.darkGrey }} rightStyle={{ backgroundColor: AppColors.dark }}
      />}
    </View>
  );
}

const mapStateToProps = (state) => ({
  currentBill: state.billListReducer.currentBill,
  billList: state.billListReducer.billList,
  tradeInState: state.tradeInReducer.tradeInState,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerField2);