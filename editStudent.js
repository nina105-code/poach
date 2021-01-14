import React, { Component } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import EditEducation from '../edit-pages/editEducation';
import EditSkills from '../edit-pages/editSkills';
import EditGoals from '../edit-pages/editGoals';
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

export class EditStudent extends Component {
    constructor(props) {
        super(props);
    }
    pressSave = () => {
        this.props.navigation.navigate('ProfileStudent')
    }
    render() {
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                        <View style={styles.container}>
                            <View style={styles.inputContainer2}>
                                <RNPickerSelect
                                    onValueChange={(value) => console.log(value)}
                                    placeholder={{
                                        label: 'Gender',
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
                            <View style={styles.inputContainer2}>
                                <RNPickerSelect
                                    onValueChange={(value) => console.log(value)}
                                    placeholder={{
                                        label: 'Nationality',
                                        value: null,
                                    }}
                                    items={[
                                        { label: 'Afghan', value: 'Afghan' },
                                        { label: 'Albanian', value: 'Albanian' },
                                        { label: 'Algerian', value: 'Algerian' },
                                        { label: 'American', value: 'American' },
                                        { label: 'Andorran', value: 'Andorran' },
                                        { label: 'Angolan', value: 'Angolan' },
                                        { label: 'Antiguans', value: 'Antiguans' },
                                        { label: 'Argentinean', value: 'Argentinean' },
                                        { label: 'Armenian', value: 'Armenian' },
                                        { label: 'Australian', value: 'Australian' },
                                        { label: 'Austrian', value: 'Austrian' },
                                        { label: 'Azerbaijani', value: 'Azerbaijani' },
                                        { label: 'Bahamian', value: 'Bahamian' },
                                        { label: 'Bahraini', value: 'Bahraini' },
                                        { label: 'Bangladeshi', value: 'Bangladeshi' },
                                        { label: 'Barbadian', value: 'Barbadian' },
                                        { label: 'Barbudans', value: 'Barbudans' },
                                        { label: 'Batswana', value: 'Batswana' },
                                        { label: 'Belarusian', value: 'Belarusian' },
                                        { label: 'Belgian', value: 'Belgian' },
                                        { label: 'Belizean', value: 'Belizean' },
                                        { label: 'Beninese', value: 'Beninese' },
                                        { label: 'Bhutanese', value: 'Bhutanese' },
                                        { label: 'Bolivian', value: 'Bolivian' },
                                        { label: 'Bosnian', value: 'Bosnian' },
                                        { label: 'Brazilian', value: 'Brazilian' },
                                        { label: 'British', value: 'British' },
                                        { label: 'Bruneian', value: 'Bruneian' },
                                        { label: 'Bulgarian', value: 'Bulgarian' },
                                        { label: 'Burkinabe', value: 'Burkinabe' },
                                        { label: 'Burmese', value: 'Burmese' },
                                        { label: 'Burundian', value: 'Burundian' },
                                        { label: 'Cambodian', value: 'Cambodian' },
                                        { label: 'Cameroonian', value: 'Cameroonian' },
                                        { label: 'Canadian', value: 'Canadian' },
                                        { label: 'Cape Verdean', value: 'Cape Verdean' },
                                        { label: 'Central African', value: 'Central African' },
                                        { label: 'Chadian', value: 'Chadian' },
                                        { label: 'Chilean', value: 'Chilean' },
                                        { label: 'Chinese', value: 'Chinese' },
                                        { label: 'Colombian', value: 'Colombian' },
                                        { label: 'Comoran', value: 'Comoran' },
                                        { label: 'Congolese', value: 'Congolese' },
                                        { label: 'Costa Rican', value: 'Costa Rican' },
                                        { label: 'Croatian', value: 'Croatian' },
                                        { label: 'Cuban', value: 'Cuban' },
                                        { label: 'Cypriot', value: 'Cypriot' },
                                        { label: 'Czech', value: 'Czech' },
                                        { label: 'Danish', value: 'Danish' },
                                        { label: 'Djibouti', value: 'Djibouti' },
                                        { label: 'Dominican', value: 'Dominican' },
                                        { label: 'Dutch', value: 'Dutch' },
                                        { label: 'East Timorese', value: 'East Timorese' },
                                        { label: 'Ecuadorean', value: 'Ecuadorean' },
                                        { label: 'Egyptian', value: 'Egyptian' },
                                        { label: 'Emirian', value: 'Emirian' },
                                        { label: 'Equatorial Guinean', value: 'Equatorial Guinean' },
                                        { label: 'Eritrean', value: 'Eritrean' },
                                        { label: 'Estonian', value: 'Estonian' },
                                        { label: 'Ethiopian', value: 'Ethiopian' },
                                        { label: 'Fijian', value: 'Fijian' },
                                        { label: 'Filipino', value: 'Filipino' },
                                        { label: 'Finnish', value: 'Finnish' },
                                        { label: 'French', value: 'French' },
                                        { label: 'Gabonese', value: 'Gabonese' },
                                        { label: 'Gambian', value: 'Gambian' },
                                        { label: 'Georgian', value: 'Georgian' },
                                        { label: 'German', value: 'German' },
                                        { label: 'Ghanaian', value: 'Ghanaian' },
                                        { label: 'Greek', value: 'Greek' },
                                        { label: 'Grenadian', value: 'Grenadian' },
                                        { label: 'Guatemalan', value: 'Guatemalan' },
                                        { label: 'Guinea-Bissauan', value: 'Guinea-Bissauan' },
                                        { label: 'Guinean', value: 'Guinean' },
                                        { label: 'Guyanese', value: 'Guyanese' },
                                        { label: 'Haitian', value: 'Haitian' },
                                        { label: 'Herzegovinian', value: 'Herzegovinian' },
                                        { label: 'Honduran', value: 'Honduran' },
                                        { label: 'Hungarian', value: 'Hungarian' },
                                        { label: 'I-Kiribati', value: 'I-Kiribati' },
                                        { label: 'Icelander', value: 'Icelander' },
                                        { label: 'Indian', value: 'Indian' },
                                        { label: 'Indonesian', value: 'Indonesian' },
                                        { label: 'Iranian', value: 'Iranian' },
                                        { label: 'Iraqi', value: 'Iraqi' },
                                        { label: 'Irish', value: 'Irish' },
                                        { label: 'Israeli', value: 'Israeli' },
                                        { label: 'Italian', value: 'Italian' },
                                        { label: 'Ivorian', value: 'Ivorian' },
                                        { label: 'Jamaican', value: 'Jamaican' },
                                        { label: 'Japanese', value: 'Japanese' },
                                        { label: 'Jordanian', value: 'Jordanian' },
                                        { label: 'Kazakhstani', value: 'Kazakhstani' },
                                        { label: 'Kenyan', value: 'Kenyan' },
                                        { label: 'Kittian and Nevisian', value: 'Kittian and Nevisian' },
                                        { label: 'Kuwaiti', value: 'Kuwaiti' },
                                        { label: 'Kyrgyz', value: 'Kyrgyz' },
                                        { label: 'Laotian', value: 'Laotian' },
                                        { label: 'Latvian', value: 'Latvian' },
                                        { label: 'Lebanese', value: 'Lebanese' },
                                        { label: 'Liberian', value: 'Liberian' },
                                        { label: 'Libyan', value: 'Libyan' },
                                        { label: 'Liechtensteiner', value: 'Liechtensteiner' },
                                        { label: 'Lithuanian', value: 'Lithuanian' },
                                        { label: 'Luxembourger', value: 'Luxembourger' },
                                        { label: 'Macedonian', value: 'Macedonian' },
                                        { label: 'Malagasy', value: 'Malagasy' },
                                        { label: 'Malawian', value: 'Malawian' },
                                        { label: 'Malaysian', value: 'Malaysian' },
                                        { label: 'Maldivian', value: 'Maldivian' },
                                        { label: 'Malian', value: 'Malian' },
                                        { label: 'Maltese', value: 'Maltese' },
                                        { label: 'Marshallese', value: 'Marshallese' },
                                        { label: 'Mauritanian', value: 'Mauritanian' },
                                        { label: 'Mauritian', value: 'Mauritian' },
                                        { label: 'Mexican', value: 'Mexican' },
                                        { label: 'Micronesian', value: 'Micronesian' },
                                        { label: 'Moldovan', value: 'Moldovan' },
                                        { label: 'Monacan', value: 'Monacan' },
                                        { label: 'Mongolian', value: 'Mongolian' },
                                        { label: 'Moroccan', value: 'Moroccan' },
                                        { label: 'Mosotho', value: 'Mosotho' },
                                        { label: 'Motswana', value: 'Motswana' },
                                        { label: 'Mozambican', value: 'Mozambican' },
                                        { label: 'Namibian', value: 'Namibian' },
                                        { label: 'Nauruan', value: 'Nauruan' },
                                        { label: 'Nepalese', value: 'Nepalese' },
                                        { label: 'New Zealander', value: 'New Zealander' },
                                        { label: 'Ni-Vanuatu', value: 'Ni-Vanuatu' },
                                        { label: 'Nicaraguan', value: 'Nicaraguan' },
                                        { label: 'Nigerian', value: 'Nigerian' },
                                        { label: 'Nigerien', value: 'Nigerien' },
                                        { label: 'North Korean', value: 'North Korean' },
                                        { label: 'Northern Irish', value: 'Northern Irish' },
                                        { label: 'Norwegian', value: 'Norwegian' },
                                        { label: 'Omani', value: 'Omani' },
                                        { label: 'Pakistani', value: 'Pakistani' },
                                        { label: 'Palauan', value: 'Palauan' },
                                        { label: 'Panamanian', value: 'Panamanian' },
                                        { label: 'Papua New Guinean', value: 'Papua New Guinean' },
                                        { label: 'Paraguayan', value: 'Paraguayan' },
                                        { label: 'Peruvian', value: 'Peruvian' },
                                        { label: 'Polish', value: 'Polish' },
                                        { label: 'Portuguese', value: 'Portuguese' },
                                        { label: 'Qatari', value: 'Qatari' },
                                        { label: 'Romanian', value: 'Romanian' },
                                        { label: 'Russian', value: 'Russian' },
                                        { label: 'Rwandan', value: 'Rwandan' },
                                        { label: 'Saint Lucian', value: 'Saint Lucian' },
                                        { label: 'Salvadoran', value: 'Salvadoran' },
                                        { label: 'Samoan', value: 'Samoan' },
                                        { label: 'San Marinese', value: 'San Marinese' },
                                        { label: 'Sao Tomean', value: 'Sao Tomean' },
                                        { label: 'Saudi', value: 'Saudi' },
                                        { label: 'Scottish', value: 'Scottish' },
                                        { label: 'Senegalese', value: 'Senegalese' },
                                        { label: 'Serbian', value: 'Serbian' },
                                        { label: 'Seychellois', value: 'Seychellois' },
                                        { label: 'Sierra Leonean', value: 'Sierra Leonean' },
                                        { label: 'Singaporean', value: 'Singaporean' },
                                        { label: 'Slovakian', value: 'Slovakian' },
                                        { label: 'Slovenian', value: 'Slovenian' },
                                        { label: 'Solomon Islander', value: 'Solomon Islander' },
                                        { label: 'Somali', value: 'Somali' },
                                        { label: 'South African', value: 'South African' },
                                        { label: 'South Korean', value: 'South Korean' },
                                        { label: 'Spanish', value: 'Spanish' },
                                        { label: 'Sri Lankan', value: 'Sri Lankan' },
                                        { label: 'Sudanese', value: 'Sudanese' },
                                        { label: 'Surinamer', value: 'Surinamer' },
                                        { label: 'Swazi', value: 'Swazi' },
                                        { label: 'Swedish', value: 'Swedish' },
                                        { label: 'Swiss', value: 'Swiss' },
                                        { label: 'Syrian', value: 'Syrian' },
                                        { label: 'Taiwanese', value: 'Taiwanese' },
                                        { label: 'Tajik', value: 'Tajik' },
                                        { label: 'Tanzanian', value: 'Tanzanian' },
                                        { label: 'Thai', value: 'Thai' },
                                        { label: 'Togolese', value: 'Togolese' },
                                        { label: 'Tongan', value: 'Tongan' },
                                        { label: 'Trinidadian or Tobagonian', value: 'Trinidadian or Tobagonian' },
                                        { label: 'Tunisian', value: 'Tunisian' },
                                        { label: 'Turkish', value: 'Turkish' },
                                        { label: 'Tuvaluan', value: 'Tuvaluan' },
                                        { label: 'Ugandan', value: 'Ugandan' },
                                        { label: 'Ukrainian', value: 'Ukrainian' },
                                        { label: 'Uruguayan', value: 'Uruguayan' },
                                        { label: 'Uzbekistani', value: 'Uzbekistani' },
                                        { label: 'Venezuelan', value: 'Venezuelan' },
                                        { label: 'Vietnamese', value: 'Vietnamese' },
                                        { label: 'Welsh', value: 'Welsh' },
                                        { label: 'Yemenite', value: 'Yemenite' },
                                        { label: 'Zambian', value: 'Zambian' },
                                        { label: 'Zimbabwean', value: 'Zimbabwean' }

                                    ]}
                                />

                            </View>

                            <View style={styles.inputContainer2}>
                                <RNPickerSelect
                                    onValueChange={(value) => console.log(value)}
                                    placeholder={{
                                        label: 'Work Eligibility',
                                        value: null,
                                    }}
                                    items={[
                                        { label: 'Eligible', value: 'Eligible' },
                                        { label: 'Not currently eligible', value: 'Not currently eligible' },
                                    ]}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.inputs}
                                    placeholder="Phone number"
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={styles.inputContainer2}>
                                <RNPickerSelect
                                    onValueChange={(value) => console.log(value)}
                                    placeholder={{
                                        label: 'Full UK Driving License',
                                        value: null,
                                    }}
                                    items={[
                                        { label: 'Yes', value: 'Yes' },
                                        { label: 'No', value: 'No' },
                                    ]}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.inputs}
                                    placeholder="Birthday"
                                    underlineColorAndroid='transparent'
                                />
                            </View>

                            <View style={styles.inputContainer2}>
                                <RNPickerSelect
                                    onValueChange={(value) => console.log(value)}
                                    placeholder={{
                                        label: 'Education Stage',
                                        value: null,
                                    }}
                                    items={[
                                        { label: 'GCSE student', value: 'GCSE student' },
                                        { label: 'A-level or equivalent student', value: 'A-level or equivalent student' },
                                        { label: 'I have finished school/college', value: 'I have finished school/college' },
                                        { label: 'Current undergraduate student', value: 'Current undergraduate student' },
                                        { label: 'Recently graduated (undergraduate)', value: 'Recently graduated (undergraduate)' },
                                        { label: 'Current postgraduate student', value: 'Current postgraduate student' },
                                        { label: 'Recently graduated (postgraduate)', value: 'Recently graduated (postgraduate)' },

                                    ]}
                                />

                            </View>

                            <View style={styles.inputContainer2}>
                                <RNPickerSelect
                                    onValueChange={(value) => console.log(value)}
                                    placeholder={{
                                        label: 'Ethnicity',
                                        value: null,
                                    }}
                                    items={[
                                        { label: 'Asian or Asian British', value: 'Asian or Asian British' },
                                        { label: 'Black or Black British', value: 'Black or Black British' },
                                        { label: 'Mixed', value: 'Mixed' },
                                        { label: 'Other Ethnic groups', value: 'Other Ethnic groups' },
                                        { label: 'Prefer not to say', value: 'Prefer not to say994' },
                                        { label: 'White', value: 'White' }
                                    ]}
                                />

                            </View>
                            <View style={styles.inputContainer2}>
                                <RNPickerSelect
                                    onValueChange={(value) => console.log(value)}
                                    placeholder={{
                                        label: 'Sexual orientation',
                                        value: null,
                                    }}
                                    items={[
                                        { label: 'Bisexual', value: 'Bisexual' },
                                        { label: 'Gay/Lesbian', value: 'Gay/Lesbian' },
                                        { label: 'Heterosexual/Straight', value: 'Heterosexual/Straight' },
                                        { label: 'Other', value: 'Other' },
                                        { label: 'Prefer not to say', value: 'Prefer not to say' }
                                    ]}
                                />

                            </View>
                            <View style={styles.inputContainer2}>
                                <RNPickerSelect
                                    onValueChange={(value) => console.log(value)}
                                    placeholder={{
                                        label: 'Registred disabled',
                                        value: null,
                                    }}
                                    items={[
                                        { label: 'Yes', value: 'Yes' },
                                        { label: 'No', value: 'No' },
                                        { label: 'Prefer not to say', value: 'Prefer not to say' }
                                    ]}
                                />

                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.inputs}
                                    placeholder="Postcode (between ages 11-16)"
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
    );
    }
}
const TabNavigator = createMaterialTopTabNavigator(
    {
        EditStudent :{screen: EditStudent,
            navigationOptions:{
                tabBarLabel: 'About me',
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
        EditEducation :{screen: EditEducation,
            navigationOptions:{
                tabBarLabel: 'Education',
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
        EditSkills :{screen: EditSkills,
            navigationOptions:{
                tabBarLabel: 'Skills',
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
        EditGoals :{screen: EditGoals,
            navigationOptions:{
                tabBarLabel: 'Goals',
                activeColor: '#fb7813',
                inactiveColor: 'white',
                barStyle: {backgroundColor:'#00263b'},
                tabBarIcon:({tintColor})=>(
                    <View>
                        <Icon name={'person'} size={5} color={tintColor}/>
                    </View>
                )
            }
        },
    },
    {  
        tabBarOptions: {
            tabStyle: {
                flex: 1,
                width: 'auto',
                paddingHorizontal: 13,
                marginTop: 25,
                backgroundColor:'white',
                justifyContent: 'center',
                alignSelf: 'center',
            },
            activeTintColor: "#fb7813",
            inactiveTintColor: "#00263b",
            style: {
                
                backgroundColor: 'white',
                justifyContent: 'center',
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












