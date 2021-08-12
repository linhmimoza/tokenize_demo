import React, { Component } from "react";
import { View, Pressable, Text, Image, StyleSheet, Platform, ScrollView } from "react-native";
import PropTypes from "prop-types";
import Menu, { MenuItem } from "react-native-material-menu";
import AppStyles from "common/AppStyles";
import AppColors from "common/AppColors";
import AppDimens from "common/AppDimens";
import { ProductType } from 'common/AppConst';

function MenuFilterItem(props) {
  return <MenuItem onPress={() => props.onPress(props.value)} style={{ height: 40 }}>{props.children}</MenuItem>;
}
class CustomMenu extends Component {
  _menu = null;

  _renderMenuItem = (data) => {
    const { onSelect, product, isParent, section, isAttachs, menuItemStyle, isNormal } = this.props;
    return data?.map((i, index) => {
      if (!isParent && section?.productType === 3 && index !== 0 && isAttachs) return null;
      if (isAttachs && (index == 2 || index == 3)) return null;
      return (
        <MenuFilterItem key={index} onPress={() => { onSelect(index, i); this._menu.hide(); }} value={index} >
          <View style={[styles.menuItemStyle, menuItemStyle]}>
            {i.ic &&
              <Image
                style={styles.icCheck}
                resizeMode='contain'
                source={isParent ?
                  ((product?.productType !== 2 && index == 1) ? i?.icNormal : i?.ic)
                  :
                  ((
                    (!product?.isGiftTaken && index === 3) ||
                    (product?.productType === ProductType.PRODUCT_IMEI && index === 1)
                  ) ? i?.icContrast : i?.ic)}
              />
            }
            {isNormal ? <Text style={{ flex: 1, fontSize: 14 }}>{i?.name || i?.fullName}</Text> :
              <Text style={{ flex: 1, fontSize: 14 }}>
                {isParent ? ((product?.productType !== 2 && index == 1) ? i?.nameNormal : i?.name) :
                  ((!product?.isGiftTaken && index === 3 ||
                    (isAttachs && index === 4) || (product?.productType === ProductType.PRODUCT_IMEI && index === 1))
                    ? i?.nameContrast : i?.name)}
              </Text>}
          </View>
        </MenuFilterItem>
      );
    });
  };

  render() {
    const { data, menuStyle, menuLength, showPlaceHolder, placeHolder, selectedValue } = this.props;
    return (
      <Menu ref={ref => this._menu = ref}
        style={[showPlaceHolder ? styles.fullMenuStyle : styles.menuStyle,
          menuStyle, { height: menuLength * 40 + 16, maxHeight: AppDimens.height - 250 }]}
        button={
          <View>
            {showPlaceHolder ?
              <Pressable style={styles.touchZone} onPress={() => this._menu.show()} >
                <Text style={{ flex: 1 }}>{selectedValue || placeHolder}</Text>
                <Image source={require('../../../assets/icons/arrow_drop_down.png')} style={styles.arrow} resizeMode='contain' />
              </Pressable>
              : <Pressable style={styles.plusBtn} onPress={() => this._menu.show()} >
                <Image style={styles.plusIc} source={require('../../../assets/icons/more_vert.png')} resizeMode='contain' />
              </Pressable>}
          </View>
        }>
        <ScrollView bounces={false} >
          {this._renderMenuItem(data)}
        </ScrollView>
      </Menu>
    );
  }
}

CustomMenu.propTypes = {
  data: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
  menuStyle: PropTypes.array,
};

CustomMenu.defaultProps = {
  onKeyboardToggle: () => { },
  menuStyle: []
};

export default CustomMenu;

const styles = StyleSheet.create({
  plusIc: {
    width: 24, height: 24,
  },
  plusBtn: {
    ...AppStyles.centerStyle,
    width: 30,
    height: 40
  },
  menuItemStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
    height: 40,
  },
  icCheck: {
    width: 24, height: 24,
    tintColor: AppColors.darkGrey,
    marginRight: AppDimens.padding.small,
  },
  menuStyle: {
    paddingLeft: Platform.OS == 'ios' ? AppDimens.padding.normal : 0,
    borderRadius: 8,
    paddingVertical: Platform.OS == 'ios' ? AppDimens.padding.small : AppDimens.padding.tiny,
    ...AppStyles.shadowObj(),
    marginTop: 40,
  },
  touchZone: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    width: 28, height: 28
  },
  fullMenuStyle: {
    paddingTop: 6,
    width: AppDimens.width - 32,
    marginLeft: AppDimens.padding.small,
    paddingLeft: Platform.OS == 'ios' ? AppDimens.padding.normal : 0,
  }
});