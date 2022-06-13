import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles';
import { Background } from '../../components/Background'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CardAnimal } from '../../components/CardAnimal'
import { ScrollView } from 'react-native-gesture-handler';

export function Animal() {
  return (
    <>
      <Background />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Meus Animais <MaterialCommunityIcons name="account-cowboy-hat" color={'#fff'} size={30} /></Text>
        </View>
        <Text style={styles.info}>Selecione um tipo de registro.</Text>


        <CardAnimal typeAnimal={'Bovinos'} />

        <CardAnimal typeAnimal={'Bulbalinos'} />

        <CardAnimal typeAnimal={'Caprinos'} />

        <CardAnimal typeAnimal={'Ovinos'} />

        <CardAnimal typeAnimal={'Equinos'} />

        <CardAnimal typeAnimal={'Asininos'} />

        <CardAnimal typeAnimal={'Muares'} />

        <CardAnimal typeAnimal={'Aves'} />

      </ScrollView>

    </>
  );
}