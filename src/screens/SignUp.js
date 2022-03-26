import React from "react";
import { TextInput, Text, StyleSheet, View, TouchableHighlight, } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import Btn from "../components/btn";
import Input from "../components/input";
import Scroll from "../components/scroll";


export const SignUpScreen = () => {
    return (
        <Scroll horizontal={false}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Create Account</Text>
                <Text style={styles.headerTextDescription}>Build skills for today, tomorrow, and beyond.
Education to future-proof your career.</Text>
            </View>
            <View style={styles.body}>
                <Input 
                placeholder="Full Name" 
                keyboardType="default"
                />
                <Input 
                placeholder="Email"
                keyboardType="email-address"
                  />
                <Input 
                placeholder="Password"
                secureTextEntry= {true}
                 />
                <Btn 
                onPress={()=> null}
                title={"Sign Up"}/>

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