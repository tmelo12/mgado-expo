import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Background } from '../../components/Background'
import { CardAnimalHome } from '../../components/CardAnimalHome'
import { styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/useAuth';
import { ButtonAdd } from '../../components/ButtonAdd';

type Profile = {
  email: string;
  family_name: string;
  given_name: string;
  name: string;
  picture: string;
}

type Params = {
  profile: Profile;
}

export function HomePage() {
  const route = useRoute();
  const navigation = useNavigation();
  const { user } = useAuth();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user])

  return (
    <>
      <Background />
      {isLoading ? <ActivityIndicator style={styles.spinner} size="large" color="#fff" /> :
        <View style={styles.container}>

          <Text style={styles.title}>Resumo <MaterialCommunityIcons name="clipboard-file" color={'#fff'} size={30} /></Text>
          <Text style={styles.welcome}>Bem-vindo, {user?.name}</Text>
          <Text style={styles.info}>Aperte sobre o animal que deseja para visualizar {"\n"}um resumo completo.</Text>

          <ScrollView showsVerticalScrollIndicator={false} >

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
          </ScrollView>
          <ButtonAdd action="AddAnimal" />
        </View>
      }
    </>
  );
}