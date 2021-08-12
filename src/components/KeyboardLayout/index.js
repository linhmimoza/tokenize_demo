import React, { useEffect } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import PropTypes from "prop-types";

function KeyboardLayout(props) {
  const { children, style, onKeyboardToggle } = props;

  useEffect(() => {
    Keyboard.addListener(Platform.OS == 'ios' ? "keyboardWillShow" : "keyboardDidShow", _keyboardShow);
    Keyboard.addListener(Platform.OS == 'ios' ? "keyboardWillHide" : "keyboardDidHide", _keyboardHide);

    // cleanup function
    return () => {
      Keyboard.removeListener(Platform.OS == 'ios' ? "keyboardWillShow" : "keyboardDidShow", _keyboardShow);
      Keyboard.removeListener(Platform.OS == 'ios' ? "keyboardWillHide" : "keyboardDidHide", _keyboardHide);
    };
  }, []);

  const _keyboardShow = () => {
    onKeyboardToggle(true);
  };

  const _keyboardHide = () => {
    onKeyboardToggle(false);
  };

  return (
    <KeyboardAvoidingView style={style} behavior="padding" enabled={Platform.OS == 'ios' ? true : false}>
      {children}
    </KeyboardAvoidingView>
  );
}

KeyboardLayout.propTypes = {
  children: PropTypes.object.isRequired,
  onKeyboardToggle: PropTypes.func,
  styles: PropTypes.object,
};

KeyboardLayout.defaultProps = {
  onKeyboardToggle: () => { },
};

export default KeyboardLayout;

