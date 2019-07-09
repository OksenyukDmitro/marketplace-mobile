import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { Touchable } from '../';
import s from './styles';

function SegmentedControl({ isPriceFree, handleSelect }) {
  return (
    <View style={s.container}>
      <View style={s.innerContainer}>
        <Touchable
          onPress={() => handleSelect('price')}
          style={[
            s.segmentLeft,
            { width: '100%' },
            !isPriceFree && s.segmentActive,
          ]}
          containerStyle={[
            s.segmentLeft,
            !isPriceFree && s.segmentActive,
          ]}
        >
          <Text
            style={[
              s.segmentText,
              !isPriceFree && s.segmentTextActive,
            ]}
          >
            Price
          </Text>
        </Touchable>
        <Touchable
          onPress={() => handleSelect('free')}
          style={[
            s.segmentRight,
            { width: '100%' },
            isPriceFree && s.segmentActive,
          ]}
          containerStyle={[
            s.segmentRight,
            isPriceFree && s.segmentActive,
          ]}
        >
          <Text
            style={[
              s.segmentText,
              isPriceFree && s.segmentTextActive,
            ]}
          >
            Free
          </Text>
        </Touchable>
      </View>
    </View>
  );
}

SegmentedControl.propTypes = {
  isPriceFree: T.bool,
  handleSelect: T.func,
};

SegmentedControl.defaultProps = {
  isPriceFree: false,
  handleSelect: () => {},
};

export default SegmentedControl;
