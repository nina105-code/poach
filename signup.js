import React, { Component } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

export default class Signup extends Component {
    constructor(props) {
        super(props);
    }
    pressStudentSignup = () => {
        this.props.navigation.navigate('SignupStudent')
    }
    pressCompanySignup = () => {
        this.props.navigation.navigate('SignupCompany')
    }
    render (){
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <TouchableHighlight underlayColor={'transparent'} onPress={this.pressStudentSignup} style={styles.btnContainer}>
                        <MaterialIcons name="school" size={100} color='#00263b'/>
                    </TouchableHighlight>
                    <Text style={styles.textBlack}>Student</Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <TouchableHighlight underlayColor={'transparent'} onPress={this.pressCompanySignup} style={styles.btnContainer}>
                        <MaterialIcons name="business" size={100} color='#00263b'/>
                    </TouchableHighlight>
                    <Text style={styles.textBlack}>Company</Text>
                </View>
            </View>  
        </View>
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
    btnContainer: {
        marginHorizontal: 20,
        marginTop: 20,
        alignItems: 'center',
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
