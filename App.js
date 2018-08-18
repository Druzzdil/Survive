import React from 'react';
import LoginScreen from './Screens/LoginScreen'
import WelcomeScreen from './Screens/WelcomeScreen'
import SignupScreen from './Screens/SignupScreen'
import DrawerNavigator from './Screens/DrawerNavigator'
import {createStackNavigator}from 'react-navigation'
import {StyleSheet} from 'react-native'

export default class App extends React.Component {

  render() {
    return (
        <AppNavigator style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}/>
    );
  }
}

const AppNavigator = createStackNavigator({
    WelcomeScreen: {
        screen: WelcomeScreen,
        navigationOptions: {
            header: null
        }
    },
    LoginScreen: { screen: LoginScreen },
    SignupScreen: {screen: SignupScreen},
    DrawerNavigator: {screen : DrawerNavigator},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
