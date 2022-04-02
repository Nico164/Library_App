import {createStackNavigator} from "@react-navigation/stack"
import React from "react"
import { BookScreen } from "../screens/Book";
import { HomeScreen } from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import { SignInScreen } from "../screens/SignIn";
import { SignUpScreen } from "../screens/SignUp";

const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={
        {
          headerShown: false,
        }
      } />
      <Stack.Screen name="Signin" component={SignInScreen} options={
        {
          headerShown: false,
        }
      }  />
      <Stack.Screen name="Signup" component={SignUpScreen} options={
        {
          headerShown: false,
        }
      }/>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Book" component={BookScreen} />
    </Stack.Navigator>
  );
};
export default MyStack;
