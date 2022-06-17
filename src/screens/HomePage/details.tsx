import React, { Suspense, useState } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Background } from '../../components/Background'
import { styles } from './styles-details';
import { AbstractAnimal } from '../../components/AbstractAnimal';
import { Button } from '@react-native-material/core';
import { AntDesign } from '@expo/vector-icons';

export function Details() {
  const route = useRoute();
  const navigation = useNavigation();
  const type = route.params?.type;
  const [isLoading, setLoading] = useState(true);

  return (
    <>
      <Suspense fallback={<ActivityIndicator style={styles.spinner} size="large" color="#fff" />}>
        <Background />
          <Text style={styles.title}>{type}</Text>
          <AbstractAnimal typeAnimal={type} />
        <Button title="Voltar" color="error"
          style={{ width: '50%', alignSelf: 'center', marginBottom: 200 }}
          leading={<AntDesign name="back" size={24} color="white" />}
          onPress={()=> navigation.goBack()}
        />

      </Suspense>

    </>
  );
}