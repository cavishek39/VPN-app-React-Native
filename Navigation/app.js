import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
//import { createStackNavigator } from "@react-navigation/stack";
// import { Dimensions } from "react-native";
// import { Feather } from "@expo/vector-icons";
import Welcome from "../screens/Welcome";
import VPN from "../screens/VPN";
import Screen from "../screens/Screen";

import {
  ProfileScreen,
  MessageScreen,
  ActivityScreen,
  ListScreen,
  ReportScreen,
  SignOutScreen,
} from "../screens/Index";

// import screens

const Screens = createSwitchNavigator({
  Welcome,
  VPN,
  Screen,
});

const DrawerNavigator = createDrawerNavigator({
  ProfileScreen,
  MessageScreen,
  ActivityScreen,
  ListScreen,
  ReportScreen,
  SignOutScreen,
});

export default createAppContainer(Screens, DrawerNavigator);
//export default createAppContainer();
//export default DrawerNavigatorExample;
