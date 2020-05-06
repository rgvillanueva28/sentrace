import React from 'react'
import { StyleSheet, Text, Image } from 'react-native'
import { Block, Input, Button } from 'galio-framework'

const NumberScreen = () => {
    return (
        <Block flex style={styles.container}>
            <Text
                style={{ fontSize: 35 }}>SENTRACE</Text>

            <Image
                style={styles.logo}
                source={require('../Assets/Images/logo200x200.png')}
            ></Image>

            <Input
                placeholder="09123456789"
                type="number-pad"
                label="Phone number"
                rounded
                borderless
                right
                icon="phone"
                family="antdesign"
                iconSize={20}
            />
            <Button
                color="0000FF"
                size="small"
                round
            >CONFIRM</Button>

        </Block>
    )
}

export default NumberScreen

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 25,
        backgroundColor: "#0099ff",
    },
    logo: {
        width: 220,
        height:100,
    },
})
