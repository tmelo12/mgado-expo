import React, { Suspense, useState } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Background } from '../../components/Background'
import { styles } from './styles-details';
import { AbstractAnimal } from '../../components/AbstractAnimal';


export function Details() {
  const route = useRoute();
  const navigation = useNavigation();
  const type = route.params?.type;
  const [isLoading, setLoading] = useState(true);

  return (
    <>
      <Suspense fallback={<ActivityIndicator style={styles.spinner} size="large" color="#fff" />}>
        <Background />
        <>
          <Text style={styles.title}>{type}</Text>
          <AbstractAnimal typeAnimal={type} />
        </>

      </Suspense>

    </>
  );
}