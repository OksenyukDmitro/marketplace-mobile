import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';
import T from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import ActionSheet from 'react-native-actionsheet';
import s from './styles';
import { colors } from '../../styles';
import {
  SegmentedControl,
  WideLink,
  Loader,
  CloseButton,
  Touchable,
} from '../../components';
import { deviceUtils } from '../../utils';
import { NavigationService } from '../../services';

function NewItemScreen({
  actionSheet,
  setActionSheet,
  onChooseFromAction,
  onPriceChoose,
  isPriceFree,
  handleChange,
  handleBlur,
  errors,
  touched,
  values,
  setLocation,
  isImageUploading,
  isLoading,
}) {
  const photosThumbs = values.photos.map((photo) => (
    <Image source={{ uri: photo }} key={photo} style={s.thumbs} />
  ));
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={s.container}
      enableOnAndroid
      scrollEnabled
      extraHeight={deviceUtils.isAndroid ? 80 : 60}
      enableAutoAutomaticScroll={!deviceUtils.isAndroid}
    >
      <View style={s.informationFieldset}>
        <Text style={s.keyTitle}>KEY INFORMATION</Text>
        <TextInput
          style={s.input}
          placeholder="Title..."
          onChangeText={handleChange('title')}
          onBlur={handleBlur('title')}
        />
        <Text style={s.inputError}>
          {touched.title && errors.title}
        </Text>
        <TextInput
          style={[s.input, { height: 136 }]}
          placeholder="Description..."
          multiline
          textAlignVertical="top"
          underlineColorAndroid="transparent"
          onChangeText={handleChange('description')}
          onBlur={handleBlur('description')}
        />
        <Text style={s.inputError}>
          {touched.description && errors.description}
        </Text>
      </View>

      <View style={s.photosFieldset}>
        <Text style={s.fieldsetTitle}>PHOTOS</Text>
        <View style={s.photosContainer}>
          {photosThumbs}
          {values.photos.length < 6 && (
            <Touchable
              style={s.addPhoto}
              containerStyle={s.addPhoto}
              onPress={() => actionSheet().show()}
              rippleColor={colors.border}
            >
              {isImageUploading ? (
                <ActivityIndicator />
              ) : (
                <AntDesign
                  name="plus"
                  size={30}
                  color={colors.border}
                />
              )}
            </Touchable>
          )}
        </View>
      </View>

      <View style={s.priceFieldset}>
        <Text style={s.fieldsetTitle}>PRICE</Text>
        <View style={s.priceContainer}>
          <SegmentedControl
            handleSelect={onPriceChoose}
            isPriceFree={isPriceFree}
          />
          <View style={s.selectPriceContainer}>
            <View style={s.line} />
            <TextInput
              style={s.priceInput}
              editable={!isPriceFree}
              value={isPriceFree ? '' : values.price}
              placeholder="Price..."
              placeholderTextColor={
                isPriceFree ? colors.textUnused : colors.primary
              }
              onChangeText={handleChange('price')}
              onBlur={handleBlur('price')}
            />
          </View>
          <View />
        </View>
        <Text style={[s.inputError, { paddingLeft: 16 }]}>
          {!isPriceFree && touched.price && errors.price}
        </Text>
      </View>

      <View style={s.locationFieldset}>
        <Text style={s.locationFieldsetTitle}>LOCATION</Text>
        <Text style={[s.inputError, { paddingLeft: 16 }]}>
          {touched.location && errors.location}
        </Text>
        <View style={s.locationContainer}>
          <WideLink
            title={values.location || 'Location'}
            onPress={() => {
              NavigationService.navigateToLocation(setLocation);
            }}
          >
            <EvilIcons
              name="location"
              size={30}
              color={colors.primary}
            />
          </WideLink>
        </View>
      </View>

      <Loader text="Adding" loading={isLoading} />
      <ActionSheet
        ref={setActionSheet}
        title="Choose photo"
        options={['Open Camera', 'Open Gallery', 'Cancel']}
        cancelButtonIndex={2}
        onPress={(index) => onChooseFromAction(index)}
      />
    </KeyboardAwareScrollView>
  );
}

NewItemScreen.navigationOptions = (props) => {
  const handleSubmit = props.navigation.getParam('handleSubmit');
  return {
    title: 'New Post',
    headerRight: (
      <Touchable onPress={handleSubmit} useOpacityAndroid hitSlop={5}>
        <Text style={s.headerRight}>Post</Text>
      </Touchable>
    ),
    headerLeft: <CloseButton />,
  };
};

NewItemScreen.propTypes = {
  setActionSheet: T.func,
  actionSheet: T.func,
  onChooseFromAction: T.func,
  handleChange: T.func,
  onPriceChoose: T.func,
  isPriceFree: T.bool,
  handleBlur: T.func,
  errors: T.object,
  touched: T.object,
  values: T.object,
  setLocation: T.func,
  isImageUploading: T.bool,
  isLoading: T.bool,
};

const func = () => {};

NewItemScreen.defaultProps = {
  setActionSheet: func,
  actionSheet: func,
  onChooseFromAction: func,
  onPriceChoose: func,
  handleChange: func,
  handleBlur: func,
  setLocation: func,
  isImageUploading: false,
  isPriceFree: false,
  isLoading: false,
};

export default NewItemScreen;
