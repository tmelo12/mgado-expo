import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: theme.fonts.fontFamily,
    top: 0,
    marginTop: 25
  },
  typeAnimal: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: -5,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'notoserif'
  },
  welcome: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  },
  info: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'notoserif'
  },
  spinner:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});