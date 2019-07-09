import React from 'react';
import { View, Text } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import s from './styles';
import { Touchable } from '..';
import { colors } from '../../styles';
import { NavigationService } from '../../services';

function NoProducts({ viewer }) {
  return (
    <View style={s.container}>
      <Touchable
        onPress={() => NavigationService.navigateToNewItem()}
        useOpacityAndroid
      >
        <SimpleLineIcons
          name="social-dropbox"
          size={120}
          color={colors.textUnused}
        />
      </Touchable>
      {viewer ? (
        <Text style={s.text}>
          It’s so empty here...{'\n'}User isn’t selling anything yet.
        </Text>
      ) : (
        <Touchable
          onPress={() => {
            NavigationService.navigateToLogin();
          }}
        >
          <Text>Login</Text>
        </Touchable>
      )}
    </View>
  );
}
NoProducts.propTypes = {};

export default NoProducts;
