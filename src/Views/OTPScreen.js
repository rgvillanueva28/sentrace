import React, { Component, useState } from 'react';
import {
    KeyboardAvoidingView,
    StyleSheet
} from 'react-native';
import {
    Text,
    Input,
    Button,
    Block,
    NavBar,
    theme
} from 'galio-framework';
import Header from '../Components/Header'

function OTPScreen({ navigation }) {
    let phoneNum = navigation.getParam('phoneNum')
    let newUser = navigation.getParam('newUser')
    const [OTP, setOTP] = useState("");

    const goToRegistration = () => {
        //if wrong OTP: throw an error message
        if (newUser == true) {
            navigation.push("RegistrationScreen", { phoneNum })
        } else {
            navigation.push("Home", { phoneNum })
        }

        //else (existing user)
        //navigation.push("Home");
    }

    return (
        <KeyboardAvoidingView style={styles.wrapper}>
            <Header title="Sign up"/>

            <Block flex style={styles.container}>

                <Text p center>
                    Please enter the One Time Pin (OTP) sent to your phone {phoneNum}
                </Text>
                {/* <Text> OTP Screen = {OTP} </Text> */}
                <Input
                    placeholder="123456"
                    label="OTP"
                    color={theme.COLORS.INFO}
                    style={{ borderColor: theme.COLORS.INFO }}
                    rounded
                    autoCompleteType="off"
                    maxLength={6}
                    keyboardType={'numeric'}
                    center
                    onChangeText={(val) => setOTP(val)}
                />
                <Button
                    color={theme.COLORS.INFO}
                    size="small"
                    round
                    onPress={goToRegistration}
                >CONFIRM</Button>
            </Block>

        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        padding: 25,
        paddingBottom: 100
    },
    logo: {
        width: 220,
        height: 100,
    },
    inputContainer: {
        alignSelf: "stretch",
        paddingTop: 30,
        //width: width - 80
    }
})

export default OTPScreen;