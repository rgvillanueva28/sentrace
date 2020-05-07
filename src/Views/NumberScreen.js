import React, { useState } from 'react'
import {
    StyleSheet,
    Image,
    Dimensions,
    KeyboardAvoidingView,
} from 'react-native'
import {
    Block,
    Input,
    Button,
    Text,
} from 'galio-framework'
import Header from '../Components/Header';

const { height, width } = Dimensions.get('screen');

function NumberScreen ({ navigation }) {
    

    const [ phoneNum, setPhoneNum ] = useState("");

    const goToOTP = () => {
        //if new
        navigation.push("OTPScreen", {phoneNum})

        //else
        //navigation.push("Home");
    }

    return (
        <KeyboardAvoidingView style={styles.wrapper}>
            <Header title="SIGN UP" bgColor="white" color="black"/>
            <Block flex style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../Assets/Images/logo200x200.png')}
                ></Image>
                <Text
                    style={{ fontSize: 21 }}>SENTRACE</Text>

                

                <Block
                    style={styles.inputContainer}
                >
                    <Input
                        placeholder="09123456789"
                        label="Phone number"
                        color="black"
                        rounded
                        borderless
                        right
                        icon="phone"
                        family="antdesign"
                        iconSize={20}
                        autoCompleteType="off"
                        maxLength={11}
                        keyboardType='phone-pad'
                        onChangeText={(val) => setPhoneNum(val)}
                    />
                </Block>

                <Button
                    color="0000FF"
                    size="small"
                    round
                    onPress={goToOTP}
                >CONFIRM</Button>

                {/* <Text>phone = {phoneNum}</Text> */}

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

export default NumberScreen;