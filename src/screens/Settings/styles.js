import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },

  logout: {
    height: 44,
    backgroundColor: colors.white,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    width: '100%',
  },

  linkBox: {
    backgroundColor: colors.white,
    width: '100%',
    borderColor: colors.border,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
  },

  linkButton: {
    height: 44,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  linkContainer: {
    paddingLeft: 16,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },

  linkText: {
    fontSize: 16,
    color: colors.textPrimary,
  },

  line: {
    backgroundColor: colors.border,
    height: 1,
    width: '94%',
  },

  logoutText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '500',
    marginHorizontal: 10,
  },
});

export default styles;
