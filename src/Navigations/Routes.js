import React from "react";
import { screenNames } from "../Constants/navigation";
import LoginScreen from "../Screens/Login/LoginScreen";
import DrawerNavigation from "./DrawerNavigation";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={screenNames.Drawer} component={DrawerNavigation} />
      </Stack.Navigator>
    </>
  );
};

export const AuthStack = ({ promptAsync }) => {
  const LoginWrapper = () => {
    return <LoginScreen promptAsync={promptAsync} />;
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={screenNames.Login} component={LoginWrapper} />
    </Stack.Navigator>
  );
};
