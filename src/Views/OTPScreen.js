import React, { Component, useState } from 'react';
import {
    KeyboardAvoidingView,
    StyleSheet,
    Alert,
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
    const [OTP, setOTP] = useState("");
    const [OTPError, setOTPError] = useState("");


    const goToRegistration = () => {
        if (OTP.trim().length < 6) {
            setOTPError('OTP must be 6 digits.\nTemporary. Still don\'t know the format of the OTP')
            //Temporary. I still don't know the format of the OTP
            //Alert.alert('Error', 'OTP must be 6 digits.\nTemporary. Still don\'t know the format of the OTP');
            return;
        } else {
            navigation.push("RegistrationScreen", { phoneNum })
        }
    }

    return (
        <KeyboardAvoidingView style={styles.wrapper}>
            <Header title="Sign up" />

            <Block flex style={styles.container}>

                <Text p center>
                    Please enter the One Time Pin (OTP) sent to your phone {phoneNum}
                </Text>
                {/* <Text> OTP Screen = {OTP} </Text> */}
                <Input
                    placeholder="123456"
                    color={theme.COLORS.INFO}
                    style={{ borderColor: theme.COLORS.INFO }}
                    rounded
                    autoCompleteType="off"
                    maxLength={6}
                    keyboardType={'numeric'}
                    center
                    bottomHelp
                    help={
                        <Text style={{color:theme.COLORS.ERROR}}>
                            {OTPError === '' ? null : OTPError}
                        </Text>
                    }
                    onChangeText={(val) => { setOTP(val); setOTPError('') }}
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