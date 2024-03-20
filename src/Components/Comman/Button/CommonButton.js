import React, { JSX } from "react";
import { Pressable, StyleSheet } from "react-native";
import { colors } from "../../../Constants/colors";

const CommonButton = ({
  additionalSyle,
  pressHandler,
  isLoading,
  children,
}) => {
  return (
    <Pressable
      disabled={isLoading}
      onPress={pressHandler}
      style={[
        styles.buttonView,
        additionalSyle,
        { opacity: isLoading ? 0.8 : 1 },
      ]}
    >
      {children}
    </Pressable>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: colors.midnightBlue,
    borderRadius: 12,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
});
