import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Share,
} from 'react-native';
import T from 'prop-types';
import s from './styles';
import { Loader, Touchable } from '../../components';
import isOwnProduct from '../../utils/isOwnProduct';
import Slideshow from 'react-native-image-slider-show';
import { formatingTimeAgo } from '../../utils/formatDate';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { colors } from '../../styles';
import { NavigationService } from '../../services';
import NoProducts from '../../components/NoProducts/NoProducts';
import Dialog from 'react-native-dialog';

function ProductScreen({  
  productsSaveSwitcher,
  onImageError,
  product,
  isLoading,
  openChat,
  owner,
  viewer,
  readMore,
  isReadMore,
  openProfile,
  isSaved,
  isDialogOpen,
  handleToLogin,
  handleClose,
  handleCallPress,
}) {
  if (!product) {
    return <NoProducts />;
  }
  const {
    title,
    price,
    location,
    photos,    
    description,
  } = product;
  var test = require('../../images/test.jpg');
  if (isLoading) {
    return <Loader />;
  }

  const photosObj = [];
  for (const key of photos) {
    photosObj.push({ ['url']: key });
  }
  const createdAt = formatingTimeAgo(new Date(product.createdAt));
  return (
    <View style={s.container}>
      <ScrollView style={s.scroll}>
        <View style={s.content}>
          {Array.isArray(photos) && photos.length > 0 ? (
            <Slideshow dataSource={photosObj} height={300} />
          ) : (
            <Image
              source={test}
              style={s.image}
              onError={onImageError}
            />
          )}
          <View style={s.productInfoContainer}>
            <View style={s.productContentContainer}>
              <View style={s.productTitleContainer}>
                <Text style={s.title}>{product ? title : ''}</Text>
                <Text style={s.price}>
                  {product && price && price > 0
                    ? `$${price}`
                    : 'free'}
                </Text>
              </View>
              <View style={s.productTimeContainer}>
                <Text style={s.location}>
                  {product ? createdAt : ''}
                </Text>
                <View style={s.locationContainer}>
                <Ionicons
                  name="ios-pin"
                  size={16}
                  color={colors.grey}
                />
                <Text style={s.location}>
                  {product ? location : ''}
                </Text></View>
              </View>
            </View>
          </View>
          {product && description && description != '' ? (
            <View style={s.descriptionContainer}>
              <Text numberOfLines={isReadMore ? null : 2} style={s.description}>
                {product ? description : ''}
              </Text>
              <Touchable onPress={readMore} useOpacityAndroid>
                <Text style={s.moreButton}>
                  {' '}
                  {isReadMore ? 'Read less' : 'Read more...'}
                </Text>
              </Touchable>
            </View>
          ) : null}
          <View style={s.ownerContainer}>
            <View style={s.avatarContainer}>
              <Image
                source={
                  owner &&
                  Array.isArray(owner.avatar) &&
                  owner.avatar > 0
                    ? { uri: owner.avatar }
                    : test
                }
                style={s.avatar}
                onError={onImageError}
              />
            </View>
            <View style={s.ownerInfoContainer}>
            <Text numberOfLines={1}>{owner ? owner.fullName : null}</Text>
            <Touchable onPress={openProfile} useOpacityAndroid>
              <Text style={s.toProfileButton} numberOfLines={1}>
                {owner
                  ? `See other posts from ${owner.fullName}`
                  : ''}
              </Text>
            </Touchable>
            </View>
          </View>
        </View>
      </ScrollView>

      <Touchable
        hitSlop={30}
        containerStyle={s.saveButton}
        style={s.saveButton}
        onPress={() => productsSaveSwitcher()}
      >
        <FontAwesome
          name={isSaved ? 'bookmark' : 'bookmark-o'}
          size={22}
          color={colors.white}
        />
      </Touchable>

      {isOwnProduct(owner, viewer) ? null : (
        <View style={s.bottomBar}>
          <Touchable
            containerStyle={s.call}
            style={s.call}
            onPress={() => handleCallPress()}
          >
            <Text>Call</Text>
          </Touchable>
          <Touchable
            containerStyle={s.message}
            style={s.message}
            onPress={() => openChat()}
          >
            <Text>Message</Text>
          </Touchable>
        </View>
      )}
      {
        <View>
          <Dialog.Container visible={isDialogOpen}>
            <Dialog.Title>Login to contact the seller</Dialog.Title>
            <Dialog.Button label="Cancel" onPress={handleClose} />
            <Dialog.Button label="Login" onPress={handleToLogin} />
          </Dialog.Container>
        </View>
      }
    </View>
  );
}
ProductScreen.navigationOptions = ({ navigation }) => {
  const { state } = navigation;
  const urls = {
    baseURL: 'https://apiko-marketplace-api-2019.herokuapp.com',
    PRODUCTS: '/products',
  };

  return {
    header: (
      <View style={s.headerContainer}>
        <Touchable
          hitSlop={40}
          containerStyle={s.backButton}
          style={s.backButton}
          onPress={() => NavigationService.goBack()}
        >
          <Ionicons
            name="ios-arrow-back"
            size={28}
            color={colors.grey}
          />
        </Touchable>
        <View style={s.buttonContainer}>
          <Touchable
            hitSlop={20}
            containerStyle={s.shareButton}
            style={s.shareButton}
            onPress={async () => {
              try {
                const result = await Share.share({
                  message: `${state.params.product.title}  ${
                    urls.baseURL
                  }${urls.PRODUCTS}/${state.params.product.id}`,
                });

                if (result.action === Share.sharedAction) {
                  if (result.activityType) {
                  } else {
                  }
                } else if (result.action === Share.dismissedAction) {
                }
              } catch (error) {
                alert(error.message);
              }
            }}
          >
            <Ionicons
              name="ios-redo"
              size={28}
              color={colors.white}
            />
          </Touchable>
        </View>
      </View>
    ),
  };
};
ProductScreen.propTypes = {
  product: T.object.isRequired,
  isImageError: T.bool,
  onImageError: T.func,
  productsSaveSwitcher: T.func,
  isLoading: T.bool,  
  openChat: T.func,
  owner: T.object,
  viewer: T.object,
  readMore: T.func,
  isReadMore: T.bool,
  openProfile: T.func,
  isSaved: T.bool,
  isDialogOpen: T.bool,
  handleToLogin: T.func,
  handleClose: T.func,
  handleCallPress: T.func,
};

const func = () => {};

ProductScreen.defaultProps = {
  isImageError: false,
  isLoading: false,
  onImageError: func,
  productsSaveSwitcher: func, 
  isReadMore: T.bool,
  isSaved: T.bool,
   isDialogOpen: T.bool,
};

export default ProductScreen;
