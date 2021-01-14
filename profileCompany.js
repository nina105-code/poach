import React, { Component } from 'react';
import ProgressCircle from 'react-native-progress-circle';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import CalendarCompany from '../profile-company/calendarCompany';
import JobInsightsCompany from '../profile-company/jobInsightsCompany';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

export class ProfileCompany extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Profile: '100',
            CompanyName: 'Company Name',
        };
    }
    editCompany = () => {
        this.props.navigation.navigate('EditCompany')
    }
    postedJobsCompany = () => {
        this.props.navigation.navigate('PostedJobsCompany')
    }
    postJobsCompany = () => {
        this.props.navigation.navigate('PostJobsCompany')
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
                        <TouchableHighlight onPress={this.editCompany} underlayColor={'transparent'}>
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
                        
                    </View>
                    </View>
                    <View style={styles.infoCompany}>
                        <View style={styles.logoCompany}>
                            <Text style={styles.textWhite}>Logo</Text>
                        </View>
                        <View style={styles.textCompany}>
                            <Text style={{ fontSize: 18, color: '#00263b' }}>{this.state.CompanyName}</Text>
                        </View> 
                    </View>
                    <View style={styles.jobsCompany}>
                        <View style={styles.postJobs}>
                            <TouchableHighlight onPress={this.postedJobsCompany} underlayColor={'transparent'}>
                                <MaterialIcons name="poll" size={90} color='#00263b'/>
                            </TouchableHighlight>
                            <Text style={styles.textBlack}>Jobs Posted</Text>
                        </View>
                        <View style={styles.postJobs}>
                            <TouchableHighlight onPress={this.postJobsCompany} underlayColor={'transparent'}>
                                <MaterialIcons name="work" size={90} color='#f37121'/>
                            </TouchableHighlight>
                            <Text style={styles.textBlack}>Post a Job!</Text>
                        </View>
                    </View>
                    <View style={{ padding: 20 }}>
                        <Text style={{ textAlign: 'left', fontSize: 20, color: '#00263b' }}>About us</Text>
                        <View style={{ paddingTop: 20, paddingBottom: 30}}>
                            <Text style={[{ textAlign: 'left' }, styles.textBlack]}><Text style={{ fontWeight: 'bold'}}>Industry: </Text>Finance</Text>
                            <Text style={[{ textAlign: 'left' }, styles.textBlack]}><Text style={{ fontWeight: 'bold'}}>Founded: </Text>May 2015</Text>
                            <Text style={[{ textAlign: 'left' }, styles.textBlack]}><Text style={{ fontWeight: 'bold'}}>Address: </Text>E14 5PZ, London, UK</Text>
                            <Text style={[{ textAlign: 'left' }, styles.textBlack]}><Text style={{ fontWeight: 'bold'}}>Company description: </Text>Solaris international was founded in may 2015 and focuses primarily on auditing…</Text>   
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
        ProfileCompany: {
            screen: ProfileCompany,
            navigationOptions: {
                tabBarLabel: 'Profile',
                activeColor: '#fb7813',
                inactiveColor: 'white',
                barStyle: { backgroundColor: '#00263b' },
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon name={'business'} size={25} color={tintColor} />
                    </View>
                )
            }
        },
        CalendarCompany: {
            screen: CalendarCompany,
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
        JobInsightsCompany: {
            screen: JobInsightsCompany,
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
    infoCompany: {
        paddingTop: 40,  
        flexDirection: 'column',
        alignItems: 'center',
    },
    textCompany: { 
        paddingTop: 10,      
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoCompany: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fb7813',
    },
    jobsCompany: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    postJobs: {
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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