import React from "react";
import { StatusBar, View, Platform } from "react-native";
import PropTypes from "prop-types";
import { SafeAreaView } from 'react-native-safe-area-context';

function ContainerView(props) {
  const { style, children, safeAreaPaddingEnabled, enableBottom } = props;

  const statusbarHeight = StatusBar.currentHeight
    ? StatusBar.currentHeight
    : 0;
  let edges = ['right', 'top', 'left'];

  if (enableBottom) edges.push('bottom');

  let ContentView;
  if (Platform.OS === "ios") {
    let WrapperView = safeAreaPaddingEnabled ? SafeAreaView : View;
    ContentView = (
      <WrapperView style={[style]} edges={edges}>
        {children}
      </WrapperView>
    );
  } else {
    const paddingTop = safeAreaPaddingEnabled ? statusbarHeight : 0;
    ContentView = (
      <View style={[{ paddingTop }, style]}>
        {children}
      </View>
    );
  }
  return ContentView;
}

ContainerView.propTypes = {
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  safeAreaPaddingEnabled: PropTypes.bool,
  navigationTransitionEnabled: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  enableBottom: PropTypes.bool,
};
ContainerView.defaultProps = {
  style: {},
  children: {},
  safeAreaPaddingEnabled: false,
  navigationTransitionEnabled: true,
  onFocus: () => { },
  onBlur: () => { },
  enableBottom: false,
};

export default ContainerView;
