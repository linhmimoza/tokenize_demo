import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import NavigationService from "services/NavigationService";

export default function NavHeader(props) {
  const {
    hasRight,
    onPressRight,
    componentRight,
    hasLeft,
    onPressLeft,
    componentLeft,
    style, renderTitle
  } = props;

  const _renderLeft = () => {
    if (hasLeft == false) return null;
    if (componentLeft) return componentLeft;
    return (
      <TouchableOpacity style={styles.leftElement}
        onPress={() => onPressLeft ? onPressLeft() : NavigationService.goBack()} activeOpacity={0.7}  >
        <Image source={require('../../../assets/icons/arrow_back.png')} style={styles.menuIcon} resizeMode='contain' />
      </TouchableOpacity>
    );
  };

  const _renderRight = () => {
    if (hasRight == false) return null;
    if (componentRight) return componentRight;
    return (
      <View style={{ alignItems: "flex-end" }}>
        <TouchableOpacity style={styles.rightElement} onPress={onPressRight || {}} activeOpacity={0.7} >
          <Image source={require('../../../assets/icons/add_circle.png')} style={[styles.menuIcon]} resizeMode='contain' />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={[styles.body, style]}>
      {_renderLeft()}
      {renderTitle}
      {_renderRight()}
    </View>
  );
}


