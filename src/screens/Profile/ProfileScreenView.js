import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import T from 'prop-types';
import s from './styles';
import { NavigationService } from '../../services';
import {
  Loader,
  ProductList,
  Touchable,
  Avatar,
  NoProducts,
  NoAccess,
} from '../../components';
import { deviceUtils } from '../../utils';
import { colors } from '../../styles';

function ProfileScreen({
  viewer,
  fetchProducts: fetchUserProducts,
  products,
  openProduct,
  productsIsLoading
}) {
  if (productsIsLoading) {
    return <View style={s.container}><Loader/></View>;
  }
  if (!viewer || viewer === null) {
    return (
      <NoAccess text="Login to view your profile. For now you can learn how to play by our rules" />
    );
  }
  if (products && products.length > 0) {
    return (
      <ProductList
        fetchItems={fetchUserProducts}
        items={products}
        onItemPress={openProduct}
      />
    );
  } else if(products&& products.length===0) {
    return <NoProducts viewer={viewer} />;
  }else return <View style={s.container}><Loader/></View>;
}

ProfileScreen.navigationOptions = (props) => {
  const navProps = props.navigation.getParam('navProps');
  if (navProps) {
    if (navProps.user === null) {
      return {
        header: null,
      };
    }

    return {
      header: (
        <View style={s.headerContainer}>
          <View>
            <Avatar size={72} user={navProps.user} />
            <Text style={s.username}>{navProps.user.fullName}</Text>
            <Text style={s.active}>
              active:{' '}
              <Text style={s.activeNumber}>{navProps.count}</Text>
            </Text>
          </View>
          {navProps.isViewer ? (
            <Touchable
              style={s.settingsIcon}
              useOpacityAndroid
              hitSlop={10}
              onPress={() => NavigationService.navigateToSettings()}
            >
              <AntDesign
                name="setting"
                size={28}
                color={colors.textPrimary}
              />
            </Touchable>
          ) : (
            <Touchable
              style={s.goBackIcon}
              useOpacityAndroid
              hitSlop={10}
              onPress={() => NavigationService.goBack()}
            >
              <Ionicons
                name={
                  deviceUtils.isAndroid
                    ? 'md-arrow-back'
                    : 'ios-arrow-back'
                }
                size={26}
                color={colors.textPrimary}
              />
            </Touchable>
          )}
        </View>
      ),
    };
  }
  return {
    header: <Loader />,
  };
};

ProfileScreen.propTypes = {
  viewer: T.object,
  productsIsLoading: T.bool,
  userIsLoading: T.bool,
};

const func = () => {};

ProfileScreen.defaultProps = {
  productsIsLoading: false,
  userIsLoading: false,
};

export default ProfileScreen;
