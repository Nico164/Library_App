import { NavigationHelpersContext } from "@react-navigation/native"
import React from "react"
import { StyleSheet, Button, Text, View, TextInput, Image, } from "react-native"
import axios from "axios"

export const HomeScreen = ({ navigation }) => {
    function goToSignIn() {
        navigation.push("SignIn")
    }

    async function fetchData() {
        try {
            const result = await axios.post("https://shielded-basin-25655.herokuapp.com/api/members/signin", {
                grant_type: "password",
                username: "admin@asrul.dev",
                password: "rahasia"
            })
            console.warn(JSON.stringify(result))
        } catch (error) {
            console.warn(error)

        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.greeting}>
                <Text style={styles.greetingText}>Hey, Nicolas 👋</Text>
            </View>
            <View style={styles.search}>
                <TextInput
                    style={styles.input}
                    placeholder="what do you want to learn?"
                />
            </View>
            <View style={styles.banners}>
                <Image source={{ uri: "https://images.unsplash.com/photo-1647591609971-7ebb33c0f98a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2924&q=80" }} style={styles.imgBanner} />
            </View>
            <View style={styles.category}>
                <View style={styles.categoryHeader}>
                    <Text style={styles.categoryHeaderText}>Categories</Text>
                    <Text style={styles.seeAll}>See All</Text>
                </View>
                <View style={styles.categoryBody}>
                    <View style={styles.categoryItem}>
                        <Image source={{uri : "https://img.icons8.com/material/344/pied-piper-season-3.png"}}
                        style={styles.imgIcon}/>
                        <Text style={styles.categoryItemText}>Design</Text>

                    </View>
                </View>


            </View>

            <Button title="Sign In" onPress={goToSignIn} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 0,
    },

    greeting: {
        marginTop: 10,
        paddingHorizontal: 20,
    },

    greetingText: {
        fontSize: 32,
        fontWeight: "bold",
    },

    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,

    },

    imgBanner: {
        width: "100%",
        height: 200,
        marginVertical: 8,

    },

    categoryHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginVertical: 10,
        alignItems: "center",
    },

    categoryHeaderText: {
        fontSize: 24,
        fontWeight: "bold",
    },

    categoryItem: {
        width: 200,
        flexDirection: "row",
        alignItems: "center",
        margin: 2,
        padding: 4,
        backgroundColor: "pink",
    },

    imgIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },

    categoryItemText: {
        fontSize: 18,
        marginLeft: 10,
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




})