import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ModalBox from 'react-native-modalbox';

import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import AppColors from './AppColors';

/**
 * @param {*} isOpen
 * @param {*} height: height of modal
 * @param {*} animationDuration
 * @param {*} leftIconPress
 * @param {*} backdropPressToClose
 * @param {*} showHeader
 * @param {*} title: Sign Up, Verify,....
 * @param {*} swipeToClose
 * @param {*} titleStyle
 * @param {*} backdrop
 */
const Modal = React.forwardRef(
  (
    {
      children,
      isOpen = true,
      animationDuration = 300,
      height,
      width,
      leftIconPress,
      backdropPressToClose = false,
      showHeader = true,
      title,
      backdrop = true,
      swipeToClose = false,
      titleStyle = null,
      backgroundColor,
      style,
      containerStyle,
      ViewDropIconStyle,
      backdropOpacity,
      onClosed,
      showCloseIcon = false,
      backdropContent
    },
    ref,
  ) => {
    return (
      <ModalBox
        onClosed={onClosed}
        style={[styles.modal, { height }, { width }, style]}
        position={'bottom'}
        ref={ref}
        isOpen={isOpen}
        swipeToClose={swipeToClose}
        animationDuration={animationDuration}
        backdropPressToClose={backdropPressToClose}
        swipeThreshold={20}
        backdrop={backdrop}
        swipeArea={20}
        backdropOpacity={backdropOpacity}
        backdropContent={backdropContent}>
        <View style={[styles.container, { backgroundColor }, containerStyle]}>
          <View style={ViewDropIconStyle}>
            <View style={styles.dropIcon} />
          </View>
          {showHeader && (
            <View style={styles.titleContainer}>
              <TouchableOpacity onPress={leftIconPress} style={styles.backBtn}>
                {showCloseIcon ? <Image source={require('../../assets/icons/close.png')} style={{ tintColor: AppColors.black }} /> : <FontAwesome name="arrow-left" color="black" size={22} />}
              </TouchableOpacity>
              <Text style={[styles.titleText, titleStyle]}>{title}</Text>
            </View>
          )}
          {children}
        </View>
      </ModalBox>
    );
  },
);

export default Modal;

const styles = StyleSheet.create({
  dropIcon: {
    width: 38,
    height: 5,
    opacity: 0.2,
    borderRadius: 100,
    backgroundColor: "rgba(144,146,159,1)",
    alignSelf: 'center',
    marginVertical: 12,
    marginBottom: 7,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    backgroundColor: '#eff1f5',
    overflow: 'hidden',
  },
  container: {
    width: '100%',
    padding: 24,
    paddingTop: 0,
  },
  titleContainer: {
    paddingTop: 9,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
    position: 'relative',
  },
  titleText: { fontSize: 18, fontWeight: 'bold' },
  backBtn: {
    position: 'absolute',
    left: 0,
    top: 9,
  },
});
