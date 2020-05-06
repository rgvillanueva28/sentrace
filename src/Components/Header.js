import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Block, theme } from 'galio-framework'

const Header = (props) => {
    return (
        <Block shadow flex row style={styles.container}>
            <Text style={styles.titleText}>{props.title}</Text>
        </Block>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        maxHeight: 60,
        minWidth: "100%",
        backgroundColor: "#0099ff",
        justifyContent: "center",
        alignItems: "center",
    },
    titleText: {
        color: theme.COLORS.WHITE,
        fontSize: 22,
        fontWeight: "bold"
    }
})
