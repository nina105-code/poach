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

export default class signupCompany extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            Cname: '',
            Email: '',
            Password: '',
            Repassword: '',
        };
    }
    CheckTextInput = () => {
        if (this.state.Cname != '') {
            if (this.state.Email != '') {
                if (this.state.Password != '') {
                    if (this.state.Repassword != '') {
                        if (this.state.Repassword === this.state.Password) {
                            this.props.navigation.navigate('VerificationEmail')
                        } else { alert('Password Doesnt Match'); } 
                    } else { alert('Please Re-Type Your Password'); }
                } else { alert('Please Enter Your Password'); }
            } else { alert('Please Enter Your Email'); }
        } else { alert('Please Enter Your Company Name'); }
    };
    render() {
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        onChangeText={Cname => this.setState({ Cname })}
                        placeholder="Company Name"
                        keyboardType="default"
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        onChangeText={Email => this.setState({ Email })}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        onChangeText={Password => this.setState({ Password })}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        onChangeText={Repassword => this.setState({ Repassword })}
                        placeholder="RePassword"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                    />
                </View>

                <TouchableHighlight underlayColor={'#00263b'} onPress={this.CheckTextInput} style={styles.btnContainer}>
                    <Text style={styles.textWhite}>Signup</Text>
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
        backgroundColor: '#00263b',
        borderRadius: 30,
        width: 250,
        paddingVertical: 5,
        marginVertical: 4,
        paddingHorizontal: 15,
    },
    inputs: {
        marginLeft: 10,
        color:'white',
        fontSize: 13,
    },
    btnContainer: {
        paddingVertical: 8,
        marginVertical: 10,
        alignItems: 'center',
        width: 250,
        borderRadius: 30,
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