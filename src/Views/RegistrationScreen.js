import React, { Component, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView,
    Alert,
    ToastAndroid,
} from 'react-native';
import {
    Input,
    Button,
    Block,
    NavBar,
    theme,
} from 'galio-framework';
import { StackActions } from '@react-navigation/native';
import Header from '../Components/Header'

function RegistrationScreen({ navigation }) {
    let phoneNum = navigation.getParam('phoneNum')
    let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let validEmailFlag = false;
    let validNameFlag = false;

    const [fName, setFName] = useState("");
    const [mName, setMName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");

    const [fNameError, setFNameError] = useState("");
    const [mNameError, setMNameError] = useState("");
    const [lNameError, setLNameError] = useState("");
    const [emailError, setEmailError] = useState("");

    const goToHome = () => {
        nameValidate()
        emailValidate()

        if (validNameFlag && validEmailFlag) {
            //if new
           
            navigation.push("Home", {
                fName: fName,
                mName: mName,
                lName: lName,
                email: email,
                phoneNum: phoneNum,
            })

            //else
            //navigation.push("Home");
        } else {
            ToastAndroid.showWithGravityAndOffset('Please check fields with error.', ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 200)
        }

    }

    const emailValidate = () => {
        if (email.trim() === '') {
            setEmailError('Please enter your Email')
            validEmailFlag = false;
        } else if (emailRegEx.test(email.trim()) === false) {
            setEmailError('Invalid Email format')
            validEmailFlag = false;
        } else {
            validEmailFlag = true;
        }
    }

    const nameValidate = () => {
        if (fName.trim() === '') {
            setFNameError('Please enter your First Name');
            validNameFlag = false;
        }
        if (mName.trim() === '') {
            setMNameError('Please enter your Middle Name');
            validNameFlag = false;
        }
        if (lName.trim() === '') {
            setLNameError('Please enter your Last Name');
            validNameFlag = false;
        }
        else {
            setFNameError('');
            setMNameError('');
            setLNameError('');
            validNameFlag = true;
        }
    }


    return (
        <KeyboardAvoidingView style={styles.wrapper}>
            <Header title="Sign up" />

            <ScrollView style={styles.avoidScroll} behavior="height">
                <Block flex center style={styles.container}>
                    <Input
                        placeholder="Juan"
                        label="First Name"
                        color={theme.COLORS.INFO}
                        style={{ borderColor: theme.COLORS.INFO }}
                        rounded
                        autoCompleteType="off"
                        maxLength={30}
                        bottomHelp
                        help={
                            <Text style={{color:theme.COLORS.ERROR}}>
                                {fNameError === '' ? null : fNameError}
                            </Text>
                        }
                        onChangeText={(val) => { setFName(val); setFNameError(''); }}
                    />
                    <Input
                        placeholder="Dalisay"
                        label="Middle Name"
                        color={theme.COLORS.INFO}
                        style={{ borderColor: theme.COLORS.INFO }}
                        rounded
                        autoCompleteType="off"
                        maxLength={30}
                        bottomHelp
                        help={
                            <Text style={{color:theme.COLORS.ERROR}}>
                                {mNameError === '' ? null : mNameError}
                            </Text>
                        }
                        onChangeText={(val) => { setMName(val); setMNameError(''); }}
                    />
                    <Input
                        placeholder="De La Cruz"
                        label="Last Name"
                        color={theme.COLORS.INFO}
                        style={{ borderColor: theme.COLORS.INFO }}
                        rounded
                        autoCompleteType="off"
                        maxLength={30}
                        bottomHelp
                        help={
                            <Text style={{color:theme.COLORS.ERROR}}>
                                {lNameError === '' ? null : lNameError}
                            </Text>
                        }
                        onChangeText={(val) => { setLName(val); setLNameError(''); }}
                    />
                    <Input
                        placeholder="juandlc99@yahoo.com"
                        label="Email"
                        type="email-address"
                        color={theme.COLORS.INFO}
                        style={{ borderColor: theme.COLORS.INFO }}
                        rounded
                        autoCompleteType="off"
                        maxLength={35}
                        bottomHelp
                        help={
                            <Text style={{color:theme.COLORS.ERROR}}>
                                {emailError === '' ? null : emailError}
                            </Text>
                        }
                        onChangeText={(val) => { setEmail(val); setEmailError(''); }}
                    />
                    <Button
                        color={theme.COLORS.INFO}
                        size="small"
                        round
                        style={{ marginTop: 30 }}
                        onPress={goToHome}
                    >CONFIRM</Button>

                </Block>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    avoidScroll: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white",
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        padding: 25,
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

export default RegistrationScreen;