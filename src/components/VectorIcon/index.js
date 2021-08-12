import { createIconSetFromIcoMoon } from "react-native-vector-icons";
import { Icon } from "react-native-elements";
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import iconConfig from "customfont/selection.json";
import { Platform } from "react-native";

const isIOS = Platform.OS === 'ios';

export default class VectorIcon extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf([
      "custom",
      "material",
      "material-community",
      "font-awesome",
      "octicon",
      "ionicon",
      "foundation",
      "evilicon",
      "simple-line-icon",
      "zocial",
      "entypo",
      "feather",
      "antdesign",
    ]),
  };
  static defaultProps = {
    type: "material",
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { type, ...other } = this.props;
    if (type === "custom") {
      const IconCustom = isIOS ? createIconSetFromIcoMoon(iconConfig) :
        createIconSetFromIcoMoon(iconConfig, 'icomoon');
      return <IconCustom {...other} />;
    }
    return <Icon type={type} {...other} />;
  }
}
