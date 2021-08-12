import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar, Pressable
} from "react-native";
import styles from "./style";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "actions";
import { withMappedNavigationParams } from "react-navigation-props-mapper";
import AppColors from "common/AppColors";
import AppDimens from "common/AppDimens";
import Validator from "common/Validator";
import {
  createLoadingSelector,
  createErrorMessageSelector,
} from "reducers/selectors";
import ContainerView from "components/ContainerView";
import { TextInput } from "react-native-gesture-handler";
import Spinner from "react-native-loading-spinner-overlay";
import { ImageBackground } from "react-native";
import KeyboardLayout from "components/KeyboardLayout";

@withMappedNavigationParams()
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "testmyinfo1@mailinator.com",
      password: "Test#123",
      // username: "",
      // password: "",
      errUsername: "",
      errPassword: "",
      forcusPw: false,
      error: "",
      showPassword: false,
      rememberMe: false,
      isKeyBoardShow: false,
    };
  }

  componentDidMount() {
    this.props.logout();
  }

  _onChangeUsername = text => {
    this.setState({
      username: text,
      errUsername: "",
      error: ""
    });
  };
  _onChangePassword = text => {
    this.setState({
      password: text,
      errPassword: "",
      error: ""
    });
  };

  _submit = () => {
    const { username, password } = this.state;
    if (!Validator.checkRequired(username)) {
      this.setState({ errUsername: "Please enter email" });
      return;
    }

    if (!Validator.checkRequired(password)) {
      this.setState({ errPassword: "Please enter password" });
      return;
    }

    this.props.login({ email: username, password: password });
  };

  renderErrorMessage = () => {
    const { error } = this.state;
    if (!error || error.trim().length === 0) {
      return null;
    }
    return <Text style={styles.errorMessage}>Error: {error}</Text>;
  };

  render() {
    const {
      username,
      password,
      errUsername,
      errPassword,
      showPassword,
      rememberMe,
      isKeyBoardShow,
    } = this.state;
    const { loading } = this.props;
    return (
      <ContainerView safeAreaPaddingEnabled style={styles.container}>
        <ImageBackground
          source={require('../../../assets/images/full_bg.png')}
          style={styles.bgImage}
          resizeMode="cover"
        />
        <Spinner visible={loading} />
        <StatusBar barStyle={'light-content'} translucent={false} />
        <KeyboardLayout style={{ flex: 1 }} onKeyboardToggle={(value) => this.setState({ isKeyBoardShow: value })}>
          <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled' bounces={false}>
            <View style={styles.container}>
              <Image source={require('../../../assets/images/logo_full.png')} style={styles.logo} resizeMode='contain' />
              <Text style={styles.signInTxt}>Sign in</Text>
              <Text style={styles.normalTxt}>Please sign in to continue</Text>

              <View style={[styles.itemCont, { marginTop: AppDimens.padding.super }]}>
                <View style={styles.whiteCont}>
                  <Image source={require('../../../assets/icons/user_email.png')} style={styles.smallIc} resizeMode='contain' />
                </View>
                <TextInput placeholder='Email' style={styles.textInputCont} placeholderTextColor={AppColors.white}
                  onChangeText={(text) => this._onChangeUsername(text)}
                  autoCapitalize='none'
                  value={username} />
              </View>
              {errUsername == '' ? <View style={{ height: AppDimens.padding.medium }} /> : <Text style={styles.errTxt}>{errUsername}</Text>}

              <View style={styles.itemCont}>
                <View style={styles.whiteCont}>
                  <Image source={require('../../../assets/icons/password_ic.png')} style={styles.smallIc} resizeMode='contain' />
                </View>
                <TextInput placeholder='Password' style={styles.textInputCont}
                  placeholderTextColor={AppColors.white}
                  value={password}
                  secureTextEntry={!showPassword}
                  onChangeText={(text) => this._onChangePassword(text)}
                />
                <Pressable style={styles.whiteCont} onPress={() => this.setState({ showPassword: !this.state.showPassword })}>
                  <Image source={require('../../../assets/icons/eye_ic.png')} style={styles.smallIc} resizeMode='contain' />
                </Pressable>
              </View>
              {errPassword == '' ? <View style={{ height: AppDimens.padding.medium }} /> : <Text style={styles.errTxt}>{errPassword}</Text>}
              <View style={styles.rowCont}>
                <Pressable onPress={() => this.setState({ rememberMe: !this.state.rememberMe })} style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={styles.customCheckbox}>
                    {rememberMe && <Image style={styles.ic} source={require('../../../assets/icons/check.png')} />}
                  </View>
                  <Text style={[styles.txt14, { flex: 1 }]}>
                    Remember me
                  </Text>
                </Pressable>
                <Pressable>
                  <Text style={[styles.txt14]}>Forgot your password?</Text>
                </Pressable>
              </View>
            </View>
            <View style={[styles.bottomCont, { paddingBottom: isKeyBoardShow ? AppDimens.padding.small : AppDimens.padding.super }]}>
              <TouchableOpacity style={styles.LoginBtn} onPress={() => { this._submit(); }} disabled={loading}>
                <Text style={styles.loginTxt}>SIGN IN</Text>
              </TouchableOpacity>
              <Text style={[styles.txt14]}>Don’t have an account yet? <Text style={[styles.txt14Bold]}>SIGN UP</Text></Text>
            </View>
          </ScrollView>
        </KeyboardLayout>
      </ContainerView>
    );
  }
}

const loadingSelector = createLoadingSelector([
  actions.userActions.USER_PREFIX + "_LOG_IN",
]);

const errorSelector = createErrorMessageSelector([
  actions.userActions.USER_PREFIX + "_LOG_IN",
]);

const mapStateToProps = (state) => ({
  loading: loadingSelector(state),
  error: errorSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
