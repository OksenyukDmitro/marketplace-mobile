import React from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import T from 'prop-types';
import { EvilIcons } from '@expo/vector-icons';
import s from './styles';
import { deviceUtils } from '../../utils';
import { colors } from '../../styles';
import {
  SegmentedControl,
  WideLink,
  Touchable,
} from '../../components';
import { NavigationService } from '../../services';

function FilterScreen({ onPriceChoose, isPriceFree, setLocation }) {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={deviceUtils.isAndroid ? '80' : '50'}
      style={s.container}
    >
      <View style={s.topContainer}>
        <WideLink
          title="location"
          onPress={() =>
            NavigationService.navigateToLocation(setLocation)
          }
        >
          <EvilIcons
            name="location"
            size={30}
            color={colors.primary}
          />
        </WideLink>
        <SegmentedControl
          handleSelect={onPriceChoose}
          isPriceFree={isPriceFree}
        />
        <View style={s.price}>
          <TextInput
            placeholder="From"
            editable={!isPriceFree}
            style={s.priceInput}
          />
          <TextInput
            placeholder="To"
            editable={!isPriceFree}
            style={s.priceInput}
          />
        </View>
      </View>

      <Touchable style={s.wideButton} containerStyle={s.wideButton}>
        <Text style={s.wideButtonText}>RESULTS</Text>
      </Touchable>
    </KeyboardAvoidingView>
  );
}

FilterScreen.navigationOptions = () => ({
  headerTitle: 'Filter',

  header: (
    <View style={s.headerContainer}>
      <View style={s.headerCloseContainer}>
      <Touchable
        hitSlop={40}
        containerStyle={s.backButton}
        style={s.backButton}
        onPress={() => NavigationService.goBack()}
      >
        <EvilIcons name="close" size={28} color={colors.primary} />
      </Touchable></View>
      <Text style={s.headerTitle}>Filters</Text>
    </View>
  ),
});

FilterScreen.propTypes = {
  onPriceChoose: T.func,
  setLocation: T.func,
  isPriceFree: T.bool,
};

const func = () => {};

FilterScreen.defaultProps = {
  onPriceChoose: func,
  setLocation: func,
  isPriceFree: false,
};

export default FilterScreen;
