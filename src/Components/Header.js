import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { Block, theme, Text } from 'galio-framework'

const { height, width } = Dimensions.get('screen');

const Header = (props) => {
    return (
        <Block shadow flex row style={[styles.container, {backgroundColor: props.bgColor} ]}>
            <Text
            color={props.color}
            h5
            bold
            >
            {props.title}
            </Text>
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
    },
})