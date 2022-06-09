import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Background } from '../../components/Background'
import { CardAnimalHome } from '../../components/CardAnimalHome'
import { ProfileHeader } from '../../components/ProfileHeader';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';

import { styles } from './styles';
import { theme } from '../../styles/theme';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export function HomePage() {
  const route = useRoute();
  const navigation = useNavigation();
  const { name } = route.params?.profile;
  const { email } = route.params?.profile;

  return (
    <SafeAreaView>
      <Background />
      <ScrollView>
        <View style={styles.container}>


          <Text style={styles.title}>Resumo <MaterialCommunityIcons name="clipboard-file" color={'#fff'} size={30} /></Text>
          <Text style={styles.welcome}>Bem-vindo, {name}</Text>
          <Text style={styles.info}>Aperte sobre o animal que deseja para visualizar um resumo completo.</Text>

          <Text style={styles.typeAnimal}>Bovinos</Text>
          <CardAnimalHome type={'bovinos-b'} />

          <Text style={styles.typeAnimal}>Bulbalinos</Text>
          <CardAnimalHome type={'bulbalinos-b'} />

          <Text style={styles.typeAnimal}>Caprinos</Text>
          <CardAnimalHome type={'caprinos-b'} />

          <Text style={styles.typeAnimal}>Ovinos</Text>
          <CardAnimalHome type={'ovinos-b'} />

          <Text style={styles.typeAnimal}>Equinos</Text>
          <CardAnimalHome type={'equinos-b'} />

          <Text style={styles.typeAnimal}>Asininos</Text>
          <CardAnimalHome type={'asininos-b'} />

          <Text style={styles.typeAnimal}>Muares</Text>
          <CardAnimalHome type={'muares-b'} />

          <Text style={styles.typeAnimal}>Aves</Text>
          <CardAnimalHome type={'aves-b'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}