import React from 'react';
import { View, Text, FlatList } from 'react-native';
import T from 'prop-types';
import s from './styles';
import ChatItem from './components/ChatItems/ChatItems';
import NoAccess from '../../components/NoAccess/NoAccess';
import EmptyInbox from './components/EmptyInbox/EmptyInbox';

function InboxScreen({
  openChat,
  isLoading,
  items,
  fetchChats,
  viewer,
}) {
  if (!viewer || viewer === null) {
    return <NoAccess text="Login to check your Inbox" />;
  }

  return (
    <FlatList
      refreshing={isLoading}
      onRefresh={fetchChats}
      style={s.container}
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ChatItem item={item} onPress={openChat} />
      )}
      ListEmptyComponent={EmptyInbox}
    />
  );
}

InboxScreen.navigationOptions = {
  title: 'Inbox',
};

InboxScreen.propTypes = {
  openChat: T.func,
  isLoading: T.bool,
  items: T.array,
  fetchChats: T.func,
};

InboxScreen.defaultProps = {
  isLoading: false,
};

export default InboxScreen;
