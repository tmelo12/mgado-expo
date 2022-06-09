import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  text: {
    color: theme.colors.secondary,
    fontSize: 18,
    fontFamily: theme.fonts.bold
  },
  cards: {
    flexDirection: 'row',
  },
  cardIcon: {
    width: 75,
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: 15,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  imgIcon: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  tittleCard: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: 'white',
    fontFamily: 'notoserif'
  },
  cardContent: {
    width: 200,
    height: 100,
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: 15,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'notoserif'
  },
  cardText: {
    color: 'white',
    fontFamily: 'notoserif'
  },
});