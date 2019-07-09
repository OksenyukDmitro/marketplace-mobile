import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import s from './styles';

function RootSpinner() {
  return (
    <View style={s.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}
RootSpinner.propTypes = {};

export default RootSpinner;
