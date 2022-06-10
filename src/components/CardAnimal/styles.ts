import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import { Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    nameAnimal: {
        fontSize: 20,
        color: 'white',
        fontFamily: theme.fonts.fontFamily,
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 5
    },
    row: {
        flexDirection: "row"
    },
    cardIcon: {
        width: 70,
        height: 90,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        marginLeft: Dimensions.get('window').width - 370,
        borderWidth: 1,
        borderBottomColor: 'white',
        borderLeftColor: 'white',
        borderTopColor: 'white',
    },
    icon: {
        width: 50,
        height: 50,
        marginTop: 17,
        marginLeft: 7
    },
    cardPart: {
        width: 90,
        height: 90,
        borderWidth: 1,
        borderBottomColor: 'white',
        borderTopColor: 'white',
        borderColor: 'white',
    },
    cardPart2: {
        width: 90,
        height: 90,
        borderWidth: 1,
        borderBottomColor: 'white',
        borderRightColor: 'white',
        borderTopColor: 'white',
    },
    cardPart3: {
        width: 90,
        height: 90,
        borderWidth: 1,
        borderBottomColor: 'white',
        borderRightColor: 'white',
        borderTopColor: 'white',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    nameButtonT: {
        textAlign: 'center',
        marginTop: 25,
        color: 'white',
        fontFamily: theme.fonts.fontFamily,
    },
    nameButton: {
        textAlign: 'center',
        marginTop: 32,
        color: 'white',
        fontFamily: theme.fonts.fontFamily,
    }
})