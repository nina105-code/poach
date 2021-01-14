import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

export default class OfferStudent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Logo: 'Logo',
            Title: [
                'Company Name',
                'Position Name',
                'Position Type (intern, full time, etc...)',
            ],
            Responsibilities: [
               '1',
               '2',
               '3',
            ],
            Requirements: [
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
             ],
        };
    }
    pressChat = () => {
        this.props.navigation.navigate('ChatStudent')
    }
    render() {
    return (
        <View style={{ flex: 1, backgroundColor: '#00263b' }}>
            <View style={styles.stickyHeader}></View> 
                <View style={styles.container}>
                    <View style={styles.offerContainer}>
                        <View style={styles.offerContainerBorder}> 
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={styles.msgContainer}>
                                    <View style={styles.msgTitle}>
                                        <View style={styles.companyLogo}>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>{this.state.Logo}</Text>
                                        </View>
                                        <View style={styles.companyTextContainer}>
                                            {this.state.Title.map(item => (
                                                <Text style={styles.companyText}key={item}>{item}</Text>
                                            ))}
                                        </View>
                                    </View>
                                    <View style={styles.msgTextContainer}>
                                        <View style={styles.heading}>
                                            <Text style={styles.msgHeading}>Responsibilities:</Text>
                                        </View>
                                        <View style={styles.text}>
                                            {this.state.Responsibilities.map(item => (
                                                <Text style={styles.msgText}key={item}>{item}</Text>
                                            ))}
                                        </View>
                                        <View style={styles.heading}>
                                            <Text style={styles.msgHeading}>Requirements:</Text>
                                        </View>
                                        <View style={styles.text}>
                                            {this.state.Requirements.map(item => (
                                                <Text style={styles.msgText}key={item}>{item}</Text>
                                            ))}
                                        </View>
                                    </View>
                                    
                                </View>
                                                          
                            </ScrollView> 
                        </View>
                        <TouchableHighlight onPress={this.pressChat} underlayColor={'#fb7813'} style={styles.btnContainer}>
                            <Text style={styles.textWhite}>Chat</Text>
                        </TouchableHighlight>
                     </View>  
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
        padding: 20,
    },
    stickyHeader: {
        height: 25,
        backgroundColor: 'white',
        borderBottomColor: "#00263b",
        borderBottomWidth: 0.2,
    },
    offerContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#fb7813',
    },
    offerContainerBorder: {
        flex: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#00263b',
    },
    msgContainer: {
        padding: 15,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    msgTitle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    msgTextContainer: {
        flexDirection: 'column',
        paddingTop: 20,
    },
    msgText: {
        fontSize: 13, 
        marginBottom: 5, 
        color: '#00263b',
    },
    msgHeading: {
        fontSize: 15, 
        fontWeight: 'bold', 
        color: '#00263b',
    },
    companyLogo: {
        width: 120,
        height: 120,
        backgroundColor: "#fb7813",
        alignItems: 'center',
        justifyContent: 'center',
    },
    companyTextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    companyText: {
        fontSize: 15, 
        marginBottom: 3, 
        color: '#00263b',
    },
    text: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    btnContainer: {
        backgroundColor: "#fb7813",
        padding: 7,
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 3,
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