import React from "react";
import "react-native-gesture-handler";
// import { Provider } from "react-redux";
// import { store } from "./src/Store/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MenuProvider } from "react-native-popup-menu";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import Success from "./src/Components/Comman/Toasts/Success";
import Error from "./src/Components/Comman/Toasts/Error";
import AuthRouter from "./src/Navigations/AuthRouter";

export default function App() {
  return (
    <React.Fragment>
      {/* <SafeAreaView> */}
      {/* <Provider store={store}> */}
      <GestureHandlerRootView style={{ flex: 1 }}>
        <MenuProvider>
          <NavigationContainer>
            <AuthRouter />
          </NavigationContainer>
        </MenuProvider>
      </GestureHandlerRootView>
      {/* </Provider> */}
      <Toast
        config={{
          success: (props) => <Success {...props} />,
          error: (props) => <Error {...props} />,
        }}
      />
      {/* </SafeAreaView> */}
    </React.Fragment>
  );
}
