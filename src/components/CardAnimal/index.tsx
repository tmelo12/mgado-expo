import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';

import { styles } from './styles';

type Props = {
    typeAnimal: string;
}

export function CardAnimal({typeAnimal, ...rest}: Props) {
    return (
        <>
            <Text style={styles.nameAnimal}>{typeAnimal}</Text>
            <View style={styles.row}>
                <View style={styles.cardIcon}>
                    <Image
                        style={styles.icon}
                        source={
                            require("../../assets/icons/bovinos-b.png")
                        }
                    />
                </View>
                <TouchableOpacity style={styles.row}>
                    <View style={styles.cardPart}>
                        <Text style={styles.nameButtonT}>AD {"\n"} Nascimento</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.cardPart2}>
                        <Text style={styles.nameButton}>Ativo</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.cardPart3}>
                        <Text style={styles.nameButton}>Desligado</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </>
    );
}