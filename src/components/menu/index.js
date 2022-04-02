import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, Image, TouchableHighlight } from "react-native";


const Menu = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={() => null} style={styles.menuButton} underlayColor="#aeb1b15e">
                <View style={styles.menuItem}>
                    <Image source={{ uri: "https://img.icons8.com/material/344/garage-door.png" }} style={styles.menuImage} />
                    <Text style={styles.menuText}>Home</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate("Book")} style={styles.menuButton} underlayColor="#aeb1b15e">
                <View style={styles.menuItem}>
                    <Image source={{ uri: "https://img.icons8.com/material/344/garage-door.png" }} style={styles.menuImage} />
                    <Text style={styles.menuText}>Books</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => null} style={styles.menuButton} underlayColor="#aeb1b15e">
                <View style={styles.menuItem}>
                    <Image source={{ uri: "https://img.icons8.com/material/344/garage-door.png" }} style={styles.menuImage} />
                    <Text style={styles.menuText}>Downloads</Text>
                </View>
            </TouchableHighlight>
            {props.isLogin && <TouchableHighlight onPress={() => navigation.navigate("Profile")} style={styles.menuButton} underlayColor="#aeb1b15e">
                <View style={styles.menuItem}>
                    <Image source={{ uri: "https://img.icons8.com/material/344/garage-door.png" }} style={styles.menuImage} />
                    <Text style={styles.menuText}>Profile</Text>
                </View>
            </TouchableHighlight>}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        height: 62,
        alignItems: "center",
        borderRadius: 1,
        borderWidth: 1,
        borderColor: "#aeb1b15e"
    },

    menuItem: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    menuImage: {
        height: 20,
        width: 20,
        alignItems: "center"

    },

    menuButton: {
        flex: 1,
        height: 62,
        alignItems: "center",
        justifyContent: "center",

    },

    menuText: {
        fontSize: 10,
    },





})

export default Menu