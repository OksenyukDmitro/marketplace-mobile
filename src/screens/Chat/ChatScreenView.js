import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import T from 'prop-types';
import s from './styles';
import { deviceUtils } from '../../utils';
import { Avatar, Touchable, Loader } from '../../components';
import { Message, TextField } from './components';
import { colors } from '../../styles';
import { NavigationService } from '../../services';

function ChatScreen({
  text,
  handleChange,
  onMessageSend,
  messages,
  isLoading,
  viewer,
  id,
}) {
  if (isLoading) {
    return <Loader />;
  }
  return (
    <View style={s.container}>
      <FlatList
        inverted
        style={s.listContainer}
        keyExtractor={(item) => `${item.id}-${id}`}
        data={messages}
        renderItem={({ item }) => (
          <Message item={item} userId={viewer.id} />
        )}
      />
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={deviceUtils.isAndroid ? '72' : '42'}
      >
        <TextField
          handleChange={handleChange}
          sendMessage={onMessageSend}
          text={text}
        />
      </KeyboardAvoidingView>
    </View>
  );
}

ChatScreen.navigationOptions = (props) => {
  const chat = props.navigation.getParam('chat');
  const participant =
    chat && chat.participants ? chat.participants[0] : undefined;
  if (chat && participant) {
    return {
      header: (
        <View style={s.headerContainer}>
          <Touchable
            hitSlop={40}
            containerStyle={s.backButton}
            style={s.backButton}
            onPress={() => NavigationService.goBack()}
          >
            <Ionicons
              name="ios-arrow-back"
              size={28}
              color={colors.grey}
            />
          </Touchable>
          <Avatar size={36} user={participant} />
          <Text style={s.participantName}>
            {participant.fullName}
          </Text>
        </View>
      ),
    };
  }
  return {
    header: (
      <View style={s.headerContainer}>
        <Touchable
          hitSlop={40}
          containerStyle={s.backButton}
          style={s.backButton}
          onPress={() => NavigationService.goBack()}
        >
          <Ionicons
            name="ios-arrow-back"
            size={28}
            color={colors.grey}
          />
        </Touchable>
      </View>
    ),
  };
};

ChatScreen.propTypes = {
  handleChange: T.func,
  onMessageSend: T.func,
  viewer: T.object,
  messages: T.array,
  isLoading: T.bool,
  text: T.string,
};

const func = () => {};

ChatScreen.defaultProps = {
  handleChange: func,
  onMessageSend: func,
  isLoading: false,
  text: '',
};

export default ChatScreen;
