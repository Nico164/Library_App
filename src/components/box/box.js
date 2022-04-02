import React from "react";
import { StyleSheet, View } from "react-native";
import Menu from "../menu";

const Box = (props) => {
    const { children, title, background,  } = props;
    return (
        <View style={styles.container}>
            {children}
            <Menu isLogin={props.isLogin} />
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        display: "flex",
        flex: 1,
    },
})

export default Box
