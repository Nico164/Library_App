import React from "react";
import { Button, TextInput, Text, StyleSheet, View, TouchableHighlight, } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import axios from "axios";


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
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Sign In</Text>
                <Text style={styles.headerTextDescription}>Build skills for today, tomorrow, and beyond.
Education to future-proof your career.</Text>
            </View>
            <View style={styles.body}>
                <TextInput 
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                  />
                <TextInput 
                style={styles.input}
                placeholder="Password"
                secureTextEntry= {true}
                 />
                <TouchableHighlight onPress={fetchData}>
                    <View style={styles.button}>
                        <Text style={styles.textButton}>SignIn</Text>
                    </View>
                </TouchableHighlight>
                <Button title="Register" onPress={goToSignUp}/>
            </View>
        </View>
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

    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 4,
    },

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
        color: "white"
    }


})