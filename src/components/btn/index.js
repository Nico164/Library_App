import React from "react";
import { StyleSheet, TouchableHighlight, Text } from "react-native";


const Btn = (props) => {
    const { onPress, title } = props;
    return (
        <TouchableHighlight style={styles.button} onPress={onPress}>
            <Text style={styles.textButton}>{title}
            </Text>
        </TouchableHighlight>

    )
}

const styles = StyleSheet.create({
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

export default Btn