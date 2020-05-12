import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Alert, BackHandler, ImageBackground } from 'react-native';
import { Block, theme, Text, NavBar, Button } from 'galio-framework';
import Header from '../Components/Header';
import Tracer from '../Components/Tracer'

function Home({ navigation }) {
    let phoneNum = navigation.getParam('phoneNum')
    let fName = navigation.getParam('fName')
    let mName = navigation.getParam('mName')
    let lName = navigation.getParam('lName')
    let email = navigation.getParam('email')

    const [enableBtn, setEnableBtn] = useState(false)

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
            {/* <Header title="SENTRACE" /> */}
            <ImageBackground source={require('../Assets/Images/BG.png')} style={styles.imgBG} imageStyle={{ opacity: 0.5 }}>
                <Block style={styles.container}>

                    <Block center style={styles.imageContainer}>
                        <Image
                            source={require('../Assets/Images/logo200x200.png')}
                            style={styles.imageCenter}
                        ></Image>
                    </Block>


                    <Block center>
                        {/* <Text style={styles.titleText}>SENTRACE</Text> */}
                        <Text center h1>
                            SENTRACE
                    </Text>
                        <Text center p>Please enable Location and Bluetooth Permissions</Text>
                        <Button
                            color={theme.COLORS.INFO}
                            size="small"
                            round
                            style={{ marginTop: 30 }}
                            onPress={() => setEnableBtn(true)}
                        >ENABLE</Button>
                        {enableBtn ? <Tracer /> : null}
                    </Block>




                </Block>
            </ImageBackground>

        </Block>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
    },
    container: {
        alignContent: "center",
        justifyContent: "center",
    },
    imageContainer: {
        width: "100%",
        paddingTop: 50,
        backgroundColor: "rgba(255,255,255,0.75)",
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
    imgBG: {
        height: "100%",
        backgroundColor: "#ffffff",
    },
})

export default Home