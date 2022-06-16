import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: theme.fonts.fontFamily,
    top: 0,
    marginTop: Dimensions.get('window').width - 325,
    textAlign: 'center',
  },
  spinner:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});