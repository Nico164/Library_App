import { NavigationContainer } from "@react-navigation/native";
import { usePreventScreenCapture } from "expo-screen-capture";
import React from "react";
import { AppContextProvider } from "./src/data/App.context";
import MyStack from "./src/routes/StackRoutes";

export default function App() {
  usePreventScreenCapture();
  return (
    <AppContextProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </AppContextProvider>
  );
}
