import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from 'actions';
import ContainerView from 'components/ContainerView';
import { withMappedNavigationParams } from 'react-navigation-props-mapper';
import { createLoadingSelector } from "reducers/selectors";
import NavigationService from 'services/NavigationService';
import ScreenID, { BottomTabID, DrawerID } from 'common/ScreenID';
import Storage from 'services/storage';

@withMappedNavigationParams()
class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const token = await Storage.getToken();
    const { isTokenExpired } = this.props;
    if (!token || isTokenExpired) {
      this.props.logout();
      NavigationService.reset(ScreenID.Login);
    } else if (token) {
      NavigationService.reset(BottomTabID.BottomTabNavigator);
    }
  }

  render() {
    return (
      <ContainerView safeAreaPaddingEnabled style={styles.container}>
        <View />
      </ContainerView>
    );
  }
}
const loadingSelector = createLoadingSelector([

]);

const mapStateToProps = (state) => ({
  loading: loadingSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);