import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    TouchableHighlight,
    Text,
    Keyboard,
    TouchableWithoutFeedback,
} from 'react-native';

export default class PasswordReset extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            TextInputEmail: '',
        };
    }
    CheckTextInput = () => {
        if (this.state.TextInputEmail != '') {
            this.props.navigation.navigate('CheckEmailPassword')
        } else {
            alert('Please Enter Your Email');
        }
    };
    render() {
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <View style={styles.container}>
                <Text style={styles.textBlack}>Type your E-mail to reset your password.</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputs}
                        onChangeText={TextInputEmail => this.setState({ TextInputEmail })}
                        underlineColorAndroid="transparent"
                        placeholder="Email"
                        keyboardType="email-address"
                    />
                </View>
                <TouchableHighlight underlayColor={'#00263b'} onPress={this.CheckTextInput} style={[styles.btnContainer]}>
                    <Text style={styles.textWhite}>Send Request</Text>
                </TouchableHighlight>
            </View>
        </TouchableWithoutFeedback>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    inputContainer: {
        backgroundColor: "#00263b",
        borderRadius: 25,
        width: 250,
        marginTop: 15,
        marginBottom: 8,
        paddingLeft: 15,
        paddingVertical: 5,
        flexDirection: 'row',
    },
    inputs: {
        marginLeft: 16,
        color:'white',
        fontSize: 13,
    },
    btnContainer: {
        backgroundColor: '#fb7813',
        paddingVertical: 6,       
        alignItems: 'center',
        width: 250,
        borderRadius: 25,
    },
    textWhite: {
        color: 'white',
        fontSize: 13,
    },
    textBlack: {
        color: '#00263b',
        fontSize: 13,
    },
});