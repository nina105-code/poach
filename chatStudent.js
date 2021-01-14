import React, { Component } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    ScrollView,
    TextInput,
} from 'react-native';

export default class ChatStudent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            CompanyName: 'Company Name',
        };
    }
    render() {
    return (
        <View style={{ flex: 1, backgroundColor: '#00263b' }}>
            <View style={styles.stickyHeader}>
                <Text style={{ color: '#00263b', fontSize: 18 }}>{this.state.CompanyName}</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.msgContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ padding: 10, }}>
                        <Text style={styles.messagesStudent}>Position type (intern, full time etc)</Text>
                        <Text style={styles.messagesCompany}>Message 2 Position type (intern, full time etc)</Text>
                        <Text style={styles.messagesStudent}>Message 3</Text>
                        <Text style={styles.messagesStudent}>Position type (intern, full time etc)</Text>
                        <Text style={styles.messagesCompany}>Message 2 Position type (intern, full time etc)</Text>
                        <Text style={styles.messagesStudent}>Message 3</Text>
                        <Text style={styles.messagesStudent}>Position type (intern, full time etc)</Text>
                        <Text style={styles.messagesCompany}>Message 2 Position type (intern, full time etc)</Text>
                        <Text style={styles.messagesStudent}>Message 3</Text>
                        <Text style={styles.messagesStudent}>Position type (intern, full time etc)</Text>
                        <Text style={styles.messagesCompany}>Message 2 Position type (intern, full time etc)</Text>
                        <Text style={styles.messagesStudent}>Message 3</Text>
                        <Text style={styles.messagesStudent}>Position type (intern, full time etc)</Text>
                        <Text style={styles.messagesCompany}>Message 2 Position type (intern, full time etc)</Text>
                        <Text style={styles.messagesStudent}>Message 3</Text>
                        <Text style={styles.messagesStudent}>Position type (intern, full time etc)</Text>
                        <Text style={styles.messagesCompany}>Message 2 Position type (intern, full time etc)</Text>
                        <Text style={styles.messagesStudent}>Message 3</Text>
                        <Text style={styles.messagesStudent}>Position type (intern, full time etc)</Text>
                        <Text style={styles.messagesCompany}>Message 2 Position type (intern, full time etc)</Text>
                        <Text style={styles.messagesStudent}>Message 3</Text>
                    </View>
                    </ScrollView>
                    <View style={styles.sendMessage}>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.inputs}
                                placeholder="Message"
                                underlineColorAndroid='transparent'
                            />
                        </View>
                        <TouchableHighlight underlayColor={'transparent'} style={styles.btnContainer}>
                            <MaterialIcons name="send" size={25} color='#00263b'/>
                        </TouchableHighlight>
                    </View>
                </View>       
            </View>
        </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    stickyHeader: {
        height: 65,
        justifyContent: 'flex-end',
        paddingBottom: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomColor: "#00263b",
        borderBottomWidth: 1,
    },
    msgContainer: {
        flex: 1,
        paddingHorizontal: 10,
        paddingBottom: 5,
        backgroundColor: 'white',
    },
    inputContainer: {
        flex: 1,
        backgroundColor: '#00263b',
        borderRadius: 5,
        paddingVertical: 2,
        marginVertical: 4,
        marginRight: 8,
        paddingHorizontal: 8,
    },
    inputs: {
        marginLeft: 5,
        color: 'lightgrey',
        fontSize: 13,
    },
    sendMessage: {
        paddingTop: 5,
        flexDirection: 'row', 
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#00263b',
    },
    messagesCompany: {
        maxWidth: '80%',
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: '#00263b',
        color: 'white',
        fontSize: 13,
        borderRadius: 10,
        marginVertical: 5,
        alignSelf: 'flex-start',
    },
    messagesStudent: {
        maxWidth: '80%',
        paddingHorizontal: 15,
        paddingVertical: 3,
        backgroundColor: '#fb7813',
        color: 'white',
        fontSize: 13,
        borderRadius: 10,
        marginVertical: 5,
        alignSelf: 'flex-end',
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