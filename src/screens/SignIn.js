import React from "react";
import { Button, TextInput, Text, StyleSheet, View, TouchableHighlight, } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import axios from "axios";
import Btn from "../components/btn";
import Input from "../components/input";
import Scroll from "../components/scroll";


export const SignInScreen = ({navigation}) => {
    function goToSignUp( ) {
        navigation.push("SignUp")
    }

    async function fetchData() {
        try {
         const result = await axios.post("http://localhost:3000/auth/login", {
             email: "Test@mail.com",
             password: "12345"
        })
        console.warn(JSON.stringify(result))
     }catch (error) {
         console.warn(JSON.stringify(error))
 
     }}

    return (
        <Scroll horizontal={false}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Sign In</Text>
                <Text style={styles.headerTextDescription}>Build skills for today, tomorrow, and beyond.
Education to future-proof your career.</Text>
            </View>
            <View style={styles.body}>
                <Input 
                placeholder="Email"
                keyboardType="email-address"
                  />
                <Input
                placeholder="Password"
                secureTextEntry= {true}
                 />
                <Btn
                onPress= {fetchData}
                title= {"SignIn"}/>
                <Btn title="Register" onPress={goToSignUp}/>
            </View>
        </View>
        </Scroll>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        marginTop: 90,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 36,

    },

    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 18, 

    },

    headerTextDescription: {
        fontSize: 16,
        color: "gray",
        textAlign: "center",
    },

    body: {
        flex: 1,


    },

    

    


})