import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    paddingTop:2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.white,
    paddingHorizontal: 8,
  },

  textContainer: {
    marginLeft: 12,
    justifyContent: 'flex-start',
    width: '72%',
  },
  withBorder: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',

    backgroundColor: colors.white,
    paddingBottom: 3,
    borderBottomColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  timeContainer: {
    position: 'absolute',
    right: 5,
    justifyContent: 'flex-start',
   
  },

  title: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textPrimary,
  },
  participant: {
    fontSize: 14,

    color: colors.primary,
  },
  lastMessage: {
    fontSize: 14,
    marginRight: 12,
    color: colors.textPrimary,
  },
  time: {
    fontSize: 14,
    textAlign: 'right',
    color: colors.textUnused,
  },
});

export default styles;
