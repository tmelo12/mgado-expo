import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';

import { styles } from './styles';

type Props = {
    nameFarm: string;
    idFarm: string
}

export function CardFarm({ nameFarm, idFarm, ...rest }: Props) {
    return (
        <>
            <Text style={styles.nameAnimal}>{nameFarm}</Text>
            <View style={styles.row}>
                <TouchableOpacity style={styles.row}>
                    <View style={styles.cardIcon}>
                        <Image
                            style={styles.img}
                            source={
                                require("../../assets/standard/fazenda.jpg")
                            }
                        />
                    </View>

                    <View style={styles.cardPart}>
                        <Text style={styles.nameButton}>{ nameFarm }</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </>
    );
}