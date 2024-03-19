import { StyleSheet } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { screenNames } from "../Constants/navigation";
import BottomTabNavigation from "./BottomTabNavigation";
import ProfileScreen from "../Screens/Profile/ProfileScreen";
import FamilyTree from "../Screens/FamilyTree/FamilyTree";
import SettingScreen from "../Screens/Setting/SettingScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={screenNames.BottomTab}
        component={BottomTabNavigation}
        options={{ drawerLabel: "Home", title: "" }}
      />
      <Drawer.Screen name={screenNames.Profile} component={ProfileScreen} />
      <Drawer.Screen name={screenNames.FamilyTree} component={FamilyTree} />
      <Drawer.Screen name={screenNames.Setting} component={SettingScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
