import React from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import AppStyles from "common/AppStyles";

export default class ComponentLoading extends React.Component {
  render() {
    const { visible, textContent } = this.props;

    if (!visible) return null;

    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <ActivityIndicator color={"white"} size={"large"} />
          <Text style={[styles.textStyle, this.props.textStyle]}>{textContent || 'Loading...'} </Text>
        </View>
      </View>
    );
  }
}

const styles = {
  textStyle: { ...AppStyles.spinnerTextStyle },
  container: {
    ...StyleSheet.absoluteFill,
    zIndex: 1000,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.15)",
  },
};
