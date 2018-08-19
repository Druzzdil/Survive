import React from 'react';
import { View, Text, Button} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';


export default class SignupScreen extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Signup</Text>
                <Button title="Log in" onPress={()=>this.props.navigation.navigate('LoginScreen')}/>
                <Text>Pomaranski App</Text>
            </View>
        );
    }
}