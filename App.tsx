import 'react-native-gesture-handler';

import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold
} from '@expo-google-fonts/inter';

import { Routes } from './src/routes';
import { View } from 'react-native';
import { AuthContextProvider } from './src/context/AuthContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View
      style={{
        flex: 1
      }}>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </View>
  );
}