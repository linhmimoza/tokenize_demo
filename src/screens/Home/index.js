import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import styles from './style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from 'actions';
import ContainerView from 'components/ContainerView';
import {
  createErrorMessageSelector,
  createLoadingSelector,
  createLoadMoreSelector,
  createRefreshSelector,
} from 'reducers/selectors';
import Spinner from 'components/LoadingSpinner/ComponentLoading';

function Home(props) {
  const { loading } = props;

  return (
    <ContainerView safeAreaPaddingEnabled style={styles.container}>
      <Spinner visible={loading} />
      <View style={styles.flexRowCont}>
        <Text style={styles.title}>HOME</Text>
        <Image style={styles.icSearch} source={require('../../../assets/icons/search.png')} />
      </View>
    </ContainerView>
  );
}

const loadingMoreSelector = createLoadMoreSelector([]);

const errorSelector = createErrorMessageSelector([]);

const loadingSelector = createLoadingSelector([]);

const refreshSelector = createRefreshSelector([]);

const mapStateToProps = (state) => ({
  error: errorSelector(state),
  loadingMore: loadingMoreSelector(state),
  loading: loadingSelector(state),
  refreshing: refreshSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
