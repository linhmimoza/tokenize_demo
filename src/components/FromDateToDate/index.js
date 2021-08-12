import React from "react";
import { View, Pressable, Text } from "react-native";
import styles from "./style";
import AppColors from "common/AppColors";
import AppStyles from "common/AppStyles";
import moment from "moment";
import PropTypes from "prop-types";

export default function FromDateToDate(props) {
  const { toggleFromDate, toggleToDate, fromDate, toDate, style } = props;

  return (
    <View style={[{ flexDirection: 'row' }, style]}>
      <Pressable style={[styles.datePickerCont, { marginRight: 4, flex: 1 }]}
        onPress={() => toggleFromDate(true)}>
        <Text style={{ ...AppStyles.textCustom(AppColors.dark, 12, '400', 20) }}>{fromDate === '' ?
          'Từ ngày' : moment(fromDate).format('DD/MM/YYYY')}</Text>
      </Pressable>
      <Pressable style={[styles.datePickerCont, { marginLeft: 4, flex: 1 }]}
        onPress={() => toggleToDate(true)}>
        <Text style={{ ...AppStyles.textCustom(AppColors.dark, 12, '400', 20) }}>{toDate === '' ?
          'Đến ngày' : moment(toDate).format('DD/MM/YYYY')}</Text>
      </Pressable>
    </View>
  );
}

FromDateToDate.propTypes = {
  fromDate: PropTypes.string,
  toDate: PropTypes.string,
  toggleFromDate: PropTypes.func,
  toggleToDate: PropTypes.func,
};
FromDateToDate.defaultProps = {
  fromDate: '',
  toDate: '',
  toggleFromDate: () => { },
  toggleToDate: () => { },
};


