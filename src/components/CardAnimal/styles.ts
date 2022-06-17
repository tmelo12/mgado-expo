import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import { Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    nameAnimal: {
        fontSize: 20,
        color: 'white',
        fontFamily: theme.fonts.fontFamily,
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5
    },
    row: {
        flexDirection: "column"
    },
    cardIcon: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center'
    },
    icon: {
        width: 50,
        height: 50,
        marginLeft: 7,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    button: {
        width: '60%',
        height: 40,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 10
    },
    nameButton: {
        textAlign: 'center',
        color: 'white',
        fontFamily: theme.fonts.fontFamily,
        marginTop: 10
    },
    nameButtonDoubleLine: {
        textAlign: 'center',
        color: 'white',
        fontFamily: theme.fonts.fontFamily,
    }
})