import React from 'react'
import { StyleSheet, Dimensions, ImageBackground } from 'react-native'
import { Block, Text, NavBar, theme } from 'galio-framework'

const { height, width } = Dimensions.get('screen');

const Header = (props) => {
    return (
        <Block style={styles.container}>
            <ImageBackground source={require('../Assets/Images/headerBG.png')} style={styles.header}>
            <NavBar
                title={props.title}
                titleStyle={{ fontSize: 20 }}
                transparent
            ></NavBar>
            </ImageBackground>
        </Block>

    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        minHeight: 60,
        maxHeight: 60,
        width: width,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1
    },
    header: {
        width: width,
        backgroundColor: "#f5f5f5",
    },
})