import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  text: {
    textTransform: 'uppercase',
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },

  primaryText: {
    color: colors.white,
  },

  primaryContainer: {
    borderRadius: 100,
    backgroundColor: colors.primary,
  },
});

export default styles;
