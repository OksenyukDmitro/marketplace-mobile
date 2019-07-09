import T from 'prop-types';
import React from 'react';
import { TouchableHighlight, TouchableOpacity } from 'react-native';
import { getHitSlop } from './helpers';

const noop = () => {};

const Button = ({
  onPress,
  onLongPress,
  children,
  style,
  useHighlight,
  hitSlop,
  ...props
}) => {
  if (useHighlight) {
    return (
      <TouchableHighlight
        onLongPress={onLongPress}
        onPress={onPress}
        style={style}
        hitSlop={getHitSlop(hitSlop)}
        {...props}
      >
        {children}
      </TouchableHighlight>
    );
  }
  return (
    <TouchableOpacity
      onLongPress={onLongPress}
      onPress={onPress}
      style={style}
      hitSlop={getHitSlop(hitSlop)}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};
Button.defaultProps = {
  onPress: noop,
};
Button.propsTypes = {
  onPress: T.func,
  onLongPress: T.func,
  children: T.any,
  style: T.any,
  hitSlop: T.oneOfType([T.number, T.object]),
  useHighlight: T.bool,
};
export default Button;
