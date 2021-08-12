import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import styles from './style';
import DateTimePicker from '@react-native-community/datetimepicker';
import PropTypes from "prop-types";

export default class DatePickerCustom extends Component {
  static propTypes = {
    fromDate: PropTypes.string,
    toDate: PropTypes.string,
    setFromDate: PropTypes.func,
    setToDate: PropTypes.func,
  };
  static defaultProps = {
    fromDate: '',
    toDate: '',
    setFromDate: () => { },
    setToDate: () => { },
  };

  constructor(props) {
    super(props);
    this.state = {
      showFromDate: false,
      showToDate: false,
    };
  }

  toggleFromDate = (showFromDate) => {
    this.setState({ showFromDate });
  };

  toggleToDate = (showToDate) => {
    this.setState({ showToDate });
  };

  onFromDateChange = (event, selectedDate) => {
    const { fromDate, setFromDate } = this.props;
    const currentDate = selectedDate || fromDate;
    this.toggleFromDate(Platform.OS === 'ios');
    setFromDate(currentDate);
  };

  onToDateChange = (event, selectedDate) => {
    const { toDate, setToDate } = this.props;
    const currentDate = selectedDate || toDate;
    this.toggleToDate(Platform.OS === 'ios');
    setToDate(currentDate);
  };

  render() {
    const { fromDate, toDate } = this.props;
    const { showFromDate, showToDate } = this.state;
    return (
      <View>
        {showFromDate && <View style={styles.datePicker}>
          {Platform.OS === 'ios' && <View style={styles.doneBtn}>
            <Text onPress={() => this.toggleFromDate(false)} style={styles.doneTxt}>Xong</Text>
          </View>}
          <DateTimePicker
            maximumDate={new Date()}
            testID="dateTimePicker"
            value={fromDate ? new Date(fromDate) : new Date()}
            mode={'date'}
            is24Hour={true}
            display="spinner"
            onChange={this.onFromDateChange}
          />
        </View>}
        {showToDate && <View style={styles.datePicker}>
          {Platform.OS === 'ios' && <View style={styles.doneBtn}>
            <Text onPress={() => this.toggleToDate(false)} style={styles.doneTxt}>Xong</Text>
          </View>}
          <DateTimePicker
            maximumDate={new Date()}
            testID="dateTimePicker"
            value={toDate ? new Date(toDate) : new Date()}
            mode={'date'}
            is24Hour={true}
            display="spinner"
            onChange={this.onToDateChange}
          />
        </View>}
      </View>
    );
  }
}