import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import T from 'prop-types';
import s from './styles';
import { colors } from '../../styles';
import { NavigationService } from '../../services';
import { Touchable, Loader } from '../../components';

function StartScreen({
  isLoading,
  viewer,
  handleToLogin,
  handleToGuest,
}) {
  if (isLoading) return <Loader />;
  if (viewer && !isLoading) NavigationService.navigateBrowse();

  return (
    <View style={s.container}>
      <Touchable
        hitSlop={10}
        style={s.btn} 
        containerStyle={s.btnContainer}
        onPress={handleToLogin}
      >
        <Text style={s.text}>Login</Text>
      </Touchable>
      <Touchable
        hitSlop={10}
        style={s.btn}
        containerStyle={s.btnContainer}
        onPress={handleToGuest}
      >
        <Text style={s.text}>Login as Guest</Text>
      </Touchable>
    </View>
  );
}

StartScreen.propTypes = {};

StartScreen.defaultProps = {};

StartScreen.navigationOptions = {
  title: 'Settings',
  headerStyle: {
    backgroundColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
    elevation: 0,
  },
  headerTintColor: colors.textPrimary,
  headerTitleStyle: {
    fontWeight: '400',
    fontSize: 16,
  },
};

export default StartScreen;
