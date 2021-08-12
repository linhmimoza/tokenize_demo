import React, { Component } from "react";
import Modal from "react-native-modal";
import AppDimens from "common/AppDimens";
import { isNil } from "lodash";

const deviceWidth = AppDimens.width;
const deviceHeight = AppDimens.height;

export default class BottomSheet extends Component {
  static propTypes = {};
  static defaultProps = {
    enableSwipe: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  show = () => {
    this.setState({
      isVisible: true,
    });
  };

  hide = () => this.setState({
    isVisible: false,
  });

  onModalHide = () => {
    this.props.onModalHide && this.props.onModalHide();
  };

  onBackdropPress = () => {
    if (this.props.enableHide) {
      this.hide();
    }
  };

  render() {
    const { isVisible } = this.state;
    return (
      <Modal
        hideModalContentWhileAnimating={true}
        animationIn={"slideInUp"}
        animationOut={"slideOutDown"}
        isVisible={isVisible}
        style={[styles.container, this.props.containerStyle]}
        onModalHide={this.onModalHide}
        deviceWidth={deviceWidth}
        deviceHeight={deviceHeight}
        onSwipeComplete={this.props.enableSwipe ? this.hide : null}
        swipeDirection={this.props.enableSwipe ? "down" : null}
        onBackdropPress={this.onBackdropPress}
        {...this.props}
      >
        {!isNil(this.props.children) && this.props.children}
      </Modal>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    margin: 0,
    justifyContent: "flex-end",
  },
};
