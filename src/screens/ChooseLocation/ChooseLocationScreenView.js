import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { NavigationService } from '../../services';
import { SearchInput, Touchable } from '../../components';
import s from './styles';
import { colors } from '../../styles';

function ChooseLocationScreen({ handleChange, text, setLocation }) {
  return (
    <View style={s.container}>
      <SearchInput
        style={{ width: '100%', height: 40 }}
        handleChange={handleChange}
        text={text}
        onSubmit={setLocation}
      >
        <EvilIcons name="location" size={30} color={colors.primary} />
      </SearchInput>
    </View>
  );
}

ChooseLocationScreen.navigationOptions = () => ({
  title: 'Location',
  headerLeft: (
    <Touchable
      useOpacityAndroid
      hitSlop={14}
      onPress={() => NavigationService.goBack()}
      style={{ paddingLeft: 16 }}
    >
      <Ionicons name="ios-close" size={36} color={colors.primary} />
    </Touchable>
  ),
});

ChooseLocationScreen.propTypes = {
  handleChange: T.func,
  setLocation: T.func,
  text: T.string,
};

const func = () => {};

ChooseLocationScreen.defaultProps = {
  handleChange: func,
  setLocation: func,
  text: '',
};

export default ChooseLocationScreen;
