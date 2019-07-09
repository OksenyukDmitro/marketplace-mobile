import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn: {
    backgroundColor: colors.primary,
    textAlign: 'center',
   
    
    height: 40,
    padding:10,
  },
  btnContainer: {
    margin: 10,
    
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
    
  },
});

export default styles;
