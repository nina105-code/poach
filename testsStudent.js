import React, { Component } from 'react';
import ProgressCircle from 'react-native-progress-circle';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
} from 'react-native';

export default class TestsStudent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Personality: '70',
            NumericalReasoning: '80',
            VerbalReasoning: '40',
            MultiTasking: '10',
            Math: '20',  
        };
    }
    render() {
    return (
        <View style={{ flex: 1, backgroundColor: '#00263b' }}>
            <View style={styles.stickyHeader}></View>
                <View style={styles.container}>
                    <View style={styles.graphsProgressContainer}>
                    <View style={styles.graphsProgressContainerInside}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.graphsProgress}>
                        <View style={styles.progress}>
                            <ProgressCircle
                                percent={this.state.Personality}
                                radius={44}
                                borderWidth={4}
                                color="#f37121"
                                shadowColor="#00263b"
                                bgColor="#fff"
                            >
                                <Text style={styles.textBlack}>{this.state.Personality + '%'}</Text>
                                <Text style={styles.textBlack}>Personality</Text>
                            </ProgressCircle>
                        </View>
                        <View style={styles.progress}>
                            <ProgressCircle
                                percent={this.state.NumericalReasoning}
                                radius={44}
                                borderWidth={4}
                                color="#f37121"
                                shadowColor="#00263b"
                                bgColor="#fff"
                            >
                                <Text style={styles.textBlack}>{this.state.NumericalReasoning + '%'}</Text>
                                <Text style={styles.textBlack}>NumericalR</Text>
                            </ProgressCircle>
                        </View>
                        <View style={styles.progress}>
                            <ProgressCircle
                                percent={this.state.VerbalReasoning}
                                radius={44}
                                borderWidth={4}
                                color="#f37121"
                                shadowColor="#00263b"
                                bgColor="#fff"
                            >
                                <Text style={styles.textBlack}>{this.state.VerbalReasoning + '%'}</Text>
                                <Text style={styles.textBlack}>VerbalR</Text>
                            </ProgressCircle>
                        </View>
                        <View style={styles.progress}>
                            <ProgressCircle
                                percent={this.state.MultiTasking}
                                radius={44}
                                borderWidth={4}
                                color="#f37121"
                                shadowColor="#00263b"
                                bgColor="#fff"
                            >
                                <Text style={styles.textBlack}>{this.state.MultiTasking + '%'}</Text>
                                <Text style={styles.textBlack}>MultiTasking</Text>
                            </ProgressCircle>
                        </View>
                        <View style={styles.progress}>
                            <ProgressCircle
                                percent={this.state.Math}
                                radius={44}
                                borderWidth={4}
                                color="#f37121"
                                shadowColor="#00263b"
                                bgColor="#fff"
                            >
                                <Text style={styles.textBlack}>{this.state.Math + '%'}</Text>
                                <Text style={styles.textBlack}>Math</Text>
                            </ProgressCircle>
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
    stickyHeader: {
        height: 25,
        backgroundColor: 'white',
    },
    graphsProgressContainer: {
        flex: 1,
        padding: 10,
        fontSize: 25,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#f37121',
    },
    graphsProgressContainerInside: {
        flex: 1,
        backgroundColor: '#00263b',
        borderWidth: 2,
        borderColor: '#f37121',
    },
    graphsProgress: {
        flexDirection: 'row',
        backgroundColor: '#00263b',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    progress: {
        padding: 15,
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