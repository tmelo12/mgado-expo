import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as AuthSession from 'expo-auth-session';
import { Button } from '../../components/Button';
import { SignInContent } from '../../components/SignInContent';
import { styles } from './styles';
import { useAuth } from '../../hooks/useAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function SignIn() {
  const navigation = useNavigation();
  const { signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
      navigation.navigate('Profile');
    }
    catch (err) {
      console.log(err);
      alert('Houve um erro inesperado. Tente mais tarde.');
    }

  }
  
  const getUserInfo = async () => {
    try {
      const value = await AsyncStorage.getItem('@meugado_off:user');
      if (value !== null) {
        navigation.navigate('Profile');
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