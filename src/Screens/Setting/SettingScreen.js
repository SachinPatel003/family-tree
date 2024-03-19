import { Button, StyleSheet, View } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../../../firebaseConfig";
import { signOut } from "firebase/auth";

const SettingScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Sign Out"
        onPress={async () => {
          await signOut(auth);
          await AsyncStorage.removeItem("@user");
        }}
      />
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
