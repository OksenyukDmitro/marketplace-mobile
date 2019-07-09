import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { getColorFromAvatar } from '../../utils';
import s from './styles';

function Avatar({ size, user }) {
  const { fullName } = user;
  const titleSize = size * 0.6;
  const title = fullName.trim()[0].toUpperCase();
  const borderRadius = size / 2;
  const background = getColorFromAvatar(fullName);
  if (!user) {
    return <View />;
  }
  return (
    <View style={s.container}>
      <View
        style={[
          s.innerWrap,
          {
            height: size,
            width: size,
            borderRadius,
            backgroundColor: background,
          },
        ]}
      >
        <Text style={[s.title, { fontSize: titleSize }]}>
          {title}
        </Text>
      </View>
    </View>
  );
}

Avatar.propTypes = {
  user: T.object.isRequired,
  size: T.number.isRequired,
};

Avatar.defaultProps = {};

export default Avatar;
