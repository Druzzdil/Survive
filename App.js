import React from 'react';
import LoginScreen from './Components/Screens/LoginScreen'
import WelcomeScreen from './Components/Screens/WelcomeScreen'
import SignupScreen from './Components/Screens/SignupScreen'
import {createDrawerNavigator}from 'react-navigation'
import {Provider} from 'react-redux'
import {StyleSheet} from 'react-native'
import configureStore from 'Components/Store/config'

const store = configureStore()

export default class App extends React.Component {

  render() {
    return (
        <AppNavigator style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}/>
    );
  }
}

const AppNavigator = createDrawerNavigator({
    WelcomeScreen: {screen: WelcomeScreen},
    LoginScreen: { screen: LoginScreen },
    SignupScreen: {screen: SignupScreen},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
