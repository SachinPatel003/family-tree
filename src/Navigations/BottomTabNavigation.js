import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { screenNames } from "../Constants/navigation";
import FeedScreen from "../Screens/Feed/FeedScreen";
import { Entypo } from "react-native-vector-icons";
import Matrimony from "../Screens/Matrimony/MatrimonyScreen";
import { Foundation } from "react-native-vector-icons";
import PostScreen from "../Screens/Post/PostScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={screenNames.Feed}
        component={FeedScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Foundation name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={screenNames.Matrimony}
        component={Matrimony}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={screenNames.Post}
        component={PostScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="squared-plus" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
