import React from 'react';
import { View, Button} from 'react-native';
import {createDrawerNavigator} from 'react-navigation'
import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";


const AppDrawerNavigator = new createDrawerNavigator({
    WelcomeScreen: {
        screen: WelcomeScreen,
    },
    LoginScreen: { screen: LoginScreen },
    SignupScreen: {screen: SignupScreen},
})

export default AppDrawerNavigator;