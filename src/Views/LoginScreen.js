import React, { useState } from 'react'
import {
    StyleSheet,
    Image,
    Dimensions,
    KeyboardAvoidingView,
    ImageBackground,
    ScrollView
} from 'react-native'
import {
    Block,
    Input,
    Button,
    Text,
    NavBar,
    theme,
} from 'galio-framework'
import Header from '../Components/Header';
import { Assets } from 'react-navigation-stack';

const { height, width } = Dimensions.get('screen');

function NumberScreen({ navigation }) {


    const [phoneNum, setPhoneNum] = useState("");
    const [password, setPassword] = useState("");


    const goToOTP = () => {
        //if new
        navigation.push("OTPScreen", {
            phoneNum: phoneNum,
            newUser: false,
        })

        //else
        //navigation.push("Home");
    }

    return (
        <KeyboardAvoidingView style={styles.wrapper}>
            <Header title="Login" />

            <Block flex style={styles.scrollContainer}>
                <ScrollView style={styles.avoidScroll} behavior="height">
                    <Block flex style={styles.container}>
                        <Image
                            style={styles.logo}
                            source={require('../Assets/Images/logo200x200.png')}
                        ></Image>
                        <Text
                            style={{ fontSize: 21 }}
                        >SENTRACE</Text>

                        <Text p center style={{ paddingTop: 50 }}>
                            Enter your phone number
                </Text>

                        <Block style={styles.inputContainer} >
                            <Input
                                placeholder="09123456789"
                                color={theme.COLORS.INFO}
                                rounded
                                icon="phone"
                                family="antdesign"
                                right
                                iconSize={20}
                                autoCompleteType="off"
                                style={{ borderColor: theme.COLORS.INFO }}
                                maxLength={11}
                                keyboardType='phone-pad'
                                onChangeText={(val) => setPhoneNum(val)}
                            />
                            <Input
                                placeholder="Password"
                                color={theme.COLORS.INFO}
                                rounded
                                password
                                viewPass
                                style={{ borderColor: theme.COLORS.INFO }}
                                maxLength={11}
                                onChangeText={(val) => setPassword(val)}
                            />
                        </Block>

                        <Button
                            color={theme.COLORS.INFO}
                            size="small"
                            round
                            onPress={goToOTP}
                        >CONFIRM</Button>

                        {/* <Text>phone = {phoneNum}</Text> */}

                    </Block>

                </ScrollView>

            </Block>

        </KeyboardAvoidingView>
    )
}



const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        width: width,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        padding: 25,
        paddingTop: 80,
        paddingBottom: 100
    },
    scrollContainer: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    logo: {
        width: 220,
        height: 100,
    },
    inputContainer: {
        alignSelf: "stretch",
        //paddingTop: 30,
        //width: width - 80
    },
    navBar: {
        backgroundColor: theme.COLORS.INFO,

    },
    header: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    avoidScroll: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white",

    },
})

export default NumberScreen;