import React from 'react';
import { View, Text, Button, TouchableHighlight} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';


export default class SignupScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Signup Now </Text>
                <Text>This is awesome</Text>
            </View>
        );
    }
}