import {createStackNavigator} from "@react-navigation/stack"
import React from "react"
import { HomeScreen } from "../screens/Home";
import { SignInScreen } from "../screens/SignIn";
import { SignUpScreen } from "../screens/SignUp";

const Stack = createStackNavigator();
const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="SignIn" component={SignInScreen}/>
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
        </Stack.Navigator>
    )
}
export default MyStack;