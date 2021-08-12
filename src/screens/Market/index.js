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
import AppDimens from 'common/AppDimens';

function Market(props) {
  const { loading, markets } = props;
  useEffect(() => {
    props.getSummaries();
    props.getMarkets();
  }, []);
  const [selectedCoin, setSelectedCoin] = useState(markets[0]);

  useEffect(() => {
    setSelectedCoin(markets[0]);
  }, [markets]);
  // ↓
  const _renderItem = ({ item }) => {
    return (
      <View style={styles.itemCont}>
        <Image source={require('../../../assets/icons/bitcoin.png')} style={[styles.coinIc]} />
        <View style={[styles.midItemCont]}>
          <Text style={styles.titleTxt}>{item?.marketCurrencyLong}</Text>
          <Text style={styles.normalTxt}>{item?.marketName}</Text>
        </View>
        <View >
          <Text style={styles.priceTxt}>$3,535.24</Text>
          <Text style={styles.percentTxt}>+1,12% ↑</Text>
        </View>
      </View>
    );
  };

  const _renderItemHeader = ({ item, index }) => {
    const isSeleted = item?.title == selectedCoin?.title;
    return (
      <Pressable style={[styles.headerCont, isSeleted && styles.selectedCont]} onPress={() => setSelectedCoin(markets[index])}>
        <Text style={[styles.normalTxt, isSeleted && styles.whiteTxt]}>{item.title}</Text>
      </Pressable>
    );
  };

  return (
    <ContainerView safeAreaPaddingEnabled style={styles.container}>
      <Spinner visible={loading} />
      <View style={styles.flexRowCont}>
        <Text style={styles.title}>MARKETS</Text>
        <Image style={styles.icSearch} source={require('../../../assets/icons/search.png')} />
      </View>
      <FlatList
        horizontal
        data={markets}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(index) => `${index}`}
        renderItem={_renderItemHeader}
        ListHeaderComponent={() => <View style={{ width: AppDimens.padding.medium }} />}
        ListFooterComponent={() => <View style={{ width: AppDimens.padding.medium }} />}
        ItemSeparatorComponent={() => <View style={{ width: AppDimens.padding.small }} />}
      />
      <FlatList
        style={styles.flCont}
        data={selectedCoin?.list || []}
        showsVerticalScrollIndicator={false}
        keyExtractor={(index) => `${index}`}
        renderItem={_renderItem}
        ListHeaderComponent={() => <View style={{ height: AppDimens.padding.small }} />}
        ListFooterComponent={() => <View style={{ height: AppDimens.padding.large }} />}
        ItemSeparatorComponent={() => <View style={{ height: AppDimens.padding.small }} />}
      />
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
  summaries: state.generalReducer.summaries,
  markets: state.generalReducer.markets,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Market);
