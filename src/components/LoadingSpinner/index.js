import React from "react";
import AppColors from "common/AppColors";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";

const api = {};
export const LoadingSpinnerService = api;

export class LoadingSpinner extends React.Component {
  constructor(props) {
    super(props);

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = {
      visible: false,
      params: null,
    };
  }

  componentDidMount() {
    api.show = this.show;
    api.hide = this.hide;
    api.toggle = this.toggle;
  }

  show(params) {
    if (!this.state.visible) {
      this.setState({
        visible: true,
        params,
      });
    }
  }

  hide() {
    if (this.state.visible) {
      this.setState({
        visible: false,
        params: null,
      });
    }
  }

  toggle() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const { visible, params } = this.state;
    const title = params && params.title ? params.title : null;

    if (!visible) {
      return null;
    }
    const { container, wrapper, textStyle } = styles;
    return (
      <View style={container}>
        <View
          style={wrapper}>
          <ActivityIndicator
            color={"white"}
            size={"large"}
          />
          {title && <Text style={textStyle}>{title}</Text>}
        </View>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 12,
    color: AppColors.white,
    fontWeight: "bold",
    paddingTop: 20,
  },
  container: {
    ...StyleSheet.absoluteFill,
    zIndex: 1000,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
};
