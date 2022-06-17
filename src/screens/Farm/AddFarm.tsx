import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import { Container, Subtitle, Title } from './styles.addform';
import { Background } from '../../components/Background';
import { FormFarm } from '../../components/FormFarm';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../styles/theme';

export function AddFarm() {
  return (
    <>
      <Background />
      <Container>
        <Title theme={theme}>Cadastro de campos <MaterialCommunityIcons name="home-group" color={'#fff'} size={30} /></Title>

        <Subtitle theme={theme}>Cadastre um novo campo</Subtitle>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior="position" enabled>
            <>
              <FormFarm />
            </>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </Container >
    </>
  );
}