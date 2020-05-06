import React from 'react'
import { StyleSheet, Text, Image } from 'react-native'
import { Block, theme } from 'galio-framework'

const Home = () => {
    return (
        <Block safe flex style={styles.mainContainer}>
            <Image
                source={require('../Assets/Images/logo200x200.png')}
                style={styles.imageCenter}
            ></Image>
            {/* <Text style={styles.titleText}>SENTRACE</Text> */}
            <Text style={styles.contentText}>Lorem ipsum this wil contain the text if there will be any. Project Sentinel's SENTRACE Application</Text>
        </Block>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#222',
        justifyContent: "center",
        alignItems: "center",
    },
    titleText: {
        fontSize: 20,
        paddingBottom: 20,
        color: theme.COLORS.WHITE,
    },
    contentText: {
        fontSize: 14,
        padding: 20,
        color: theme.COLORS.WHITE,
        textAlign: "center"
    },
    imageCenter: {
        alignContent: "center",
    },
})

export default Home
