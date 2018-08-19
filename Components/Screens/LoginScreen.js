import React from 'react';
import { View, Text, Button} from 'react-native';

export default class LoginScreen extends React.Component {


    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>This is login screen 00000</Text>
                    <Button title="Signup login" onPress={()=>this.props.navigation.navigate('SignupScreen')}/>
            </View>
        );
    }
}

