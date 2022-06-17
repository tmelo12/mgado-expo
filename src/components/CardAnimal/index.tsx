import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';

import { styles } from './styles';

type Props = {
    typeAnimal: string;
}

export function CardAnimal({ typeAnimal, ...rest }: Props) {
    var icon;
    var typeConverted: string;
    
    if (typeAnimal === 'Bovinos') {
        icon = require('../../assets/icons/bovinos-b.png');
        typeConverted = 'Bovinos';
    }
    else if (typeAnimal === 'Bulbalinos') {
        icon = require('../../assets/icons/bulbalinos-b.png');
        typeConverted = 'Bulbalinos';
    }
    else if (typeAnimal === 'Caprinos') {
        icon = require('../../assets/icons/caprinos-b.png');
        typeConverted = 'Caprinos';
    }
    else if (typeAnimal === 'Ovinos') {
        icon = require('../../assets/icons/ovinos-b.png');
        typeConverted = 'Ovinos';
    }
    else if (typeAnimal === 'Equinos') {
        icon = require('../../assets/icons/muares-b.png');
        typeConverted = 'Equinos';
    }
    else if (typeAnimal === 'Asininos') {
        icon = require('../../assets/icons/asininos-b.png');
        typeConverted = 'Asininos';
    }
    else if (typeAnimal === 'Muares') {
        icon = require('../../assets/icons/muares-b.png');
        typeConverted = 'Muares';
    }
    else {
        icon = require('../../assets/icons/aves-b.png');
        typeConverted = 'Aves';
    }

    return (
        <>
            <View>
                <Text style={styles.nameAnimal}>{typeAnimal}</Text>
                <View style={styles.cardIcon}>
                    <Image
                        style={styles.icon}
                        source={
                            icon
                        }
                    />
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.nameButtonDoubleLine}>AD {"\n"} Nascimento</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.nameButton}>Ativo</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.nameButton}>Desligado</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}