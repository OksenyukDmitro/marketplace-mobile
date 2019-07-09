import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import s from './styles';
import { NavigationService } from '../../services';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import {
  SearchInput,
  Touchable,
  ProductList,
} from '../../components';
import { colors } from '../../styles';
function BrowseScreen({
  list,
  isLoading,
  isLoadingMore,
  fetchLatest,
  fetchLatestMore,
  openProduct,
}) {
  return (
    <View style={s.container}>
      <ProductList
        items={list}
        isLoading={isLoading}
        isLoadingMore={isLoadingMore}
        fetchItems={fetchLatest}
        fetchItemsMore={fetchLatestMore}
        onItemPress={openProduct}
      />
    </View>
  );
}

BrowseScreen.navigationOptions = (props) => {
  const onChangeSearchText = props.navigation.getParam(
    'onChangeSearchText',
  );
  const text = props.navigation.getParam('text');

  return {
    header: (
      <View style={s.headerContainer}>
        <SearchInput
          style={s.inputContainer}
          placeholder="hoodie"
          text={text}
          handleChange={onChangeSearchText}
        >
          <Ionicons
            name="ios-search"
            size={28}
            color={colors.primary}
          />
        </SearchInput>
        {text && text.length > 2 ? (
          <Touchable
            hitSlop={10}
            onPress={() => NavigationService.navigateToFilter()}
            style={s.headerRight}
            useOpacityAndroid
          >
            <Ionicons
              name="md-send"
              color={colors.primary}
              size={28}
            />
          </Touchable>
        ) : null}
        <Touchable
          hitSlop={10}
          onPress={() => NavigationService.navigateToFilter()}
          useOpacityAndroid
        >
          <AntDesign name="filter" size={28} color={colors.primary} />
        </Touchable>
      </View>
    ),
  };
};

BrowseScreen.propTypes = {
  list: T.array.isRequired,
  isLoading: T.bool,
  isLoadingMore: T.bool,
  fetchLatest: T.func,
  fetchLatestMore: T.func,
  openProduct: T.func,
};

const func = () => {};

BrowseScreen.defaultProps = {
  isLoading: false,
  isLoadingMore: false,
  fetchLatest: func,
  fetchLatestMore: func,
  openProduct: func,
};
export default BrowseScreen;
