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
        flexDirection: "row",
        justifyContent: 'space-between'
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
        marginBottom: -15
    },
    button: {
        width: 200,
        height: 40,
        borderColor: '#fff',
        borderWidth: 1,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontFamily: 'notoserif',
        borderRadius: 20,
        marginLeft: Dimensions.get('window').width - 340
    },
    nameButton: {
        textAlign: 'center',
        color: 'white',
        fontFamily: theme.fonts.fontFamily,
        marginLeft: 8,
        alignSelf: 'center',
    },
    nameButtonDoubleLine: {
        textAlign: 'center',
        color: 'white',
        fontFamily: theme.fonts.fontFamily,
        marginLeft: 8
    },
})