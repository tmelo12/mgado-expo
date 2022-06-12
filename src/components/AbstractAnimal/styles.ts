import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import { Dimensions } from 'react-native';
export const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    marginLeft: Dimensions.get('window').width -380,
    marginRight: Dimensions.get('window').width -380,
  },
  alignTable:{
    justifyContent: 'center',
  },
  headerTable:{
      fontWeight: 'bold',
      fontSize: 15,
      color: theme.colors.text
  },
  btnDetails:{
    justifyContent: 'center',
    alignItems: 'center'
},
});