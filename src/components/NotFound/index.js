import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';
import AppStyles from 'common/AppStyles';

export default function NotFound(props) {
  const { data, searchCriteriaTxt, notFoundTxt } = props;
  return (
    <View style={{ ...AppStyles.centerStyle, flex: 1 }}>
      {data == null && <Image style={styles.noneImg}
        source={require('../../../assets/icons/img_arrow.png')} resizeMode='contain' />}
      {data == null && <Text
        style={styles.searchTxt}>{searchCriteriaTxt}</Text>}
      {data?.length == 0 && <Image style={styles.noneImg}
        source={require('../../../assets/icons/order_red.png')} resizeMode='contain' />}
      {data?.length == 0 && <Text style={{ marginTop: 16 }}>{notFoundTxt}</Text>}
    </View>
  );
}