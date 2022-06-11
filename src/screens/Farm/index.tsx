import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles';
import { Background } from '../../components/Background'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CardFarm } from '../../components/CardFarm';
import { ScrollView } from 'react-native-gesture-handler';

export function Farm() {
  return (
    <>
      <Background />
      <View style={styles.container}>
        <Text style={styles.title}>Meus Campos <MaterialCommunityIcons name="home-group" color={'#fff'} size={30} /></Text>

        <Text style={styles.info}>Cadastre e gerencie seus locais.</Text>

        <ScrollView>
          <CardFarm nameFarm="Fazenda Teste" idFarm="123" />
        </ScrollView>
      </View>
    </>
  );
}