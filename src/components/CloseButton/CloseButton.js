import React from 'react';
import T from 'prop-types';
import { EvilIcons } from '@expo/vector-icons';
import { Touchable } from '../';
import { NavigationService } from '../../services';
import { colors } from '../../styles';

function CloseButton() {
  return (
    <Touchable
      useOpacityAndroid
      hitSlop={14}
      onPress={() => NavigationService.goBack()}
      style={{ paddingLeft: 16 }}
    >
      <EvilIcons name="close" size={36} color={colors.primary} />
    </Touchable>
  );
}

export default CloseButton;
