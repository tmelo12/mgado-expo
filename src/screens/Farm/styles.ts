import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import { Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: Dimensions.get('window').height - 740
  },
  title:{
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: theme.fonts.fontFamily,
    position: 'absolute',
    top: 0,
  },
  info:{
    color: 'white',
    fontFamily: 'notoserif',
    textAlign: 'center',
    top: 0,
    position: 'relative',
    marginTop: 50
  },
  noFarms:{
    marginBottom: Dimensions.get('window').height - 220,
    fontSize: 20,
    textAlign: 'center',
  }
});