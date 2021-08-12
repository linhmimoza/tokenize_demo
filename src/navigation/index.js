import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ScreenID, { BottomTabID, DrawerID } from "common/ScreenID";
import SplashScreen from "screens/SplashScreen";

import Home from "screens/Home";

import Login from "../screens/Login";
import NavigationService from "services/NavigationService";
import DrawerContent from "components/DrawerContent";
import Market from "screens/Market";
import More from "screens/More";
import Portfolio from "screens/Portfolio";
import Wallets from "screens/Wallets";
import BottomTabContent from "components/BottomTabContent";

const Stack = createStackNavigator();
// const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();
const BottomNavigation = createBottomTabNavigator();

// const Screens = ({ navigation }) => {
//   return (
//     <Stack.Navigator initialRouteName={ScreenID.Home} screenOptions={{ gestureEnabled: false }}
//     // mode="modal"
//     >

//     </Stack.Navigator>
//   );
// };

const drawer = ({ route }) => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name={ScreenID.Home} component={Home} />
    </Drawer.Navigator>
  );
};

const bottomTab = ({ route }) => {
  return (
    <BottomNavigation.Navigator tabBar={props => <BottomTabContent {...props} />}>
      <BottomNavigation.Screen name={ScreenID.Home} component={Home} />
      <BottomNavigation.Screen name={ScreenID.Market} component={Market} />
      <BottomNavigation.Screen name={ScreenID.Wallets} component={Wallets} />
      <BottomNavigation.Screen name={ScreenID.Portfolio} component={Portfolio} />
      <BottomNavigation.Screen name={ScreenID.More} component={More} />
    </BottomNavigation.Navigator>
  );
};
const RootNavigation = () => {
  return (
    <NavigationContainer ref={ref => (NavigationService.navigator = ref)} onStateChange={NavigationService.onStateChange}>
      <Stack.Navigator initialRouteName={ScreenID.SplashScreen} screenOptions={{ gestureEnabled: false }}
      // mode="modal"
      >
        <Stack.Screen name={ScreenID.SplashScreen} component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name={ScreenID.Login} component={Login} options={{ headerShown: false }} />
        <Stack.Screen name={BottomTabID.BottomTabNavigator} component={bottomTab} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
