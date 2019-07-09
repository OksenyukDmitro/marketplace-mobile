import {
  compose,
  lifecycle,
  withState,
  withHandlers,
  hoistStatics,
} from 'recompose';
import { connect } from 'react-redux';
import ChatScreen from './ChatScreenView';
import {
  messagesSelectors,
  messagesOperations,
} from '../../modules/messages';
import { chatsSelectors, chatsOperations } from '../../modules/chats';
import { viewerSelectors } from '../../modules/viewer';
import { getIdFromNavigation } from '../../utils';
import { withNavigation } from 'react-navigation';

function mapStateToProps(state, props) {
  const id = getIdFromNavigation(props);
  return {
    id,
    messages: messagesSelectors.getMessages(state, id),
    chat: chatsSelectors.getChat(state, id),
    viewer: viewerSelectors.getViewer(state),
    isLoading: state.messages.fetchMessages.isLoading,
  };
}

const mapDispatchToProps = {
  sendMessage: messagesOperations.sendMessage,
  fetchMessages: messagesOperations.fetchMessages,
  fetchChats: chatsOperations.fetchChats,
};

const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withState('text', 'setText', ''),
  withHandlers({
    handleChange: ({ setText }) => (value) => {
      setText(value);
    },
    onMessageSend: ({ sendMessage, setText, text, id }) => () => {
      if (text !== '') {
        sendMessage(id, text.trim());
        setText('');
      }
    },
  }),
  lifecycle({
    async componentDidMount() {
      const {
        fetchMessages,
        fetchChats,
        navigation,
        id,
        chat,
      } = this.props;

      this.focusListener = navigation.addListener(
        'didFocus',
        async () => {
          if (!chat) {
            await fetchChats();
            fetchMessages(id);
          }
          navigation.setParams({ chat });
        },
      );

      fetchMessages(id);
      await fetchChats();
      navigation.setParams({ chat });
    },
    async componentDidUpdate(prevProps) {
      if (
        prevProps.chat &&
        prevProps.chat.id !== this.props.chat.id
      ) {
        const { fetchChats, navigation, chat } = this.props;

        await fetchChats();
        navigation.setParams({
          chat: chat,
        });
      }
    },
    componentWillUnmount() {
      this.focusListener.remove();
    },
  }),
);

export default hoistStatics(enhancer)(withNavigation(ChatScreen));
