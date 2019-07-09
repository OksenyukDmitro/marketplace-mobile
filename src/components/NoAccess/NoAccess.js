import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';
import { Touchable } from '../';
import { NavigationService } from '../../services';

function NoAccess({ text }) {
  return (
    <View style={s.container}>
      <Text style={s.text}>{text}</Text>
      <Touchable
        style={s.btn}
        onPress={() => NavigationService.navigateToLogin()}
        useOpacityAndroid
      >
        <Text style={s.btnText}>LOGIN</Text>
      </Touchable>
    </View>
  );
}
NoAccess.propTypes = {};

export default NoAccess;
