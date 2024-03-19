import { StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { screenNames } from "../../Constants/navigation";
import Post from "../Post/PostScreen";
import LoginScreen from "../Login/LoginScreen";

const Tab = createMaterialTopTabNavigator();

const Matrimony = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={screenNames.Post} component={Post} />
      <Tab.Screen name={screenNames.Feed1} component={Post} />
    </Tab.Navigator>
  );
};

export default Matrimony;

const styles = StyleSheet.create({});
