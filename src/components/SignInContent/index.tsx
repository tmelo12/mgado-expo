import React from 'react';
import { View, Text, Linking } from 'react-native';

import { styles } from './styles';
import IllustrationSvg from '../../assets/logo_login.svg';

export function SignInContent() {
  return (
    <View style={styles.container}>
      <IllustrationSvg height={300} />

      <View style={styles.content}>
        <Text style={styles.title}>
          App Meu Gado
        </Text>

        <Text style={styles.subtitle}>
          Entre com sua conta Google para {'\n'}
          começar a gerenciar seus animais.
        </Text>

        <Text style={styles.description}>
          Ainda não possui uma conta Google?{'\n'}
        </Text>
        <Text style={{color: 'blue', fontSize: 18, alignSelf: 'center'}}
              onPress={() => Linking.openURL('https://accounts.google.com/signup/v2/webcreateaccount?continue=https%3A%2F%2Faccounts.google.com%2FManageAccount%3Fnc%3D1&hl=pt-br&flowName=GlifWebSignIn&flowEntry=SignUp')}>
          Aperte aqui!
        </Text>
      </View>
    </View>
  );
}