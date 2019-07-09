import React from 'react';
import { View, TextInput } from 'react-native';
import T from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import s from './styles';
import { colors } from '../../../../styles';
import { Touchable } from '../../../../components';

function TextField({ handleChange, text, sendMessage }) {
  return (
    <View style={s.container}>
      <TextInput
        style={s.input}
        minHeight={36}
        maxHeight={150}
        multiline
        value={text}
        onChangeText={handleChange}
        placeholder="Message..."
        underlineColorAndroid={colors.transparent}
      />
      <Touchable
        onPress={() => sendMessage()}
        style={s.sendIcon}
        useOpacityAndroid
        disabled={text.trim().length > 0 ? false : true}
      >
        <Ionicons name="md-send" color={colors.primary} size={30} />
      </Touchable>
    </View>
  );
}

TextField.propTypes = {
  handleChange: T.func,
  sendMessage: T.func,
  text: T.string,
};

const func = () => {};

TextField.defaultProps = {
  handleChange: func,
  sendMessage: func,
  text: '',
};

export default TextField;
