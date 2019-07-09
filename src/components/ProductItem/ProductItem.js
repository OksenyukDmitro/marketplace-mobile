import React from 'react';
import { View, Text, Image } from 'react-native';
import T from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import s from './styles';
import { Touchable } from '../';
import { colors } from '../../styles';

function ProductItem({
  viewer,
  productsSaveSwitcher,
  onImageError,
  rootProps,
  item,
}) {
  const { title, price, photos, saved } = item;
  const { onItemPress } = rootProps;
  var test = require('../../images/noImageList.jpg');
  return (
    <View style={s.container}>
      <Touchable
        style={s.touchable}
        containerStyle={s.touchable}
        borderless
        onPress={() => onItemPress(item.id)}
      >
        <Image
          source={
            Array.isArray(photos) && photos.length > 0
              ? { uri: photos[0] }
              : test
          }
          style={s.image}
          onError={onImageError}
        />
        <View style={s.content}>
          <Text style={s.title} numberOfLines={1}>
            {title}
          </Text>
          <View style={s.bottomRow}>
            <Text style={s.price} numberOfLines={1}>
              {price ? `$${price}` : 'free'}
            </Text>
            <Touchable
              onPress={productsSaveSwitcher}
              useOpacityAndroid
              hitSlop={6}
            >
              {item && viewer && item.ownerId === viewer.id ? null : (
                <FontAwesome
                  name={saved ? 'bookmark' : 'bookmark-o'}
                  size={22}
                  color={colors.textUnused}
                />
              )}
            </Touchable>
          </View>
        </View>
      </Touchable>
    </View>
  );
}

ProductItem.propTypes = {
  item: T.object.isRequired,
  isImageError: T.bool,
  onImageError: T.func,
  onOpenProduct: T.func,
  productsSaveSwitcher: T.func,
};

ProductItem.defaultProps = {
  isImageError: false,
  onImageError: () => {},
  onOpenProduct: () => {},
  productsSaveSwitcher: () => {},
};

export default ProductItem;
