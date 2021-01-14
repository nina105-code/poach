import React, { Component } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

export default class MessagesStudent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            CompanyName: 'Company Name',
            PositionName: 'Position Name',
            ShortDescription: 'Short Description.',

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
                    <View style={styles.msgContainer}>
                        <View style={styles.msgInfo}>
                            <Text style={{ fontSize: 18, color: '#00263b' }}>{this.state.CompanyName}</Text>
                            <Text style={{ fontSize: 15, color: '#00263b' }}>{this.state.PositionName}</Text>
                            <Text style={styles.textBlack}>{this.state.ShortDescription}</Text>   
                        </View>
                        <View style={styles.msgAccept}>
                            <TouchableHighlight onPress={this.pressOffer} underlayColor={'transparent'} style={styles.btnContainer}>
                                <MaterialIcons name="check-circle" size={25} color='#fb7813'/>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={'transparent'} style={styles.btnContainer}>
                                <MaterialIcons name="cancel" size={25} color='#00263b'/>
                            </TouchableHighlight>   
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
    msgContainer: {
        paddingVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderBottomColor: "#00263b",
        borderBottomWidth: 0.2,
    },
    msgInfo: {
        flex: 6,
        justifyContent: "center",
        paddingHorizontal: 25,
    },
    msgAccept:{
        flex: 2,
        paddingHorizontal: 20,
        alignItems: "center",
        flexDirection: "row",
    },
    btnContainer: {
        marginHorizontal: 5,
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