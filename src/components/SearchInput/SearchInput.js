import React from 'react';
import { View, TextInput } from 'react-native';
import T from 'prop-types';
import s from './styles';

function SearchInput({
  handleChange,
  children,
  style,
  inputStyle,
  text,
  onSubmit,
  placeholder,
}) {
  return (
    <View style={[s.container, style]}>
      <TextInput
        style={[s.input, inputStyle]}
        value={text}
        onChangeText={(e) => handleChange(e)}
        onSubmitEditing={onSubmit}
        placeholder={placeholder}
      />
      <View style={s.iconWrap}>{children}</View>
    </View>
  );
}

SearchInput.propTypes = {
  children: T.element,
  handleChange: T.func,
  style: T.object,
  text: T.string,
  onSubmit: T.func,
  handleBlur: T.func,
};

SearchInput.defaultProps = {
  text: '',
  handleChange: () => {},
  onSubmit: () => {},
  handleBlur: () => {},
};

export default SearchInput;
