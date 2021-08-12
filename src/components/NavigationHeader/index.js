import React, { Component } from "react";
import { View, Animated, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./style";
import NavigationService from "services/NavigationService";

export default class NavigationHeader extends Component {
  static propTypes = {
    iconLeft: PropTypes.string,
    titleLeft: PropTypes.string,
    onPressLeft: PropTypes.func,
    iconRight: PropTypes.string,
    titleRight: PropTypes.string,
    onPressRight: PropTypes.func,
    style: PropTypes.object,
    iconLeftStyle: PropTypes.object,
    iconRightStyle: PropTypes.object,
    titleLeftStyle: PropTypes.object,
    titleRightStyle: PropTypes.object,
    componentRight: PropTypes.object,
    componentLeft: PropTypes.object,
    headerStyle: PropTypes.object,
    renderTitle: PropTypes.object,
    animated: PropTypes.bool,
    scrollOffset: PropTypes.object,
    distanceScroll: PropTypes.number,
  };
  static defaultProps = {
    iconLeft: null,
    titleLeft: null,
    onPressLeft: () => { },
    iconRight: null,
    titleRight: null,
    onPressRight: () => { },
    style: {},
    iconLeftStyle: {},
    iconRightStyle: {},
    titleLeftStyle: {},
    titleRightStyle: {},
    componentRight: null,
    componentLeft: null,
    headerStyle: {},
    renderTitle: null,
    animated: true,
    scrollOffset: new Animated.Value(0),
    distanceScroll: 20,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  _renderLeft = () => {
    const {
      isTradeIn,
      componentLeft,
      isAddGive, isAddAttach, isAddProduct, isAddWarranty, isSimpleSearch,
      hasCustomerPhoneNo,
      isQuickSeach,
    } = this.props;
    if (componentLeft && (isTradeIn || isAddGive || isAddAttach || isAddWarranty || isAddProduct || hasCustomerPhoneNo || isSimpleSearch || isQuickSeach)) return componentLeft;
    return (
      <View style={{ alignItems: "flex-start" }}>
        <TouchableOpacity
          style={styles.leftElement}
          onPress={() => NavigationService.openDrawer()}
          activeOpacity={0.7}
        >
          <Image source={require('../../../assets/icons/menu.png')} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>
    );
  };
  _renderRight = () => {
    const {
      // badgeValue,
      onPressRight,
      componentRight,
    } = this.props;
    // console.log('badgeValue: ',badgeValue)
    if (componentRight) return componentRight;
    return (
      <View style={{ alignItems: "flex-end" }}>
        <TouchableOpacity
          style={styles.element}
          onPress={onPressRight}
          activeOpacity={0.7}
        >
          <Image source={require('../../../assets/icons/receipt.png')} style={styles.menuIcon} />
          {/* <View style={styles.badgeStyle}>
            <Text style={{color: AppColors.white}}>{badgeValue}</Text>
          </View> */}
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    const { style, renderTitle } = this.props;
    return (
      <View style={[styles.body, style]}>
        {this._renderLeft()}
        {renderTitle}
        {this._renderRight()}
      </View>
    );
  }
}
