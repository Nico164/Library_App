import React from "react"
import { StyleSheet, Image, View, Text } from "react-native"

const Chips = (props) => {
    const { imageUrl, title, background,  } = props;
    return (
        <View style={[styles.categoryItem, {backgroundColor: background}]}>
            <Image source={{ uri:imageUrl }}
                style={styles.imgIcon} />
            <Text style={styles.categoryItemText}>{title}</Text>

        </View>
    )}


const styles= StyleSheet.create ({
    categoryItem: {
        width: 200,
        flexDirection: "row",
        alignItems: "center",
        margin: 2,
        padding: 4,
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
})

export default Chips


