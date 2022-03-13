import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { AboutScreen } from './src/screens/about';
import { SignUpScreen } from './src/screens/SignUp';
import { SignInScreen } from './src/screens/SignIn';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SignInScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
