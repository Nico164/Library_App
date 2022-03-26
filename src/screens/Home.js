import { NavigationHelpersContext } from "@react-navigation/native"
import React from "react"
import { StyleSheet, Button, Text, View, TextInput, Image, } from "react-native"
import axios from "axios"
import Scroll from "../components/scroll"
import Card from "../components/cards"
import Chips from "../components/chips"
import Input from "../components/input"
import Btn from "../components/btn"


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
        <Scroll horizontal={false}>
            <View style={styles.container}>
                <View style={styles.greeting}>
                    <Text style={styles.greetingText}>Hey, Nicolas 👋</Text>
                </View>
                <View style={styles.search}>
                    <Input
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
                        <Scroll horizontal>
                            <Chips
                                imageUrl={"https://img.icons8.com/material/344/pied-piper-season-3.png"}
                                background={"green"}
                                title={"design"}
                            />
                            <Chips
                                imageUrl={"https://img.icons8.com/material/344/pied-piper-season-3.png"}
                                background={"red"}
                                title={"design"}
                            />
                            <Chips
                                imageUrl={"https://img.icons8.com/material/344/pied-piper-season-3.png"}
                                background={"yellow"}
                                title={"design"}
                            />
                        </Scroll>
                    </View>


                </View>
                <View style={styles.category}>
                    <View style={styles.categoryHeader}>
                        <Text style={styles.categoryHeaderText}>Featured</Text>
                        <Text style={styles.seeAll}>See All</Text>
                    </View>
                </View>
                <Scroll horizontal>
                    <Card
                        title={"Data Engineer"}
                        content={"collaboration with insight"}
                        rating={"⭐️⭐️ 2.4 (1500)"}
                        imageUrl={"https://images.unsplash.com/photo-1647591609971-7ebb33c0f98a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2924&q=80"}
                    />
                    <Card
                        title={"Data Analyst"}
                        content={"collaboration with Kaggle"}
                        rating={"⭐️⭐️ 4.5 (2300)"}
                        imageUrl={"https://images.unsplash.com/photo-1647591609971-7ebb33c0f98a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2924&q=80"}
                    />
                    <Card
                        title={"Design"}
                        content={"collaboration with people all around the world to make this work"}
                        rating={"⭐️⭐️⭐️ 3.4 (1500)"}
                        imageUrl={"https://images.unsplash.com/photo-1647591609971-7ebb33c0f98a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2924&q=80"}
                    />

                </Scroll>

                <Btn title="Sign In" onPress={goToSignIn} />

            </View>
        </Scroll>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 0,
    },

    greeting: {
        marginTop: 40,
        paddingHorizontal: 20,
    },

    greetingText: {
        fontSize: 32,
        fontWeight: "bold",
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