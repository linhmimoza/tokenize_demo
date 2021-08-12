import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import AppDimens from 'common/AppDimens';
import NavigationService from 'services/NavigationService';
import ScreenID, { DrawerID } from 'common/ScreenID';
import ContainerView from 'components/ContainerView';
import AppColors from 'common/AppColors';
import AppStyles from 'common/AppStyles';
import { RNCamera } from 'react-native-camera';
import { withMappedNavigationParams } from 'react-navigation-props-mapper';

@withMappedNavigationParams()
class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedScreen: false,
      isFlashMode: false,
    };
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.setState({ focusedScreen: true });
    });

    this._unsubscribeBlur = this.props.navigation.addListener('blur', () => {
      this.setState({ focusedScreen: false });
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
    this._unsubscribeBlur();
  }

  onSuccess(e) {
    if (this.props.isCheckImei) {
      NavigationService.pushToScreen(ScreenID.SearchImei, { scanValue: e.data });
      return;
    }
    if (this.props.isTradeinModule) {
      NavigationService.pushToScreen(ScreenID.TradeIn, { scanValue: e.data, resetData: false });
      return;
    }
    if (this.props.isImeiHistory){
      NavigationService.pushToScreen(ScreenID.IMEIHistory, { scanValue: e.data, resetData: false });
      return;
    }
    else {
      NavigationService.forcePushScreen(DrawerID.DrawerNavigator,
        { screen: ScreenID.Search, scanValue: e.data, searchType: this.props.searchType });
      return;
    }
  }

  render() {
    const { focusedScreen, isFlashMode } = this.state;
    if (focusedScreen) {
      return (
        <ContainerView safeAreaPaddingEnabled style={styles.container}>
          <QRCodeScanner
            flashMode={isFlashMode ? RNCamera.Constants.FlashMode.on : RNCamera.Constants.FlashMode.off}
            onRead={this.onSuccess.bind(this)}
            cameraStyle={{ height: AppDimens.height }}
            showMarker={true}
            reactivate={true}
            topViewStyle={styles.zeroContainer}
            bottomViewStyle={styles.zeroContainer}
          />
          <View style={styles.headerCont}>
            <TouchableOpacity style={styles.back} onPress={() => NavigationService.goBack()}>
              <Image source={require('../../../assets/icons/arrow_back.png')} style={styles.menuIcon} resizeMode='contain' />
            </TouchableOpacity>
            <Text style={{ ...AppStyles.textCustom(AppColors.white, 16, '700', 24) }}>Quét mã sản phẩm</Text>
          </View>
        </ContainerView>
      );
    } else {
      return <View />;
    }
  }
}

export default Scanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.black
  },
  zeroContainer: {
    height: 0,
    flex: 0,
  },
  headerCont: {
    position: 'absolute',
    top: 0,
    left: 0,
    marginTop: AppDimens.extraTop - 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  back: {
    padding: AppDimens.padding.normal,
    ...AppStyles.rowCenterStyle,
  },
  menuIcon: {
    width: 28, height: 28, tintColor: AppColors.white,
  },
});


