import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import T from 'prop-types';
import s from './styles';
import { ProductItem } from '../';

function ProductList({
  items,
  isLoading,
  isLoadingMore,
  fetchItems,
  fetchItemsMore,
  ...props
}) {
  return (
    <FlatList
      style={s.container}
      refreshing={isLoading}
      onRefresh={fetchItems}
      onEndReached={fetchItemsMore}
      data={items}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ProductItem item={item} rootProps={props} />
      )}
      ListFooterComponent={() =>
        isLoadingMore ? (
          <View style={s.footerRefresh}>
            <ActivityIndicator size="large" />
          </View>
        ) : null
      }
    />
  );
}

ProductList.propTypes = {};

ProductList.defaultProps = {};

export default ProductList;
