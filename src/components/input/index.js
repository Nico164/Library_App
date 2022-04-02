import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = (props) => {
    return <TextInput
        style={styles.input}
        {...props}
    />
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 4,
    },
})

export default Input