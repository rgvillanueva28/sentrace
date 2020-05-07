import React, { useEffect } from 'react';
import { StyleSheet, Image, Alert, BackHandler } from 'react-native';
import { Block, theme, Text } from 'galio-framework';
import Header from '../Components/Header';

function Home({ navigation }) {
    let phoneNum = navigation.getParam('phoneNum')
    let fName = navigation.getParam('fName')
    let mName = navigation.getParam('mName')
    let lName = navigation.getParam('lName')
    let email = navigation.getParam('email')

    useEffect(() => {
        const backAction = () => {
            Alert.alert("Exit", "Are you sure you want to exit?", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);


    return (
        <Block safe flex style={styles.mainContainer}>
            <Header title="SENTRACE" bgColor="blue" color="black" />
            <Block style={styles.container}>
                {/* remove texts */}
                <Text color="white" center>
                    {phoneNum}
                </Text>
                <Text color="white" center>
                    {fName}
                </Text>
                <Text color="white" center>
                    {mName}
                </Text>
                <Text color="white" center>
                    {lName}
                </Text>
                <Text color="white" center>
                    {email}
                </Text>

                <Block center>
                    <Image
                        source={require('../Assets/Images/logo200x200.png')}
                        style={styles.imageCenter}
                    ></Image>
                </Block>

                {/* <Text style={styles.titleText}>SENTRACE</Text> */}
                <Text
                    style={styles.contentText}
                    color="white"
                >
                    Lorem ipsum this wil contain the text if there will be any. Project Sentinel's SENTRACE Application
            </Text>
            </Block>
        </Block>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#222',
    },
    container: {
        alignContent: "center",
        justifyContent: "center",
    },
    titleText: {
        fontSize: 20,
        paddingBottom: 20,
    },
    contentText: {
        padding: 20,
        textAlign: "center",
        fontSize: 16,
    },
    imageCenter: {
        alignItems: "center",
        width: 350
    },
})

export default Home