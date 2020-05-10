import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../Views/Home';
import NumberScreen from '../Views/NumberScreen';
import OTPScreen from '../Views/OTPScreen';
import RegistrationScreen from '../Views/RegistrationScreen';
import LoginScreen from '../Views/LoginScreen';

const screens = {
    NumberScreen: {
        screen: NumberScreen
    },
    LoginScreen: {
        screen: LoginScreen
    },
    OTPScreen: {
        screen: OTPScreen
    },
    RegistrationScreen: {
        screen: RegistrationScreen
    },
    Home: {
        screen: Home,
    }
}

const RouteStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerShown: false
    }
});
export default createAppContainer(RouteStack);