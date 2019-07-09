import { ActivityIndicator, View, Modal, Text } from 'react-native';
import React from 'react';
import T from 'prop-types';
import s from './styles';
import { colors } from '../../styles';

function Loader({ loading, text, isInitialLoading }) {
  if (isInitialLoading) {
    return (
      <View style={s.container}>
        <ActivityIndicator color={colors.primary} size="large" />
      </View>
    );
  }
  return (
    <Modal transparent animationType="none" visible={loading}>
      <View style={s.modalBackground}>
        <View style={s.indicatorWrapper}>
          {text && <Text style={s.text}>{text}</Text>}
          <ActivityIndicator color={colors.secondary} size="large" />
        </View>
      </View>
    </Modal>
  );
}

Loader.propTypes = {
  loading: T.bool,
  text: T.string,
  isInitialLoading: T.bool,
};

Loader.defaultProps = {
  loading: false,
  text: '',
  isInitialLoading: false,
};

export default Loader;
