import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as AuthSession from 'expo-auth-session';
import { Button } from '../../components/Button';
import { SignInContent } from '../../components/SignInContent';
import { styles } from './styles';
const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthResponse = {
  type: string;
  params: {
    access_token: string;
  }
}

export function SignIn() {
  const navigation = useNavigation();

  async function handleSignIn() {
    const RESPONSE_TYPE = 'token';
    const SCOPE = encodeURI('profile email');

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

    const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse;

    if (type === 'success') {
      navigation.navigate('Profile', { token: params.access_token });
    }
  }


  const getUserInfo = async () => {
    try {
      const value = await AsyncStorage.getItem('@meugado_off:user');
      if (value !== null) {
        navigation.navigate('HomePage', {
          screen: 'Resumo',
          params: {profile : JSON.parse(value)}
        })
      }
      else {
        console.log('Usuario não existe, permanece na página.')
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <View style={styles.container}>
      <SignInContent />

      <Button
        title="Entrar com Google"
        icon="social-google"
        onPress={handleSignIn}
      />
    </View>
  );
}