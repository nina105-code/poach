import React, { Component } from 'react'; 
import { MaterialIcons } from '@expo/vector-icons';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

export default class CheckEmailPassword extends Component {
    constructor(props) {
        super(props);
    }
    returnHome = () => {
        this.props.navigation.navigate('Home')
    }
    render() {
    return (
        <View style={styles.container}>
            <MaterialIcons name="email" size={100} color='#fb7813' />
            <Text style={styles.textBlack}>Check mailbox to reset your password.</Text>
            <TouchableHighlight underlayColor={'#fb7813'} onPress={this.returnHome} style={[styles.btnContainer]}>
                <Text style={styles.textWhite}>Return Home</Text>
            </TouchableHighlight>
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
        marginVertical: 15,
        backgroundColor: '#00263b',
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
