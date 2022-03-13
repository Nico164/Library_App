import React from "react"
import { StyleSheet, Text, View } from "react-native"

export const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>About</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.left}></View>
                <View style={styles.right}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingTop: 40,
        paddingHorizontal: 0,
    },


    header: {
        height: 60,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
    },

    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },

    body: {
        flex: 9,
        flexDirection: "row",
        backgroundColor: "green",
    },

    left: {
        flex: 9,
        backgroundColor: "red",
    },

    right: {
        flex: 9,
        backgroundColor: "yellow",
    },




});