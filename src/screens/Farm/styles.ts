import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import { Dimensions } from 'react-native';

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
    position: 'absolute',
    top: 0,
    marginTop: 55
  },
  info:{
    color: 'white',
    fontFamily: 'notoserif',
    textAlign: 'center',
    marginBottom: Dimensions.get('window').height - 210,
  },
});