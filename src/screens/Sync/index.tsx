import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles';
import { Background } from '../../components/Background'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function Sync() {
  return (
      <SafeAreaView style={styles.container}>
        <Background/>
        <Text style={styles.title}>Sincronizar <MaterialCommunityIcons name="cached" color={'#fff'} size={30} /></Text>
            <Image
              source={require('../../assets/logo_sinc.png')}
            />
            
            <TouchableOpacity
              style={styles.button}
            >
              <Text style={{color:'black',fontFamily:'notoserif',fontSize: 15}}>Enviar Alterações <MaterialCommunityIcons name="cached" color={'#008000'} size={20} /></Text>
            </TouchableOpacity>

            <Text style={styles.mensage}>Você não possui dados para atualizar no nomento.</Text>
      </SafeAreaView>
  );
}