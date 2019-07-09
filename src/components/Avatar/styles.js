import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  innerWrap: {
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  title: {
    color: colors.white,
  },
});

export default styles;
