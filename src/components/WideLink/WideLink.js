import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { EvilIcons } from '@expo/vector-icons';
import s from './styles';
import { Touchable } from '../';
import { colors } from '../../styles';

function WideLink({ onPress, title, children, styles }) {
  return (
    <Touchable
      style={[s.container, styles]}
      containerStyle={s.container}
      onPress={onPress}
    >
      <View style={s.leftCol}>
        {children}
        <Text style={s.text}>{title}</Text>
      </View>
      <View>
        <EvilIcons
          name="chevron-right"
          size={42}
          color={colors.textUnused}
        />
      </View>
    </Touchable>
  );
}

WideLink.propTypes = {
  onPress: T.func,
  title: T.string,
  children: T.element,
  styles: T.object,
};

WideLink.defaultProps = {
  onPress: () => {},
  title: 'Location',
};

export default WideLink;
