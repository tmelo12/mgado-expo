import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: theme.statusBar.len,
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
    marginTop: 25
  },
  button: {
    alignItems: "center",
    backgroundColor: "#b3ffd9",
    padding: 10,
    borderColor:'#000',
    borderWidth: 1,
    borderRadius: 20,
    width: '80%',
    height: '6%'
  },
  mensage:{
    color: 'white',
    textAlign: 'center',
    fontFamily:'notoserif'
  },
});