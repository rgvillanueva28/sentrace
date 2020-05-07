import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import {
    Input,
    Button,
    Block
} from 'galio-framework';
import { StackActions } from '@react-navigation/native';
import Header from '../Components/Header'

function RegistrationScreen({ navigation }) {
    let phoneNum = navigation.getParam('phoneNum')
    const [fName, setFName] = useState("");
    const [mName, setMName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");

    const goToHome = () => {
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
    }

    return (
        <KeyboardAvoidingView style={styles.wrapper}>
            <Header title="SIGN UP" bgColor="white" color="black" />

            <Block flex safe style={styles.container}>
                <Text> Phone number = {phoneNum} </Text>
                <Input
                    placeholder="Juan"
                    label="First Name"
                    color="black"
                    rounded
                    borderless
                    right
                    autoCompleteType="off"
                    maxLength={30}
                    onChangeText={(val) => setFName(val)}
                />
                <Input
                    placeholder="Dalisay"
                    label="Middle Name"
                    color="black"
                    rounded
                    borderless
                    right
                    autoCompleteType="off"
                    maxLength={30}
                    onChangeText={(val) => setMName(val)}
                />
                <Input
                    placeholder="De La Cruz"
                    label="Last Name"
                    color="black"
                    rounded
                    borderless
                    right
                    autoCompleteType="off"
                    maxLength={30}
                    onChangeText={(val) => setLName(val)}
                />
                <Input
                    placeholder="juandlc99@yahoo.com"
                    label="Email"
                    color="black"
                    type="email-address"
                    rounded
                    borderless
                    right
                    autoCompleteType="off"
                    maxLength={35}
                    onChangeText={(val) => setEmail(val)}
                />
                <Input
                    placeholder="Password"
                    label="Password"
                    color="black"
                    password
                    viewPass
                    rounded
                    borderless
                    right
                    autoCompleteType="off"
                    maxLength={35}
                    onChangeText={(val) => setPasswd(val)}
                />
                <Button
                    color="0000FF"
                    size="small"
                    round
                    style={{marginTop:30}}
                    onPress={goToHome}
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

export default RegistrationScreen;