import React, { useState } from 'react';
import { theme } from '../../styles/theme';
import { ButtonForm } from '../ButtonForm';
import { Input } from '../Input';
import { Container } from './styles';

export function FormFarm() {

  const handleSubmit = () =>{
    
  }

  const handleCancel =  () =>{

  }

  return (
    <Container>
      <Input
        icon="user"
        placeholder="Nome do Campo"
      />
      <Input
        icon="mail"
        placeholder="Localização do Campo"
      />
      <ButtonForm
        title="Cadastrar"
        onPress={handleSubmit}
        colorButton={theme.colors.buttonSave}
      />

      <ButtonForm
        title="Cancelar"
        onPress={handleCancel}
        colorButton={theme.colors.buttonCancel}
      />

    </Container>
  )
}