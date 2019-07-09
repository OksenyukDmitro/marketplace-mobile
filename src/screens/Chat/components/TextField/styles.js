import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    width: '100%',
    padding: 8,
    flexDirection: 'row',
  },

  input: {
    backgroundColor: colors.background,
    borderRadius: 6,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    flex: 1,
    padding: 8,
    color: colors.textPrimary,
  },

  sendIcon: {
    padding: 8,
    paddingLeft: 18,
    alignSelf: 'flex-end',
  },
});

export default styles;