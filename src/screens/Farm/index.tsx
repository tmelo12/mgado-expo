import React, { useCallback, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { styles } from './styles';
import { Background } from '../../components/Background'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CardFarm } from '../../components/CardFarm';
import { ScrollView } from 'react-native-gesture-handler';
import { ButtonAdd } from '../../components/ButtonAdd';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Farm = {
  id: string;
  name: string;
  local: string;
  email_user: string;
}

export function Farm() {
  const [data, setData] = useState([]);

  async function handleFetchData() {
    const response = await AsyncStorage.getItem("@meugado_off:farms");
    const data = response ? JSON.parse(response) : [];
    setData(data);
  }

  useFocusEffect(useCallback(() => {
    handleFetchData();
  }, []));

  return (
    <>
      <Background />
      <View style={styles.container}>
        <Text style={styles.title}>Meus Campos <MaterialCommunityIcons name="home-group" color={'#fff'} size={30} /></Text>

        <Text style={styles.info}>Cadastre e gerencie seus campos.</Text>

          {data.length === 0 ? (
            <>
              <Text>Você ainda não possui campos cadastrados...</Text>
            </>
          ) : (
              <FlatList
                data={data}
                keyExtractor={item => item}
                renderItem={({ item }) =>
                  <CardFarm nameFarm={JSON.parse(item).name} idFarm={JSON.parse(item).id} />
                }
              />
            )}
          {/* <CardFarm nameFarm="Fazenda Teste" idFarm="123" /> */}
        <ButtonAdd nameFarm="emailUsuario" action="AddFarm" />
      </View>
    </>
  );
}