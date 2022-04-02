import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { P } from "../components/P";
import Scroll from "../components/Scroll";

export const BookScreen = ({ navigation }) => {
  return (
    <Scroll>
      <View style={styles.bookList}>
        <View style={styles.bookItem}>
          <P>The Alchemist</P>
          <P>Paulo Coelho</P>
        </View>
      </View>
    </Scroll>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bookList: {},
});
