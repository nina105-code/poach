import React, { Component } from 'react';
import ProgressCircle from 'react-native-progress-circle';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';
import MessagesStudent from '../profile-student/messagesStudent';
import CalendarStudent from '../profile-student/calendarStudent';
import TestsStudent from '../profile-student/testsStudent';
import JobInsightsStudent from '../profile-student/jobInsightsStudent';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

export class ProfileStudent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Profile: '70',
            Tests: '80',
        };
    }
    pressEdit = () => {
        this.props.navigation.navigate('EditStudent') 
    }
    pressTests = () => {
        this.props.navigation.navigate('TestsStudent') 
    }
    render() {
        return (
        <View>
            <ScrollView style={{ paddingVertical: 1}} showsVerticalScrollIndicator={false}>
                <View style={styles.stickyHeader}>
                </View>
            </ScrollView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.graphsProgressContainer}>                
                    <View style={styles.graphsProgress}>
                        <TouchableHighlight onPress={this.pressEdit} underlayColor={'transparent'}>
                            <ProgressCircle
                                percent={this.state.Profile}
                                radius={44}
                                borderWidth={4}
                                color="#f37121"
                                shadowColor="#00263b"
                                bgColor="#fff"
                            >
                                <Text style={styles.textBlack}>{this.state.Profile + '%'}</Text>
                                <Text style={styles.textBlack}>Profile</Text>
                            </ProgressCircle>
                        </TouchableHighlight>
                        
                        <TouchableHighlight onPress={this.pressTests} underlayColor={'transparent'}>
                            <ProgressCircle
                                percent={this.state.Tests}
                                radius={44}
                                borderWidth={4}
                                color="#f37121"
                                shadowColor="#00263b"
                                bgColor="#fff"
                            >
                                <Text style={styles.textBlack}>{this.state.Tests + '%'}</Text>
                                <Text style={styles.textBlack}>Tests</Text>
                            </ProgressCircle>
                            
                        </TouchableHighlight>
                    </View>
                    </View>
                    <View style={{ padding: 20 }}>
                        <View>
                            <Text style={{ textAlign: 'left', fontSize: 25, color: '#00263b' }}>John</Text>
                            <Text style={{ textAlign: 'left', fontSize: 25, color: '#00263b' }}>Johnson</Text>
                        </View>
                        <View style={{ paddingVertical: 10 }}>
                            <Text style={[{ textAlign: 'left'}, styles.textBlack]}><Text style={{ fontWeight: 'bold'}}>Gender: </Text>Male</Text>
                            <Text style={[{ textAlign: 'left'}, styles.textBlack]}><Text style={{ fontWeight: 'bold'}}>Nationality: </Text>Serbian</Text>
                            <Text style={[{ textAlign: 'left'}, styles.textBlack]}><Text style={{ fontWeight: 'bold'}}>Full UK Driving Licence: </Text>Yes</Text>
                            <Text style={[{ textAlign: 'left'}, styles.textBlack]}><Text style={{ fontWeight: 'bold'}}>Birthday: </Text>01/07/1990</Text>
                        </View>
                        <View style={{ paddingVertical: 10 }}>
                            <Text style={{ textAlign: 'left', fontSize: 20, color: '#00263b' }}>Education</Text>
                            <Text style={[{ textAlign: 'left'}, styles.textBlack]}><Text style={{ fontWeight: 'bold'}}>School qualification type: </Text>A-Level</Text>
                            <Text style={[{ textAlign: 'left'}, styles.textBlack]}><Text style={{ fontWeight: 'bold'}}>Subjects: </Text>Biology</Text>
                            <Text style={[{ textAlign: 'left'}, styles.textBlack]}><Text style={{ fontWeight: 'bold'}}>University: </Text>STANFORD UNIVERSITY</Text>
                            <Text style={[{ textAlign: 'left'}, styles.textBlack]}><Text style={{ fontWeight: 'bold'}}>Degree Subject: </Text>Biological Sciences</Text>
                        </View>  
                        <View style={{ paddingVertical: 10 }}>
                            <Text style={{ textAlign: 'left', fontSize: 20, color: '#00263b' }}>Skills</Text>
                            <Text style={[{ textAlign: 'left'}, styles.textBlack]}><Text style={{ fontWeight: 'bold'}}>Language: </Text>English</Text>
                            <Text style={[{ textAlign: 'left'}, styles.textBlack]}><Text style={{ fontWeight: 'bold'}}>Work Experience: </Text>Yes</Text>
                            <Text style={[{ textAlign: 'left'}, styles.textBlack]}><Text style={{ fontWeight: 'bold'}}>Type: </Text>Full Time Job</Text>
                            <Text style={[{ textAlign: 'left'}, styles.textBlack]}><Text style={{ fontWeight: 'bold'}}>Role: </Text>Analyst</Text>
                            <Text style={[{ textAlign: 'left'}, styles.textBlack]}><Text style={{ fontWeight: 'bold'}}>Company: </Text>Poach</Text>   
                        </View>
                        <View style={{ paddingTop: 10, paddingBottom: 20}}>
                            <Text style={{ textAlign: 'left', fontSize: 20, color: '#00263b' }}>Goals</Text>
                            <Text style={[{ textAlign: 'left'}, styles.textBlack]}><Text style={{ fontWeight: 'bold'}}>Top 3 Industries: </Text>Account Manager</Text>
                            <Text style={[{ textAlign: 'left'}, styles.textBlack]}><Text style={{ fontWeight: 'bold'}}>Top 3 Positions: </Text>Research</Text>
                            <Text style={[{ textAlign: 'left'}, styles.textBlack]}><Text style={{ fontWeight: 'bold'}}>Type: </Text>Apprenticeship</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
        );
    }
}
const TabNavigator = createMaterialBottomTabNavigator(
    {
        ProfileStudent: {
            screen: ProfileStudent,
            navigationOptions: {
                tabBarLabel: 'Profile',
                activeColor: '#fb7813',
                inactiveColor: 'white',
                barStyle: { backgroundColor: '#00263b' },
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon name={'person'} size={25} color={tintColor} />
                    </View>
                )
            }
        },
        MessagesStudent: {
            screen: MessagesStudent,
            navigationOptions: {
                tabBarLabel: 'Messages',
                activeColor: '#fb7813',
                inactiveColor: 'white',
                barStyle: { backgroundColor: '#00263b' },
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon name={'send'} size={25} color={tintColor} />
                    </View>
                )
            }
        },
        CalendarStudent: {
            screen: CalendarStudent,
            navigationOptions: {
                tabBarLabel: 'Calendar',
                activeColor: '#fb7813',
                inactiveColor: 'white',
                barStyle: { backgroundColor: '#00263b' },
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon name={'perm-contact-calendar'} size={25} color={tintColor} />
                    </View>
                )
            }
        },
        TestsStudent: {
            screen: TestsStudent,
            navigationOptions: {
                tabBarLabel: 'Test',
                activeColor: '#fb7813',
                inactiveColor: 'white',
                barStyle: { backgroundColor: '#00263b' },
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon name={'assignment'} size={25} color={tintColor} />
                    </View>
                )
            }
        },
        JobInsightsStudent: {
            screen: JobInsightsStudent,
            navigationOptions: {
                tabBarLabel: 'Job Insights',
                activeColor: '#fb7813',
                inactiveColor: 'white',
                barStyle: { backgroundColor: '#00263b' },
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon name={'work'} size={25} color={tintColor} />
                    </View>
                )
            }
        },
    }
)
export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    graphsProgressContainer: {
        paddingBottom: 3,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: '#fb7813',
    },
    graphsProgress: {
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        flexDirection:'row',
        paddingVertical: 25,
        justifyContent: 'space-around',
        fontSize: 25,
        backgroundColor: '#00263b',
        shadowColor: "#00263b",
        shadowOffset: { width: 0, height: 5, },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    stickyHeader: {
        height: 23, 
        borderBottomColor: "#00263b",
        borderBottomWidth: 0.2,
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