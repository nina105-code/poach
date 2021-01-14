import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableHighlight,
    Text,
    Keyboard,
    TouchableWithoutFeedback,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class EditGoals extends Component {
    state = { user: '' }
    updateUser = (user) => {
        this.setState({ user: user })
    }
    pressSave = () => {
        this.props.navigation.navigate('ProfileStudent')
    }
    render() {

        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
            <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                        <View style={styles.container}>
                        <View style={styles.inputContainer2}>
                                <RNPickerSelect
                                    onValueChange={(value) => console.log(value)}
                                    placeholder={{
                                        label: 'Top 3 Industries',
                                        value: null,
                                    }}
                                    items={[
                                        { label: 'Accountancy/Professional Services', value: 'Accountancy/Professional Services' },
                                        { label: 'Automotive & Transport', value: 'Automotive & Transport' },
                                        { label: 'Banking & Finance', value: 'Banking & Finance' },
                                        { label: 'Charity & Public Sector', value: 'Charity & Public Sector' },
                                        { label: 'Consulting', value: 'Consulting' },
                                        { label: 'Consumer & Retail', value: 'Consumer & Retail' },
                                        { label: 'Energy', value: 'Energy' },
                                        { label: 'Engineering & Industrial', value: 'Engineering & Industrial' },
                                        { label: 'FMCG', value: 'FMCG' },
                                        { label: 'Hospitality', value: 'Hospitality' },
                                        { label: 'HR', value: 'HR' },
                                        { label: 'Law', value: 'Law' },
                                        { label: 'Marketing & Media', value: 'Marketing & Media' },
                                        { label: 'Other Sectors', value: 'Other Sectors' },
                                        { label: 'Property & Construction', value: 'Property & Construction' },
                                        { label: 'Recruitment', value: 'Recruitment' },
                                        { label: 'Sales', value: 'Sales' },
                                        { label: 'Supply Chain & Logistics', value: 'Supply Chain & Logistics' },
                                        { label: 'Technology', value: 'Technology' },
                                        { label: 'Telecoms', value: 'Telecoms' }
                                    ]}
                                />

                            </View>
                            <View style={styles.inputContainer2}>
                                <RNPickerSelect
                                    onValueChange={(value) => console.log(value)}
                                    placeholder={{
                                        label: 'Top 3 Positions',
                                        value: null,
                                    }}
                                    items={[
                                        { label: 'Account Manager', value: 'Account Manager' },
                                        { label: 'Accounting & Tax', value: 'Accounting & Tax' },
                                        { label: 'Analyst', value: 'Analyst' },
                                        { label: 'Compliance', value: 'Compliance' },
                                        { label: 'Consulting & Strategy', value: 'Consulting & Strategy' },
                                        { label: 'Customer Service', value: 'Customer Service' },
                                        { label: 'Design', value: 'Design' },
                                        { label: 'Engineering', value: 'Engineering' },
                                        { label: 'Finance', value: 'Finance' },
                                        { label: 'HR', value: 'HR' },
                                        { label: 'IT', value: 'IT' },
                                        { label: 'Legal ', value: 'Legal ' },
                                        { label: 'Marketing ', value: 'Marketing ' },
                                        { label: 'Media ', value: 'Media ' },
                                        { label: 'Medical ', value: 'Medical ' },
                                        { label: 'Operations ', value: 'Operations ' },
                                        { label: 'Project Management ', value: 'Project Management ' },
                                        { label: 'Protective Services ', value: 'Protective Services ' },
                                        { label: 'Recruitment ', value: 'Recruitment ' },
                                        { label: 'Research ', value: 'Research ' },
                                        { label: 'Sales ', value: 'Sales ' },
                                        { label: 'Software Engineering ', value: 'Software Engineering ' },
                                    ]}
                                />
                            </View>
                            <View style={styles.inputContainer2}>
                                <RNPickerSelect
                                    onValueChange={(value) => console.log(value)}
                                    placeholder={{
                                        label: 'Type',
                                        value: null,
                                    }}
                                    items={[
                                        { label: 'Apprenticeship', value: 'Apprenticeship' },
                                        { label: 'Internship', value: 'Internship' },
                                        { label: 'Industrial Placement', value: 'Industrial Placement' },
                                        { label: 'Graduate Scheme', value: 'Graduate Scheme' },
                                        { label: 'First Job', value: 'First Job' },
                                        { label: 'Full Time Job', value: 'Full Time Job' },
                                    ]}
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
        padding: 20,
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
