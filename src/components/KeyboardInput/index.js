import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Platform, TouchableWithoutFeedback, Keyboard  } from 'react-native';

const KeyboardInput = ({children}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          {children}
        </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default KeyboardInput;