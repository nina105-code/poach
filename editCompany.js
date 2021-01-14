import React, { Component } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {
    StyleSheet,
    TextInput,
    View,
    TouchableHighlight,
    Text,
    Keyboard,
    TouchableWithoutFeedback,
    ScrollView,
    SafeAreaView,
} from 'react-native';

export default class EditCompany extends Component {
    constructor(props) {
        super(props);
    }
    pressSave = () => {
        this.props.navigation.navigate('ProfileCompany')
    }
    render() {
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.stickyHeader}></View>
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                        <View style={styles.container}>
                            <View style={styles.inputContainer2}>
                                <RNPickerSelect
                                    onValueChange={(value) => console.log(value)}
                                    placeholder={{
                                        label: 'Industry',
                                        value: null,
                                    }}
                                    items={[
                                        { label: 'Male', value: 'Male' },
                                        { label: 'Female', value: 'Female' },
                                        { label: 'Non-binary', value: 'Non-binary' },
                                        { label: 'Prefer not to say', value: 'Prefer not to say' },

                                    ]}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.inputs}
                                    placeholder="Founded"
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.inputs}
                                    placeholder="Address"
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.inputs}
                                    placeholder="Company Description"
                                    underlineColorAndroid='transparent'
                                />
                            </View>

                            <TouchableHighlight style={styles.btnContainer} onPress={this.pressSave}>
                                <Text style={{ color: 'white' }}>Save</Text>
                            </TouchableHighlight>                       
                        </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </SafeAreaView>
        </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 30,
    },
    stickyHeader: {
        height: 25,
        backgroundColor: 'white',
        borderBottomColor: "#00263b",
        borderBottomWidth: 0.2,
    },
    inputContainer: {
        backgroundColor: '#00263b',
        borderRadius: 25,
        width: 250,
        paddingVertical: 6,
        marginVertical: 4,
        paddingHorizontal: 15,
    },
    inputContainer2: {
        backgroundColor: '#00263b',
        borderRadius: 25,
        width: 312.5,
        paddingHorizontal: 15,
        fontFamily: 'OpenSans-Regular',
        transform: [
            { scaleX: 0.8 }, 
            { scaleY: 0.8 },
        ],
    },
    inputs: {
        marginLeft: 3,
        color: 'lightgrey',
        fontSize: 13,
    },
    btnContainer: {
        backgroundColor: "#fb7813",
        paddingVertical: 6,
        marginVertical: 15,
        alignItems: 'center',
        width: 250,
        borderRadius: 25,
    },
});












