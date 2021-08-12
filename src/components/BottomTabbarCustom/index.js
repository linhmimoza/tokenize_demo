import React from "react";
import { Component } from "react";
import {
  TouchableOpacity, Text, View, StyleSheet, Platform, Keyboard
} from "react-native";
import AppDimens from "common/AppDimens";
import AppFonts from "common/AppFonts";

export default class BottomTabbarCustom extends Component {
  state = {
    visible: true,
  };

  constructor() {
    super();
  }

  visible = visible => () => this.setState({ visible });

  componentDidMount() {
    if (Platform.OS === "android") {
      this.keyboardEventListeners = [
        Keyboard.addListener("keyboardDidShow", this.visible(false)),
        Keyboard.addListener("keyboardDidHide", this.visible(true)),
      ];
    }
  }

  componentWillUnmount() {
    this.keyboardEventListeners &&
      this.keyboardEventListeners.forEach(eventListener =>
        eventListener.remove()
      );
  }

  renderTabBarButton(route, index: any) {
    const {
      activeTintColor,
      inactiveTintColor,
      navigation,
      state
    } = this.props;
    const isFocused = state.index === index;
    const color = isFocused ? activeTintColor : inactiveTintColor;
    const label = route?.name;

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    };

    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: route.key,
      });
    };

    return (
      <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        style={[styles.tabBarButton]}
        key={route?.name}
      >
        {/* {renderIcon({
          route,
          tintColor: color,
          focused: currentIndex === index,
          index: index,
        })} */}
        <Text style={[styles.tabBarButtonText, { color }]}>{label}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    if (!this.state?.visible) {
      return null;
    }
    const { style, state, } = this.props;
    const tabBarButtons = state?.routes.map(
      this.renderTabBarButton.bind(this)
    );
    return <View style={[styles.tabBar, style]}>{tabBarButtons}</View>;
  }
}

const styles = StyleSheet.create({
  tabBar: {
    paddingTop: AppDimens.padding.regular,
    flexDirection: "row",
    alignItems: "center",
    height: AppDimens.tabbarHeight + AppDimens.extraBottom,
    width: "100%",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "rgba(0, 0, 0, .3)",
  },
  tabBarButtonText: {
    fontSize: 10,
    fontFamily: AppFonts.Regular,
    textAlign: "center",
    marginTop: 3,
    // color: AppColors.primary,
  },
  tabBarButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    paddingBottom: AppDimens.extraBottom,
  },
});
