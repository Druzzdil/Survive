import React from 'react';
import LoginScreen from './Components/Screens/LoginScreen'
import WelcomeScreen from './Components/Screens/WelcomeScreen'
import SignupScreen from './Components/Screens/SignupScreen'
import {createDrawerNavigator}from 'react-navigation'
import {StyleSheet, View, Modal, Text, Button} from 'react-native';
import {Provider} from 'react-redux'
import configureStore from './Components/Store/config.js'

const store = configureStore();
console.log(store, 'STORE')

export default class App extends React.Component {

  render() {
    return (
        <Provider store={store}>
            <AppNavigator style={styles.container}/>
        </Provider>
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
