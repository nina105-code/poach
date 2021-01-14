import React, { Component } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
    StyleSheet,
    TextInput,
    View,
    TouchableHighlight,
    Text,
    Keyboard,
    TouchableWithoutFeedback,
} from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            TextInputEmail: '',
            TextInputPassword: '',
        };
    }
    pressPasswordReset = () => {
        this.props.navigation.navigate('PasswordReset')
    }
    pressSignup = () => {
        this.props.navigation.navigate('Signup')
    }
    CheckTextInput = () => {
        if (this.state.TextInputEmail != '') {
            if (this.state.TextInputPassword != '') {
                this.props.navigation.navigate('ProfileCompany')
            } else { alert('Please Enter Your Password'); }           
        } else { alert('Please Enter Your Email'); }
    };
    render() {
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <MaterialIcons name="email" size={24} color='#fb7813'/>
                    <TextInput
                        style={styles.inputs}
                        onChangeText={TextInputEmail => this.setState({ TextInputEmail })}
                        underlineColorAndroid="transparent"
                        placeholder="Email"
                        keyboardType="email-address"
                    />                
                </View>
                <View style={styles.inputContainer}>
                    <MaterialIcons name="lock-outline" size={24} color='#fb7813'/>
                    <TextInput
                        style={styles.inputs}
                        onChangeText={TextInputPassword => this.setState({ TextInputPassword })}
                        underlineColorAndroid="transparent"
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                </View>
                <TouchableHighlight underlayColor={'#00263b'} onPress={this.CheckTextInput} style={[styles.btnContainer, styles.btnLogin]}>
                    <Text style={styles.textWhite}>Login</Text>
                </TouchableHighlight>
                <TouchableHighlight underlayColor={'transparent'} onPress={this.pressPasswordReset} style={styles.btnRest}>
                    <Text style={styles.textBlack}>Forgot your password?</Text>
                </TouchableHighlight>
                <TouchableHighlight underlayColor={'transparent'} onPress={this.pressSignup} style={styles.btnRest}>
                    <Text style={styles.textBlack}>Signup</Text>
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
        marginVertical: 5,
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
        paddingVertical: 6,
        marginVertical: 10,
        alignItems: 'center',
        width: 250,
        borderRadius: 25,
    },
    btnRest: {
        padding: 8,
    },
    btnLogin: {
        backgroundColor: "#fb7813",
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