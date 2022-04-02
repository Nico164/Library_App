import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { P } from "../components/P";
import Scroll from "../components/Scroll";


export const BookScreen = ({navigation}) => {
    return  (
        <Scroll>
        <View style={styles.booklist}>
            <View style={styles.bookItem}>
                <Image source={{uri : "https://images.unsplash.com/photo-1648818801846-bc6c46d58f80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"}} style={styles.avatar}/>
                <P>Hamlet</P>
                <P>Shakespear</P>
            </View>
        </View>
        </Scroll>
    )
}

const styles = StyleSheet.create ({
    container : {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    booklist: {

    },
})