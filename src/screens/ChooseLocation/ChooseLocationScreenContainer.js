import { compose, withHandlers, withState, hoistStatics } from 'recompose';
import { connect } from 'react-redux';
import ChooseLocationScreen from './ChooseLocationScreenView';
import { NavigationService } from '../../services';


const enhancer = compose(
  connect(),
  withState('text', 'setText', ''),
  withHandlers({
    handleChange: ({ setText }) => (value) => {
      setText(value);
    },
    setLocation: (props) => () => {
      const locationSetter = props.navigation.getParam('locationSetter');
      if (props.text === '') {
        return;
      }
      locationSetter(props.text);
      NavigationService.goBack();
    },
  }),
);


export default hoistStatics(enhancer)(ChooseLocationScreen);