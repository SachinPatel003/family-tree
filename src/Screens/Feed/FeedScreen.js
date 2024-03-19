import { StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { screenNames } from "../../Constants/navigation";
import PostScreen from "../Post/PostScreen";

const Tab = createMaterialTopTabNavigator();

const screenOptions = {
  tabBarScrollEnabled: true,
  tabBarIndicatorStyle: {
    backgroundColor: "lightblue",
  },
  tabBarStyle: {},
  tabBarItemStyle: {
    width: 100,
  },
  tabBarPressColor: "transparent",
};

const HomeScreen = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name={screenNames.Feed1} component={PostScreen} />
      <Tab.Screen name={screenNames.Feed2} component={PostScreen} />
      <Tab.Screen name={screenNames.Feed3} component={PostScreen} />
      <Tab.Screen name={screenNames.Feed4} component={PostScreen} />
      <Tab.Screen name={screenNames.Feed5} component={PostScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
