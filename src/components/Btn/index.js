import React from "react";
import { TouchableHighlight, Text, StyleSheet } from "react-native";

export default function Btn({
    onPress = () => {},
    children = "Button",
    buttonStyle = {},
    textStyle = {},
}) {
  return (
    <TouchableHighlight onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.textButton, textStyle]}>{children}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    backgroundColor: "#017A9B",
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },

  textButton: {
    color: "white",
  },
});
