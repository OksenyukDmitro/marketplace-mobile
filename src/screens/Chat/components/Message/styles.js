import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },

  messageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingTop: 7,
    paddingBottom: 4,
    borderColor: colors.border,
    borderWidth: StyleSheet.hairlineWidth,
    maxWidth: '85%',
  },

  viewerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingTop: 7,
    paddingBottom: 4,
    maxWidth: '85%',
  },

  viewerText: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 4,
    paddingRight: 8,
    maxWidth: '80%',
  },

  text: {
    fontSize: 16,
    color: colors.textPrimary,
    marginBottom: 4,
    paddingRight: 8,
    maxWidth: '80%',
  },

  viewerDate: {
    fontSize: 12,
    color: colors.white,
    alignSelf: 'flex-end',
  },

  date: {
    fontSize: 12,
    color: colors.textUnused,
    alignSelf: 'flex-end',
  },
});

export default styles;