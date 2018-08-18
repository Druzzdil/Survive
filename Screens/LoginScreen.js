import React from 'react';
import { View, Text, Button} from 'react-native';

export default class LoginScreen extends React.Component {


    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>This is login screen</Text>
                    <Button title="Complete login" onPress={()=>this.props.navigation.navigate('LoginScreen')}/>
            </View>
        );
    }
}

