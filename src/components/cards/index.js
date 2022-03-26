import React from "react"
import { StyleSheet, Image, View, Text } from "react-native"

const Card = (props) => {
    const { imageUrl, title, content, rating } = props;
    return (
        <View style={styles.card}>
            <Image source={{ uri: imageUrl }}
                style={styles.imgCard} />
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardText}>
                {content}
            </Text>
            <Text style={styles.rating}>{rating}</Text>
        </View>
    )

}


const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 300,
        marginHorizontal: 6,
        marginBottom: 16,
        padding: 12,
        borderRadius: 16,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#f9f9f4",

    },

    imgCard: {

        width: "100%",
        height: 150,
        borderRadius: 8,
        borderWidth: 1,

    },

    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",

    },

    cardText: {
        fontSize: 16,
        color: "grey",
    },

    rating: {
        fontSize: 16,
        color: "grey",
        marginTop: 14,
    },
})

export default Card