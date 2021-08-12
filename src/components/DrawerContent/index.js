import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style';
import NavigationService from 'services/NavigationService';
import ScreenID from 'common/ScreenID';
import ContainerView from 'components/ContainerView';
import AppDimens from 'common/AppDimens';
import { Divider } from 'react-native-paper';
import AppColors from 'common/AppColors';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from 'actions';
import { isEmpty } from 'lodash';
import { Linking } from 'react-native';

const data = [{
  name: 'Trang chủ',
  ic: require('../../../assets/icons/home.png'),
  screen: ScreenID.Home,
  params: {},
}];
function DrawerContent(props) {
  const { userInfo } = props;

  const logout = () => {
    NavigationService.closeDrawer();
    // props.logout();
    NavigationService.pushToScreen(ScreenID.Login);
  };
  return (
    <ContainerView safeAreaPaddingEnabled style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.avatar}></View>
        <View style={{ marginLeft: AppDimens.padding.normal }}>
          <Text style={styles.nameTxt}>{userInfo?.username}</Text>
          <Text style={styles.normalTxt}>{userInfo?.storeName}</Text>
        </View>
      </View>
      <Divider />
      {/* <View style={styles.straightDivider} /> */}
      <ScrollView style={styles.itemCont} bounces={false}>
        {data.map(e => {
          return (
            <TouchableOpacity key={e.name} style={styles.mainCont}
              onPress={() => {
                if (!isEmpty(e?.screen)) {
                  NavigationService.pushToScreen(e?.screen, { ...e?.params });
                }
                if (!isEmpty(e?.link)) {
                  Linking.canOpenURL(e?.link).then(supported => {
                    if (supported) {
                      Linking.openURL(e?.link);
                    } else {
                      if (__DEV__) console.log("Don't know how to open URI: " + e?.link);
                    }
                  });
                }
              }}>
              <Image source={e?.ic} resizeMode='contain' style={styles.ic} />
              <Text style={styles.titleTxt}>{e?.name}</Text>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
          <Image source={require('../../../assets/icons/logout.png')} resizeMode='contain' style={styles.ic} />
          <Text style={[styles.titleTxt, { color: AppColors.red }]}>Đăng xuất</Text>
        </TouchableOpacity>
      </ScrollView>
    </ContainerView>
  );
}

const mapStateToProps = (state) => ({
  userInfo: state.userReducer.userInfo
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);