import { StyleSheet } from 'react-native';
import { colors } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.backgroundPrimary,
    paddingTop: 8,
  },

  bottomBar: {
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopColor: colors.border,
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 8,
    paddingVertical: 8,
    width: '100%',
  },

  bottomLeft: {
    width: '65%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  inputsWrap: {
    width: '100%',
  },

  textButton: {
    color: colors.primary,
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontWeight: '500',
  },
  btnContainer: {
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 100,
    padding:10
  },

  btnText: {
    textTransform: 'uppercase',
    fontSize: 14,
    color: colors.white,
    fontWeight: '500',
  },
  text: {
    fontSize: 14,
    color: colors.textUnused,
  },
});

export default styles;
