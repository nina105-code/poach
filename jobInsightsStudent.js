import React, { Component } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

export default class JobInsightsStudent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            Logo: 'Logo',
            Title: [
                'Position Name',
                'Position Description',
            ],
            DateCreated: 'DD/MM/YYYY',
        };
    }
    pressOffer = () => {
        this.props.navigation.navigate('OfferStudent')
    }
    render() {
    return (
        <View style={{ flex: 1, backgroundColor: '#00263b' }}>
            <View style={styles.stickyHeader}></View>
                <View style={styles.container}>
                <View style={styles.insideContainer}>
                <View style={{ flex: 1, backgroundColor: 'white',}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.jobContainer}>
                        <View style={styles.logoCompany}>
                            <Text style={{ fontSize: 18, color: 'white' }}>{this.state.Logo}</Text>
                        </View>
                        <View style={styles.jobInfo}>
                            {this.state.Title.map(item => (
                                <Text style={styles.textBlack}key={item}>{item}</Text>
                            ))} 
                            <View style={styles.jobInfoAlign}>
                                <Text style={{ fontSize: 10, color: '#00263b' }}>Open until: {this.state.DateCreated}</Text>
                            </View>   
                        </View>
                    </View>
                </ScrollView>
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
        backgroundColor: '#00263b',
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    insideContainer: {
        flex: 1,
        backgroundColor: '#fb7813',
        flexDirection: 'column',
        padding: 2,
    },
    jobContainer: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderBottomColor: "#00263b",
        borderBottomWidth: 0.2,
    },
    logoCompany: {
        width: '40%',
        height: 90,
        backgroundColor: '#f37121',
        justifyContent: 'center',
        alignItems: 'center',
    },
    jobInfo: {
        flex: 1,
        justifyContent: "flex-start",
        paddingHorizontal: 20,
    },
    jobInfoAlign: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: 'flex-end',
    },
    stickyHeader: {
        height: 25,
        backgroundColor: 'white',
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