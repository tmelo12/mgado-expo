import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';

import { styles } from './styles';

type Props = {
    nameFarm: string;
    idFarm: string;
    localFarm: string;
}

export function CardFarm({ nameFarm, idFarm, localFarm, ...rest }: Props) {
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
                        <Text style={styles.nameButton}>Nome: { nameFarm }</Text>
                        <Text style={styles.subNameButton}>Local: { localFarm }</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </>
    );
}