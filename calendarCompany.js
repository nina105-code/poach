import React, { Component } from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import { 
    StyleSheet, 
    Text, 
    View 
} from 'react-native';

export default class CalendarCompany extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
            selectedEndDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date, type) {
        //function to handle the date change 
        if (type === 'END_DATE') {
            this.setState({
                selectedEndDate: date,
            });
        } else {
            this.setState({
                selectedStartDate: date,
                selectedEndDate: null,
            });
        }
    }
    render() {
        const { selectedStartDate, selectedEndDate } = this.state;
        const minDate = new Date(2018, 1, 1); // Min date
        const maxDate = new Date(2050, 6, 3); // Max date
        const startDate = moment(selectedStartDate).format("DD.MM.YYYY, HH:mm") //Start date
        const endDate = moment(selectedEndDate).format("DD.MM.YYYY, HH:mm")  //End date
        return (
            <View style={styles.container}>
                <CalendarPicker
                    startFromMonday={true}
                    allowRangeSelection={true}
                    minDate={minDate}
                    maxDate={maxDate}
                    weekdays={['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
                    months={[
                        'January',
                        'Febraury',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December',
                    ]}
                    previousTitle="Previous"
                    nextTitle="Next"
                    todayBackgroundColor="#fb7813"
                    selectedDayColor="#00263b"
                    selectedDayTextColor="white"
                    scaleFactor={375}
                    textStyle={{
                        fontFamily: 'normal',
                        color: '#00263b',
                    }}
                    onDateChange={this.onDateChange}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 50,
    },
});
