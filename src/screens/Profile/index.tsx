import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ProfileHeader } from '../../components/ProfileHeader';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../hooks/useAuth';

type Params = {
  token: string;
}

type User = {
  email: string;
  family_name: string;
  given_name: string;
  name: string;
  picture: string;
}

export function Profile() {
  const navigation = useNavigation();
  const { user, signOut } = useAuth();

  console.log(user);

  async function handleLogout(){
    signOut();
    navigation.navigate("SignIn");
  }

  return (
    <View style={styles.container}>
      <ProfileHeader />

      <View style={styles.content}>
        <View style={styles.profile}>
          <Avatar
            source={{ uri: user?.picture ? user?.picture : undefined }}
          />

          <Text style={styles.name}>
            Bem-vindo
          </Text>
          <Text style={styles.name}>
            {user?.name}
          </Text>
        </View>

        <Button
          title="Página Inicial"
          icon="home"
          onPress={() => navigation.navigate('HomePage',
            {
              screen: 'Resumo',
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