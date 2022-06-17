import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles';

type Props = TouchableOpacityProps &{
    action: string;
}

export function ButtonAdd({ action, ...rest }: Props) {
    const navigation = useNavigation();
    const handleAdd  = () => {
        navigation.navigate(action);
    }
    return (
        <>
            <TouchableOpacity style={styles.button}
                onPress={ handleAdd }
            >
                <AntDesign style={styles.icon} name="plus" size={55} color="white" />
            </TouchableOpacity>
        </>
    );
}