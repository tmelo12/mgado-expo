import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';
import headerImg from '../../assets/header.png';

export function ProfileHeader() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.welcome}>
          <Text style={styles.title}>Perfil</Text>
          <Text style={styles.subtitle}>dados da sua conta Google</Text>
          <Text>{"\n"}</Text>
          <Text style={styles.subtitle}>Seja bem-vindo. Acesse a Página Inicial para iniciar o gerenciamento de seu gado.</Text>
        </View>
      </View>
    </View>
  );
}