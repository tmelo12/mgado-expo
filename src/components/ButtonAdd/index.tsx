import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import { styles } from './styles';

type Props = {
    nameFarm: string;
}

export function ButtonAdd({ nameFarm, ...rest }: Props) {
    return (
        <>
            <TouchableOpacity style={styles.button}>
                <AntDesign style={styles.icon} name="plus" size={55} color="white" />
            </TouchableOpacity>
        </>
    );
}