import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { ProfileHeader } from '../../components/ProfileHeader';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';

import { styles } from './styles';
import { theme } from '../../styles/theme';

type Params ={
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
  const { token } = route.params as Params;

  async function handleLogout() {
    navigation.navigate('SignIn');
  }

  async function loadProfile(){
    const response = fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`)
    .then(async (response) => {
      const userInfo = await response.json();
      setProfile(userInfo);
    })
    .catch(err => {
      console.log(err);
      setProfile({} as Profile);
    });
    
  }

  useEffect(()=>{
    loadProfile();
  },[])

  return (
    <View style={styles.container}>
      <ProfileHeader />

      <View style={styles.content}>
        <View style={styles.profile}>
          <Avatar
            source={{ uri: profile.picture }}
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
          onPress={() => navigation.navigate('HomePage')}
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