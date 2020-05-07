import React, { Component, useState } from 'react';
import {
    KeyboardAvoidingView,
    StyleSheet
} from 'react-native';
import {
    Text,
    Input,
    Button,
    Block
} from 'galio-framework';
import Header from '../Components/Header'

function OTPScreen({ navigation }) {
    let phoneNum = navigation.getParam('phoneNum')
    const [OTP, setOTP] = useState("");

    const goToRegistration = () => {
        //if wrong OTP: throw an error message
        //if else new user
        navigation.push("RegistrationScreen", { phoneNum })

        //else (existing user)
        //navigation.push("Home");
    }

    return (
        <KeyboardAvoidingView style={styles.wrapper}>
            <Header title="SIGN UP" bgColor="white" color="black" />

            <Block flex style={styles.container}>

                <Text center> Please enter the One Time Pin (OTP) sent to your phone {phoneNum} </Text>
                {/* <Text> OTP Screen = {OTP} </Text> */}
                <Input
                    placeholder="123456"
                    label="OTP"
                    color="black"
                    rounded
                    borderless
                    right
                    autoCompleteType="off"
                    maxLength={6}
                    keyboardType={'numeric'}
                    onChangeText={(val) => setOTP(val)}
                />
                <Button
                    color="0000FF"
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
        backgroundColor: "#0099ff",
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