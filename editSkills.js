import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    TextInput,
    View,
    Alert,
    Button,
    TouchableHighlight,
    Text,
    SectionList,
    Picker,
    Keyboard,
    TouchableWithoutFeedback,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-material-dropdown';
import RNPickerSelect from 'react-native-picker-select';

export default class EditSkills extends Component {
    state = { user: '' }
    updateUser = (user) => {
        this.setState({ user: user })
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
                                        label: 'Language',
                                        value: null,
                                    }}
                                    items={[
                                        { label: 'Acholi', value: 'Acholi' },
                                        { label: 'Afrikaans', value: 'Afrikaans' },
                                        { label: 'Albanian', value: 'Albanian' },
                                        { label: 'Amharic', value: 'Amharic' },
                                        { label: 'Arabic', value: 'Arabic' },
                                        { label: 'Ashante', value: 'Ashante' },
                                        { label: 'Assyrian', value: 'Assyrian' },
                                        { label: 'Azerbaijani', value: 'Azerbaijani' },
                                        { label: 'Azeri', value: 'Azeri' },
                                        { label: 'Bajuni', value: 'Bajuni' },
                                        { label: 'Basque', value: 'Basque' },
                                        { label: 'Behdini', value: 'Behdini' },
                                        { label: 'Belorussian', value: 'Belorussian' },
                                        { label: 'Bengali', value: 'Bengali' },
                                        { label: 'Berber', value: 'Berber' },
                                        { label: 'Bosnian', value: 'Bosnian' },
                                        { label: 'Bravanese', value: 'Bravanese' },
                                        { label: 'Bulgarian', value: 'Bulgarian' },
                                        { label: 'Burmese', value: 'Burmese' },
                                        { label: 'Cakchiquel', value: 'Cakchiquel' },
                                        { label: 'Cambodian', value: 'Cambodian' },
                                        { label: 'Cantonese', value: 'Cantonese' },
                                        { label: 'Catalan', value: 'Catalan' },
                                        { label: 'Chaldean', value: 'Chaldean' },
                                        { label: 'Chamorro', value: 'Chamorro' },
                                        { label: 'Chao-chow', value: 'Chao-chow' },
                                        { label: 'Chavacano', value: 'Chavacano' },
                                        { label: 'Chuukese', value: 'Chuukese' },
                                        { label: 'Croatian', value: 'Croatian' },
                                        { label: 'Czech', value: 'Czech' },
                                        { label: 'Danish', value: 'Danish' },
                                        { label: 'Dari', value: 'Dari' },
                                        { label: 'Dinka', value: 'Dinka' },
                                        { label: 'Diula', value: 'Diula' },
                                        { label: 'Dutch', value: 'Dutch' },
                                        { label: 'English', value: 'English' },
                                        { label: 'Estonian', value: 'Estonian' },
                                        { label: 'Espanol', value: 'Espanol' },
                                        { label: 'Fante', value: 'Fante' },
                                        { label: 'Farsi', value: 'Farsi' },
                                        { label: 'Finnish', value: 'Finnish' },
                                        { label: 'Flemish', value: 'Flemish' },
                                        { label: 'French', value: 'French' },
                                        { label: 'Fukienese', value: 'Fukienese' },
                                        { label: 'Fula', value: 'Fula' },
                                        { label: 'Fulani', value: 'Fulani' },
                                        { label: 'Fuzhou', value: 'Fuzhou' },
                                        { label: 'Gaddang', value: 'Gaddang' },
                                        { label: 'Gaelic', value: 'Gaelic' },
                                        { label: 'Gaelic-irish', value: 'Gaelic-irish' },
                                        { label: 'Gaelic-scottish', value: 'Gaelic-scottish' },
                                        { label: 'Georgian', value: 'Georgian' },
                                        { label: 'German', value: 'German' },
                                        { label: 'Gorani', value: 'Gorani' },
                                        { label: 'Greek', value: 'Greek' },
                                        { label: 'Gujarati', value: 'Gujarati' },
                                        { label: 'Haitian Creole', value: 'Haitian Creole' },
                                        { label: 'Hakka', value: 'Hakka' },
                                        { label: 'Hakka-chinese', value: 'Hakka-chinese' },
                                        { label: 'Hausa', value: 'Hausa' },
                                        { label: 'Hebrew', value: 'Hebrew' },
                                        { label: 'Hindi', value: 'Hindi' },
                                        { label: 'Hmong', value: 'Hmong' },
                                        { label: 'Hungarian', value: 'Hungarian' },
                                        { label: 'Ibanag', value: 'Ibanag' },
                                        { label: 'Icelandic', value: 'Icelandic' },
                                        { label: 'Igbo', value: 'Igbo' },
                                        { label: 'Ilocano', value: 'Ilocano' },
                                        { label: 'Indonesian', value: 'Indonesian' },
                                        { label: 'Inuktitut', value: 'Inuktitut' },
                                        { label: 'Italian', value: 'Italian' },
                                        { label: 'Jakartanese', value: 'Jakartanese' },
                                        { label: 'Japanese', value: 'Japanese' },
                                        { label: 'Javanese', value: 'Javanese' },
                                        { label: 'Kanjobal', value: 'Kanjobal' },
                                        { label: 'Karen', value: 'Karen' },
                                        { label: 'Karenni', value: 'Karenni' },
                                        { label: 'Kashmiri', value: 'Kashmiri' },
                                        { label: 'Kazakh', value: 'Kazakh' },
                                        { label: 'Kikuyu', value: 'Kikuyu' },
                                        { label: 'Kinyarwanda', value: 'Kinyarwanda' },
                                        { label: 'Kirundi', value: 'Kirundi' },
                                        { label: 'Korean', value: 'Korean' },
                                        { label: 'Kosovan', value: 'Kosovan' },
                                        { label: 'Kotokoli', value: 'Kotokoli' },
                                        { label: 'Krio', value: 'Krio' },
                                        { label: 'Kurdish', value: 'Kurdish' },
                                        { label: 'Kurmanji', value: 'Kurmanji' },
                                        { label: 'Kyrgyz', value: 'Kyrgyz' },
                                        { label: 'Lakota', value: 'Lakota' },
                                        { label: 'Laotian', value: 'Laotian' },
                                        { label: 'Latvian', value: 'Latvian' },
                                        { label: 'Lingala', value: 'Lingala' },
                                        { label: 'Lithuanian', value: 'Lithuanian' },
                                        { label: 'Luganda', value: 'Luganda' },
                                        { label: 'Maay', value: 'Maay' },
                                        { label: 'Macedonian', value: 'Macedonian' },
                                        { label: 'Malay', value: 'Malay' },
                                        { label: 'Malayalam', value: 'Malayalam' },
                                        { label: 'Maltese', value: 'Maltese' },
                                        { label: 'Mandarin', value: 'Mandarin' },
                                        { label: 'Mandingo', value: 'Mandingo' },
                                        { label: 'Mandinka', value: 'Mandinka' },
                                        { label: 'Marathi', value: 'Marathi' },
                                        { label: 'Marshallese', value: 'Marshallese' },
                                        { label: 'Mirpuri', value: 'Mirpuri' },
                                        { label: 'Mixteco', value: 'Mixteco' },
                                        { label: 'Moldavan', value: 'Moldavan' },
                                        { label: 'Mongolian', value: 'Mongolian' },
                                        { label: 'Montenegrin', value: 'Montenegrin' },
                                        { label: 'Navajo', value: 'Navajo' },
                                        { label: 'Neapolitan', value: 'Neapolitan' },
                                        { label: 'Nepali', value: 'Nepali' },
                                        { label: 'Nigerian Pidgin', value: 'Nigerian Pidgin' },
                                        { label: 'Norwegian', value: 'Norwegian' },
                                        { label: 'Oromo', value: 'Oromo' },
                                        { label: 'Pahari', value: 'Pahari' },
                                        { label: 'Papago', value: 'Papago' },
                                        { label: 'Papiamento', value: 'Papiamento' },
                                        { label: 'Pashto', value: 'Pashto' },
                                        { label: 'Patois', value: 'Patois' },
                                        { label: 'Pidgin English', value: 'Pidgin English' },
                                        { label: 'Polish', value: 'Polish' },
                                        { label: 'Portug.creole', value: 'Portug.creole' },
                                        { label: 'Portuguese', value: 'Portuguese' },
                                        { label: 'Pothwari', value: 'Pothwari' },
                                        { label: 'Pulaar', value: 'Pulaar' },
                                        { label: 'Punjabi', value: 'Punjabi' },
                                        { label: 'Putian', value: 'Putian' },
                                        { label: 'Quichua', value: 'Quichua' },
                                        { label: 'Romanian', value: 'Romanian' },
                                        { label: 'Russian', value: 'Russian' },
                                        { label: 'Samoan', value: 'Samoan' },
                                        { label: 'Serbian', value: 'Serbian' },
                                        { label: 'Shanghainese', value: 'Shanghainese' },
                                        { label: 'Shona', value: 'Shona' },
                                        { label: 'Sichuan', value: 'Sichuan' },
                                        { label: 'Sicilian', value: 'Sicilian' },
                                        { label: 'Sinhalese', value: 'Sinhalese' },
                                        { label: 'Slovak', value: 'Slovak' },
                                        { label: 'Somali', value: 'Somali' },
                                        { label: 'Sorani', value: 'Sorani' },
                                        { label: 'Spanish', value: 'Spanish' },
                                        { label: 'Sudanese Arabic', value: 'Sudanese Arabic' },
                                        { label: 'Sundanese', value: 'Sundanese' },
                                        { label: 'Susu', value: 'Susu' },
                                        { label: 'Swahili', value: 'Swahili' },
                                        { label: 'Swedish', value: 'Swedish' },
                                        { label: 'Sylhetti', value: 'Sylhetti' },
                                        { label: 'Tagalog', value: 'Tagalog' },
                                        { label: 'Taiwanese', value: 'Taiwanese' },
                                        { label: 'Tajik', value: 'Tajik' },
                                        { label: 'Tamil', value: 'Tamil' },
                                        { label: 'Telugu', value: 'Telugu' },
                                        { label: 'Thai', value: 'Thai' },
                                        { label: 'Tibetan', value: 'Tibetan' },
                                        { label: 'Tigre', value: 'Tigre' },
                                        { label: 'Tigrinya', value: 'Tigrinya' },
                                        { label: 'Toishanese', value: 'Toishanese' },
                                        { label: 'Tongan', value: 'Tongan' },
                                        { label: 'Toucouleur', value: 'Toucouleur' },
                                        { label: 'Trique', value: 'Trique' },
                                        { label: 'Tshiluba', value: 'Tshiluba' },
                                        { label: 'Turkish', value: 'Turkish' },
                                        { label: 'Ukrainian', value: 'Ukrainian' },
                                        { label: 'Urdu', value: 'Urdu' },
                                        { label: 'Uyghur', value: 'Uyghur' },
                                        { label: 'Uzbek', value: 'Uzbek' },
                                        { label: 'Vietnamese', value: 'Vietnamese' },
                                        { label: 'Visayan', value: 'Visayan' },
                                        { label: 'Welsh', value: 'Welsh' },
                                        { label: 'Wolof', value: 'Wolof' },
                                        { label: 'Yiddish', value: 'Yiddish' },
                                        { label: 'Yoruba', value: 'Yoruba' },
                                        { label: 'Yupik', value: 'Yupik' }

                                    ]}
                                />

                            </View>

                            <View style={styles.inputContainer2}>
                                <RNPickerSelect
                                    onValueChange={(value) => console.log(value)}
                                    placeholder={{
                                        label: 'Work Experience',
                                        value: null,
                                    }}
                                    items={[
                                        { label: 'Yes', value: 'Yes' },
                                        { label: 'No', value: 'No' },
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
                            <View style={styles.inputContainer2}>
                                <RNPickerSelect
                                    onValueChange={(value) => console.log(value)}
                                    placeholder={{
                                        label: 'Role',
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
                                    placeholder="Company"
                                    underlineColorAndroid='transparent'
                                />
                            </View>

                            <View style={styles.inputContainer2}>
                                <RNPickerSelect
                                    onValueChange={(value) => console.log(value)}
                                    placeholder={{
                                        label: 'Sector',
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
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.inputs}
                                    placeholder="Start date"
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.inputs}
                                    placeholder="End date"
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.inputs}
                                    placeholder="Currently work here?"
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={styles.inputContainer2}>
                                <RNPickerSelect
                                    onValueChange={(value) => console.log(value)}
                                    placeholder={{
                                        label: 'Coding languages',
                                        value: null,
                                    }}
                                    items={[
                                        { label: 'C#', value: 'C#' },
                                        { label: 'C++', value: 'C++' },
                                        { label: 'CSS', value: 'CSS' },
                                        { label: 'HTML', value: 'HTML' },
                                        { label: 'Java', value: 'Java' },
                                        { label: 'Javascript', value: 'Javascript' },
                                        { label: 'Perl', value: 'Perl' },
                                        { label: 'PHP', value: 'PHP' },
                                        { label: 'Python', value: 'Python' },
                                        { label: 'Ruby', value: 'Ruby' },
                                        { label: 'SQL', value: 'SQL' },
                                        { label: 'Swift', value: 'Swift' },
                                        { label: 'XML', value: 'XML' },
                                    ]}
                                />
                            </View>
                            <View style={styles.inputContainer2}>
                                <RNPickerSelect
                                    onValueChange={(value) => console.log(value)}
                                    placeholder={{
                                        label: 'Top 3 skills',
                                        value: null,
                                    }}
                                    items={[
                                        { label: 'Ability to get back up and keep going', value: 'Ability to get back up and keep going' },
                                        { label: 'Ability to interact well with people from different backgrounds', value: 'Ability to interact well with people from different backgrounds' },
                                        { label: 'Always full full of energy', value: 'Always full full of energy' },
                                        { label: 'Creative thinking', value: 'Creative thinking' },
                                        { label: 'Emotional Intelligence', value: 'Emotional Intelligence' },
                                        { label: 'Enterpreneural skills', value: 'Enterpreneural skills' },
                                        { label: 'Fast learner', value: 'Fast learner' },
                                        { label: 'Flexibility & adaptability', value: 'Flexibility & adaptability' },
                                        { label: 'Negotiation & persuasion', value: 'Negotiation & persuasion' },
                                        { label: 'Organisational skills', value: 'Organisational skills' },
                                        { label: 'Research skills', value: 'Research skills' },
                                        { label: 'Team working skills', value: 'Team working skills' },
                                        { label: 'Data Analysis', value: 'Data Analysis' },
                                        { label: 'Copywriting', value: 'Copywriting' },
                                        { label: 'Foreign Languages', value: 'Foreign Languages' },
                                        { label: 'Accounting', value: 'Accounting' },
                                        { label: 'Computer Languages', value: 'Computer Languages' },
                                        { label: 'Mathematics', value: 'Mathematics' },
                                        { label: 'Graphic Design', value: 'Graphic Design' },
                                        { label: 'Planning / Event Planning', value: 'Planning / Event Planning' },
                                        { label: 'SEO / SEM Marketing', value: 'SEO / SEM Marketing' },
                                        { label: 'Bookkeeping', value: 'Bookkeeping' },
                                        { label: 'Communication', value: 'Communication' },
                                        { label: 'Teamwork', value: 'Teamwork' },
                                        { label: 'Problem-solving', value: 'Problem-solving' },
                                        { label: 'Organisation', value: 'Organisation' },
                                        { label: 'Time management', value: 'Time management' },
                                        { label: 'Motivation', value: 'Motivation' },
                                        { label: 'Adaptability', value: 'Adaptability' },
                                        { label: 'Critical thinking', value: 'Critical thinking' },
                                    ]}
                                />
                            </View>
                            <View style={styles.inputContainer2}>
                                <RNPickerSelect
                                    onValueChange={(value) => console.log(value)}
                                    placeholder={{
                                        label: 'Extra currucular activities',
                                        value: null,
                                    }}
                                    items={[
                                        { label: 'Cadets', value: 'Cadets' },
                                        { label: 'Captain of a sport team', value: 'Captain of a sport team' },
                                        { label: 'Contribution to journals', value: 'Contribution to journals' },
                                        { label: 'Drama', value: 'Drama' },
                                        { label: 'Enterpreneurship', value: 'Enterpreneurship' },
                                        { label: 'Gap year or extensive international travel', value: 'Gap year or extensive international travel' },
                                        { label: 'Head of student club or society', value: 'Head of student club or society' },
                                        { label: 'Member of a sport team', value: 'Member of a sport team' },
                                        { label: 'Member of a student club society', value: 'Member of a student club society' },
                                        { label: 'Music', value: 'Music' },
                                        { label: 'Other', value: 'Other' },
                                        { label: 'Peer mentoring', value: 'Peer mentoring' },
                                        { label: 'Position held in student body', value: 'Position held in student body' },
                                        { label: 'Tutoring', value: 'Tutoring' },
                                        { label: 'Volunteering, charity, community work', value: 'Volunteering, charity, community work' },
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
