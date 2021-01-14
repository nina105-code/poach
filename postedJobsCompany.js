import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

export default class PostedJobsCompany extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }
    render() {
    return (
        <View style={{ flex: 1, backgroundColor: '#00263b' }}>
            <View style={styles.stickyHeader}></View>
                <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.jobContainer}>   
                        <View style={styles.jobInfo}>
                            <Text style={{ fontSize: 18, color: '#00263b' }}>Position Name</Text>
                            <Text style={{ color: '#00263b' }}>Position Description </Text>
                            <View style={styles.jobInfoAlign}>
                                <Text style={{ fontSize: 10, color: '#00263b' }}>City</Text>
                            </View>   
                        </View>
                        <View style={styles.logoCompany}>
                            <Text style={{ fontSize: 18, color: 'white' }}>Image</Text>
                        </View>
                    </View>
                    <View style={styles.jobContainer}>   
                        <View style={styles.jobInfo}>
                            <Text style={{ fontSize: 18, color: '#00263b' }}>Position Name</Text>
                            <Text style={{ color: '#00263b' }}>Position Description </Text>
                            <View style={styles.jobInfoAlign}>
                                <Text style={{ fontSize: 10, color: '#00263b' }}>City</Text>
                            </View>   
                        </View>
                        <View style={styles.logoCompany}>
                            <Text style={{ fontSize: 18, color: 'white' }}>Image</Text>
                        </View>
                    </View>
                    <View style={styles.jobContainer}>   
                        <View style={styles.jobInfo}>
                            <Text style={{ fontSize: 18, color: '#00263b' }}>Position Name</Text>
                            <Text style={{ color: '#00263b' }}>Position Description </Text>
                            <View style={styles.jobInfoAlign}>
                                <Text style={{ fontSize: 10, color: '#00263b' }}>City</Text>
                            </View>   
                        </View>
                        <View style={styles.logoCompany}>
                            <Text style={{ fontSize: 18, color: 'white' }}>Image</Text>
                        </View>
                    </View>
                    <View style={styles.jobContainer}>   
                        <View style={styles.jobInfo}>
                            <Text style={{ fontSize: 18, color: '#00263b' }}>Position Name</Text>
                            <Text style={{ color: '#00263b' }}>Position Description </Text>
                            <View style={styles.jobInfoAlign}>
                                <Text style={{ fontSize: 10, color: '#00263b' }}>City</Text>
                            </View>   
                        </View>
                        <View style={styles.logoCompany}>
                            <Text style={{ fontSize: 18, color: 'white' }}>Image</Text>
                        </View>
                    </View>
                    <View style={styles.jobContainer}>   
                        <View style={styles.jobInfo}>
                            <Text style={{ fontSize: 18, color: '#00263b' }}>Position Name</Text>
                            <Text style={{ color: '#00263b' }}>Position Description </Text>
                            <View style={styles.jobInfoAlign}>
                                <Text style={{ fontSize: 10, color: '#00263b' }}>City</Text>
                            </View>   
                        </View>
                        <View style={styles.logoCompany}>
                            <Text style={{ fontSize: 18, color: 'white' }}>Image</Text>
                        </View>
                    </View>
                    <View style={styles.jobContainer}>   
                        <View style={styles.jobInfo}>
                            <Text style={{ fontSize: 18, color: '#00263b' }}>Position Name</Text>
                            <Text style={{ color: '#00263b' }}>Position Description </Text>
                            <View style={styles.jobInfoAlign}>
                                <Text style={{ fontSize: 10, color: '#00263b' }}>City</Text>
                            </View>   
                        </View>
                        <View style={styles.logoCompany}>
                            <Text style={{ fontSize: 18, color: 'white' }}>Image</Text>
                        </View>
                    </View>
                    <View style={styles.jobContainer}>   
                        <View style={styles.jobInfo}>
                            <Text style={{ fontSize: 18, color: '#00263b' }}>Position Name</Text>
                            <Text style={{ color: '#00263b' }}>Position Description </Text>
                            <View style={styles.jobInfoAlign}>
                                <Text style={{ fontSize: 10, color: '#00263b' }}>City</Text>
                            </View>   
                        </View>
                        <View style={styles.logoCompany}>
                            <Text style={{ fontSize: 18, color: 'white' }}>Image</Text>
                        </View>
                    </View>    
                </ScrollView>
            </View>        
        </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00263b',
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    jobContainer: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderBottomColor: "#00263b",
        borderBottomWidth: 0.2,
    },
    logoCompany: {
        width: 90,
        height: 70,
        backgroundColor: '#f37121',
        justifyContent: 'center',
        alignItems: 'center',
    },
    jobInfo: {
        flex: 1,
        justifyContent: "flex-start",
        padding: 5,
    },
    jobInfoAlign: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: 'flex-end',
    },
    stickyHeader: {
        height: 25,
        backgroundColor: 'white',
    },
});