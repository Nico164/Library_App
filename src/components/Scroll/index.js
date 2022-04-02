import React from "react";
import { ScrollView, StyleSheet } from "react-native";

const Scroll = (props) => {
  const { style, children } = props;
  return (
    <ScrollView contentContainerStyle={[styles.container, style]} {...props} showsHorizontalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
});

export default Scroll;
