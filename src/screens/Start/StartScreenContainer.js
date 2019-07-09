import { compose, withHandlers, hoistStatics } from 'recompose';
import { connect } from 'react-redux';
import StartScreen from './StartScreenView';
import { viewerActions, viewerSelectors } from '../../modules/viewer';
import { NavigationService } from '../../services';

function mapStateToProps(state) {
  return {
    isLoading: state.viewer.fetchViewer.isLoading,
    viewer: viewerSelectors.getViewer(state),
  };
}

const mapDispatchToProps = {
  logout: viewerActions.logout,
};

const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withHandlers({
    handleToGuest: () => () => {
      NavigationService.navigateBrowse();
    },
    handleToLogin: () => () => {
      NavigationService.navigateToLogin();
    },
  }),
);

export default hoistStatics(enhancer)(StartScreen);
