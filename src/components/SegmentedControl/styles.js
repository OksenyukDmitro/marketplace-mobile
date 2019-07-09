import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  segmentRight: {
    height: 30,
    width: '46%',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: colors.white,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },

  segmentLeft: {
    width: '46%',
    height: 30,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: colors.white,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },

  segmentText: {
    fontSize: 16,
    color: colors.primary,
  },

  segmentTextActive: {
    color: colors.white,
  },

  segmentActive: {
    borderColor: colors.primary,
    backgroundColor: colors.primary,
  },
});

export default styles;
