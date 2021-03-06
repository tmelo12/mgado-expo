import React from 'react';
import { theme } from '../../styles/theme';
import { ButtonForm } from '../ButtonForm';
import { ControlledInput } from '../ControledInput';
import { Container } from './styles';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { useAuth } from '../../hooks/useAuth';
import { Alert } from 'react-native';

type FormData = {
  id: string;
  name: string;
  local: string;
  email_user: string;
}

const schema = yup.object({
  name: yup.string().required("O nome do campo não pode ficar em branco."),
  local: yup.string().required("O nome do local não pode ficar em branco.")
})

export function FormFarm() {
  const { control, reset , handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const navigation = useNavigation();
  const { user } = useAuth();
  const handleCancel = () => {
    navigation.goBack();
  }

  async function handleRegister(data: FormData) {
    try {
      //capturar o que ja tem
      const response = await AsyncStorage.getItem('@meugado_off:farms');
      const previousData = response ? JSON.parse(response) : [];
      data.email_user = user?.email as string;
      data.id = uuid.v4() as string;
      const farmInfo = JSON.stringify(data);
      const registers = [...previousData, farmInfo];
      await AsyncStorage.setItem('@meugado_off:farms', JSON.stringify(registers));
      Alert.alert("Sucesso!",
        "O cadastro foi salvo com sucesso!",
        [{ text: "OK" }]);

      //limpar o formulario
      reset();
    }
    catch (e) {
      console.log(e);
      Alert.alert("Erro!",
      "Houve um erro inesperado ao salvar, tente novamente mais tarde.",
      [{ text: "OK" }]);
    }
  }

  return (
    <Container>
      <ControlledInput
        name="name"
        control={control}
        icon="text"
        placeholder="Nome do campo"
        error={errors.name}
      />
      <ControlledInput
        name="local"
        icon="google-maps"
        placeholder="Nome do local do campo"
        control={control}
        error={errors.local}
      />
      <ButtonForm
        title="Cadastrar"
        colorButton={theme.colors.buttonSave}
        onPress={handleSubmit(handleRegister)}
      />

      <ButtonForm
        title="Cancelar"
        onPress={handleCancel}
        colorButton={theme.colors.buttonCancel}
      />

    </Container>
  )
}