import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from 'actions';
import AppStyles from 'common/AppStyles';
import styles from './style';

const ic = {
  'Home': require('../../../assets/icons/home_ic.png'),
  'Market': require('../../../assets/icons/markets_ic.png'),
  'Wallets': require('../../../assets/icons/wallets_ic.png'),
  'Portfolio': require('../../../assets/icons/portfolio_ic.png'),
  'More': require('../../../assets/icons/more_ic.png')
};

function BottomTabContent(props) {
  const { state, descriptors, navigation } = props;
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {

        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
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
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, ...AppStyles.centerStyle, paddingTop: 12, }}
          >
            <Image source={ic[label]} style={{ tintColor: isFocused ? '#597AF4' : '#9194BB'}}/>
            <Text style={{ color: isFocused ? '#597AF4' : '#9194BB', marginTop: 5 }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const mapStateToProps = (state) => ({
  userInfo: state.userReducer.userInfo
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BottomTabContent);