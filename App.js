import React from "react";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MenuProvider } from "react-native-popup-menu";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import Success from "./src/Components/Comman/Toasts/Success";
import Error from "./src/Components/Comman/Toasts/Error";
import AuthRouter from "./src/Navigations/AuthRouter";

export default function App() {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <MenuProvider>
          <NavigationContainer>
            <AuthRouter />
          </NavigationContainer>
        </MenuProvider>
      </GestureHandlerRootView>
      <Toast
        config={{
          success: (props) => <Success {...props} />,
          error: (props) => <Error {...props} />,
        }}
      />
    </>
  );
}
