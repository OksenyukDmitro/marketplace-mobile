import {
  compose,
  withHandlers,
  hoistStatics,
  lifecycle,
} from 'recompose';
import { connect } from 'react-redux';
import InboxScreen from './InboxScreenView';
import { chatsSelectors, chatsOperations } from '../../modules/chats';
import { NavigationService } from '../../services';
import { viewerSelectors } from '../../modules/viewer';
import { withNavigation } from 'react-navigation';

const mapStateToProps = (state) => ({
  items: chatsSelectors.getChatsWithLastMessage(state),
  isLoading: state.chats.fetchChats.isLoading,
  viewer: viewerSelectors.getViewer(state),
});
const mapDispatchToProps = {
  fetchChats: chatsOperations.fetchChats,
};

const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withHandlers({
    openChat: () => async (id) => {
      NavigationService.navigateToChat(id);
    },
  }),
  lifecycle({
    componentDidMount() {
      this.focusListener = this.props.navigation.addListener(
        'didFocus',
        () => {
          this.props.fetchChats();
        },
      );
      if (! this.props.items) this.props.fetchChats();
    },
    componentDidUpdate(prevProps) {
      if (
        this.props.viewer &&
        prevProps.viewer &&
        prevProps.viewer.id !== this.props.viewer.id
      )
        this.props.fetchChats();
    },
    componentWillUnmount() {
      this.focusListener.remove();
    },
  }),
);

export default hoistStatics(enhancer)(withNavigation(InboxScreen));
