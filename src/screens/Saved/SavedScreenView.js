import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import T from 'prop-types';
import s from './styles';
import { SearchInput } from '../../components';
import { colors } from '../../styles';
import ProductList from '../../components/ProductsList/ProductsList';
import NoAccess from '../../components/NoAccess/NoAccess';

function SavedScreen({
  isLoading,
  list,
  fetchSaved,
  openProduct,
  viewer,
}) {
  if (!viewer || viewer === null)
    return <NoAccess text="Login to save items" />;
  return (
    <ProductList
      fetchItems={fetchSaved}
      isLoading={isLoading}
      items={list}
      onItemPress={openProduct}
    />
  );
}

SavedScreen.navigationOptions = () => ({
  header: (
    <View style={s.headerContainer}>
      <SearchInput style={s.searchInput}>
        <Ionicons
          name="ios-search"
          size={28}
          color={colors.primary}
        />
      </SearchInput>
    </View>
  ),
});

SavedScreen.propTypes = {
  list: T.array.isRequired,
  isLoading: T.bool,
  fetchSaved: T.func,
};

SavedScreen.defaultProps = {
  isLoading: false,
  fetchSaved: () => {},
};

export default SavedScreen;
