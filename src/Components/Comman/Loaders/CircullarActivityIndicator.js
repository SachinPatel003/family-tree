import React, { JSX } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { colors } from "../../../Constants/colors";

const CircullarActivityIndicator = () => {
  return (
    <View style={[styles.container]}>
      <ActivityIndicator size="large" color={colors.midnightBlue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99999,
    position: "absolute",
  },
});
export default CircullarActivityIndicator;
