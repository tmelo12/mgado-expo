import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles';
import { Background } from '../../components/Background'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CardAnimal } from '../../components/CardAnimal'
import { ScrollView } from 'react-native-gesture-handler';
import { Divider } from '@react-native-material/core';

export function Animal() {
  return (
    <>
      <Background />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.title}>Meus Animais <MaterialCommunityIcons name="account-cowboy-hat" color={'#fff'} size={30} /></Text>
        </View>
        <Text style={styles.info}>Selecione um tipo de registro.</Text>


        <CardAnimal typeAnimal={'Bovinos'} />

        <Divider style={{ marginTop: 15, marginLeft:25, marginRight:25 }} color='white'/>

        <CardAnimal typeAnimal={'Bulbalinos'} />

        <Divider style={{ marginTop: 15, marginLeft:25, marginRight:25 }} color='white'/>

        <CardAnimal typeAnimal={'Caprinos'} />

        <Divider style={{ marginTop: 15, marginLeft:25, marginRight:25 }} color='white'/>

        <CardAnimal typeAnimal={'Ovinos'} />

        <Divider style={{ marginTop: 15, marginLeft:25, marginRight:25 }} color='white'/>

        <CardAnimal typeAnimal={'Equinos'} />

        <Divider style={{ marginTop: 15, marginLeft:25, marginRight:25 }} color='white'/>

        <CardAnimal typeAnimal={'Asininos'} />

        <Divider style={{ marginTop: 15, marginLeft:25, marginRight:25 }} color='white'/>

        <CardAnimal typeAnimal={'Muares'} />

        <Divider style={{ marginTop: 15, marginLeft:25, marginRight:25 }} color='white'/>

        <CardAnimal typeAnimal={'Aves'} />

      </ScrollView>

    </>
  );
}