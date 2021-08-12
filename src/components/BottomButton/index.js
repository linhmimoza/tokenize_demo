import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./style";

function BottomButton(props) {
  const { disabled, onPress, title, style } = props;
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={[styles.btnCont, disabled && { opacity: 0.5 }]} onPress={onPress} disabled={disabled}>
        <Text style={styles.titleTxt}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BottomButton;