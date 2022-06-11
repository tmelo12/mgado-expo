import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ProfileHeader } from '../../components/ProfileHeader';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

type Params = {
  token: string;
}

type Profile = {
  email: string;
  family_name: string;
  given_name: string;
  name: string;
  picture: string;
}

export function Profile() {
  const [profile, setProfile] = useState({} as Profile);
  const route = useRoute();
  const navigation = useNavigation();
  //route.params as Params;
  console.log('Profile ', profile);

  async function handleLogout() {
    await removeUser();
    navigation.navigate('SignIn');
  }

  const storeUser = async (value: Profile) => {
    try {
      const userInfo = JSON.stringify(value);
      await AsyncStorage.setItem('@meugado_off:user', userInfo);
    } catch (e) {
      console.log(e);
    }
  }

  const removeUser = async () => {
    try {
      await AsyncStorage.removeItem('@meugado_off:user')
    } catch (e) {
      console.log(e);
    }
    console.log('Done.')
  }

  const getUserInfoAsyncStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('@meugado_off:user');
      if (value !== null) {
        setProfile(JSON.parse(value) as Profile);
      }
      else {
        const { token } = route.params as Params;
        await loadProfile(token);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function loadProfile(token: string) {
    const response = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`)
      .then(async (response) => {
        const userInfo = await response.json();
        setProfile(userInfo);
        await storeUser(userInfo);
      })
      .catch(err => {
        console.log(err);
        setProfile({} as Profile);
      });
  }

  useEffect(() => {
    getUserInfoAsyncStorage();
  }, [])

  return (
    <View style={styles.container}>
      <ProfileHeader />

      <View style={styles.content}>
        <View style={styles.profile}>
          <Avatar
            source={{ uri: profile.picture ? profile.picture : undefined }}
          />

          <Text style={styles.name}>
            Bem-vindo
          </Text>
          <Text style={styles.name}>
            {profile.name}
          </Text>
        </View>

        <Button
          title="Página Inicial"
          icon="home"
          onPress={() => navigation.navigate('HomePage',
            {
              screen: 'Resumo',
              params: { profile: profile as Profile }
            }

          )}
        />

        <Button
          title="Desconectar"
          icon="power"
          onPress={handleLogout}
        />
      </View>
    </View>
  );
}