import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Background } from '../../components/Background'
import { styles } from './styles-details';
import { ScrollView } from 'react-native-gesture-handler';
import { AbstractAnimal } from '../../components/AbstractAnimal'


export function Details() {
  const route = useRoute();
  const navigation = useNavigation();
  const type = route.params?.type;
  console.log(type)
  return (
    <>
      <Background />
        <Text style={styles.title}>{type}</Text>
        <AbstractAnimal typeAnimal={type}/>
    </>
  );
}