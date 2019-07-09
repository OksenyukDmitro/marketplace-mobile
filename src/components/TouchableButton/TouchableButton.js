import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import T from 'prop-types';
import s from './styles';

function TouchableButton({
  title,
  styles,
  textStyles,
  onPress,
  primary,
  disabled,
}) {
  if (primary) {
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[s.container, s.primaryContainer, styles]}
      >
        <Text style={[s.text, s.primaryText, textStyles]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[s.container, styles]}
    >
      <Text style={[s.text, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
}

TouchableButton.propTypes = {
  title: T.string,
  styles: T.object,
  textStyles: T.object,
  onPress: T.func,
  primary: T.bool,
  disabled: T.bool,
};

TouchableButton.defaultProps = {
  title: 'Push',
  styles: {},
  textStyles: {},
  onPress: () => {},
  primary: false,
  disabled: false,
};

export default TouchableButton;
