import React from 'react';
import {View, Text, Button, Modal, TouchableHighlight, Alert} from 'react-native';

export default class LoginScreen extends React.Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Dune</Text>
                    <Button title="Signup" onPress={()=>this.props.navigation.navigate('SignupScreen')}/>
                <Modal
                    animationType="slide"
                    transparent={false}
                    modalVisible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{marginTop: 22}}>
                        <View>
                            <Text>This is simple modal</Text>
                            <TouchableHighlight>
                                <Text onPress={()=>this.setModalVisible(false)}>Open modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                <TouchableHighlight>
                    <Text onPress={()=>this.setModalVisible(false)}>Close modal</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

