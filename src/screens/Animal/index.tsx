import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles';
import { Background } from '../../components/Background'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function Animal() {
  return (
      <SafeAreaView style={styles.container}>
        <Background/>
        <Text style={styles.title}>Meus Animais <MaterialCommunityIcons name="home-group" color={'#fff'} size={30} /></Text>
            <Text style={styles.mensage}>PÁGINA EM CONSTRUÇÃO.</Text>
      </SafeAreaView>
  );
}