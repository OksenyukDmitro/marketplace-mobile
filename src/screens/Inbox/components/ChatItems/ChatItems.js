import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import s from './styles';
import { Avatar, Touchable } from '../../../../components';
import {
  formatingTime,
  formatingTimeAgo,
} from '../../../../utils/formatDate';

function ChatItem({ item, onPress }) {
  const { id, product, lastMessage, createdAt, participants } = item;
  if (!product || !participants) return <View />;
  return (
    <Touchable
      style={s.container}
      containersStyle={s.container}
      onPress={() => onPress(id)}
    >
      <Avatar
        size={46}
        user={participants ? participants[0] : undefined}
      />
      <View style={s.withBorder}>
        <View style={s.textContainer}>
          <Text numberOfLines={1} style={s.title}>
            {product.title}
          </Text>
          <Text numberOfLines={1} style={s.participant}>
            {participants ? participants[0].fullName : ''}
          </Text>
          <Text numberOfLines={1} style={s.lastMessage}>
            {lastMessage ? lastMessage.text : ''}
          </Text>
        </View>
        <View style={s.timeContainer}>
          <Text numberOfLines={1} style={s.time}>
            {lastMessage && lastMessage.createdAt
              ? formatingTimeAgo(new Date(lastMessage.createdAt))
              : ''}
          </Text>
        </View>
      </View>
    </Touchable>
  );
}

ChatItem.propTypes = {
  item: T.object.isRequired,
  onPress: T.func,
};

ChatItem.defaultProps = {
  onPress: () => {},
};

export default ChatItem;
