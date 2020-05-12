import React, { useState } from 'react'
import {
    StyleSheet,
    Image,
    Dimensions,
    KeyboardAvoidingView,
    Alert
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
    const [phoneNumError, setPhoneNumError] = useState("");

    const goToOTP = () => {
        if (phoneNum.trim().length < 11 || phoneNum.slice(0, 2) != '09') {
            setPhoneNumError('Phone number must be 11 digits and starts with \'09\'');
            //console.log('error: ' + phoneNumError);
            //Alert.alert('Error', 'Phone number must be 11 digits and starts with \'09\'');
            return;
        } else {
            //if new user
            navigation.push("OTPScreen", { phoneNum })

            //else 
            //navigation.push("CompatibilityTestScreen");
        }

    }

    return (
        <KeyboardAvoidingView style={styles.wrapper}>
            <Header title="Sign up" />


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

                <Block
                    style={styles.inputContainer}
                >
                    <Input
                        numeric
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
                        keyboardType='number-pad'
                        bottomHelp
                        help={
                            <Text style={{color:theme.COLORS.ERROR}}>
                                {phoneNumError === '' ? null : phoneNumError}
                            </Text>
                        }
                        onChangeText={(val) => { setPhoneNum(val); setPhoneNumError(''); }}
                    />

                </Block>

                <Button
                    color={theme.COLORS.INFO}
                    size="small"
                    round
                    onPress={goToOTP}
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
    }
})

export default NumberScreen;