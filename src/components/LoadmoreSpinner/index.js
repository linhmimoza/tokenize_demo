import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "./style";
import AppColor from "common/AppColors";
export default class LoadmoreSpinner extends Component {
  static propTypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator color={AppColor.primaryDark} />
      </View>
    );
  }
}
