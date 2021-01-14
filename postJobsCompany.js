import React, { Component } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
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

export class PostJobsCompany extends Component {
    constructor(props) {
        super(props);
    }
    pressSave = () => {
        this.props.navigation.navigate('PostedJobsCompany')
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
                                        label: 'Position',
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
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.inputs}
                                    placeholder="Availability"
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.inputs}
                                    placeholder="Salary"
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.inputs}
                                    placeholder="Visa Sponsor"
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
const TabNavigator = createMaterialTopTabNavigator(
    {
        PostJobsCompany :{screen: PostJobsCompany,
            navigationOptions:{
                tabBarLabel: 'Job Description',
                activeColor: '#fb7813',
                inactiveColor: 'white',
                barStyle: {backgroundColor:'#00263b'},
                tabBarIcon:({tintColor})=>(
                    <View>
                        <Icon name={'person'} size={25} color={tintColor}/>
                    </View>
                )
            }
        },
    },
    {  
        tabBarOptions: {
            tabStyle: {
                marginTop: 25,
                backgroundColor:'white',
            },
            activeTintColor: "#fb7813",
            inactiveTintColor: "#00263b",
            style: {
                backgroundColor: 'white',
            },
        },
        
    }
)
export default createAppContainer(TabNavigator);

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












