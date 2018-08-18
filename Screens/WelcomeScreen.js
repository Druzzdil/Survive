import React from 'react';
import {View, Button} from 'react-native';


export default class WelcomeScreen extends React.Component {
    static navigationOptions = {
        header: 'none'
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="Log in" onPress={()=>this.props.navigation.navigate('LoginScreen')}/>
                <Button title="Sign Up in" onPress={()=>this.props.navigation.navigate('SignupScreen')}/>
                <Button title="Drawer" onPress={()=>this.props.navigation.navigate('DrawerNavigator')}/>
            </View>
        );
    }
}