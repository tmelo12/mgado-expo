import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import { Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    nameAnimal: {
        fontSize: 20,
        color: 'white',
        fontFamily: theme.fonts.fontFamily,
        textAlign: 'center',
        marginBottom: 5,
    },
    row: {
        flexDirection: "row",
    },
    cardIcon: {
        width: 100,
        height: 100,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        marginLeft: Dimensions.get('window').width - 350,
        borderWidth: 1,
        borderBottomColor: 'white',
        borderLeftColor: 'white',
        borderTopColor: 'white',
        borderRightColor: 'transparent',
    },
    img: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    cardPart: {
        width: Dimensions.get('window').width - 200,
        height: 100,
        borderWidth: 1,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderBottomColor: 'white',
        borderTopColor: 'white',
        borderColor: 'white',
    },
    nameButton: {
        textAlign: 'center',
        marginTop: 32,
        color: 'white',
        fontFamily: theme.fonts.fontFamily,
    }
})