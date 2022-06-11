import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import { Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    button:{
        backgroundColor: theme.colors.secondary,
        width: 55,
        height: 55,
        borderRadius: 55,
        marginLeft: Dimensions.get('window').width - 75,
        marginBottom: 25,
        borderColor: theme.colors.background,
        borderWidth: 1,
    },
    icon:{
        position: 'absolute',
        top: '-2%',        
    }
})