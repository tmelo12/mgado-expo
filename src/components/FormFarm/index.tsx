import React from 'react';
import { theme } from '../../styles/theme';
import { ButtonForm } from '../ButtonForm';
import { ControlledInput } from '../ControledInput';
import { Container } from './styles';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver  } from "@hookform/resolvers/yup"

type FormData ={
  email: string;
  name: string;
  local: string;
}

const schema = yup.object({
  name: yup.string().required("O nome do campo não pode ficar em branco."),
  local: yup.string().required("O nome do local não pode ficar em branco.")
})

export function FormFarm() {
  const { control, handleSubmit, formState:{ errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const handleCancel = () => {

  }
  
  function handleRegister(data: FormData) {
    console.log(data);
    try{

    }
    catch(e){
      console.log(e);
      alert("Houve um problema ao salvar. Tente novamente mais tarde.")
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
        onPress={ handleSubmit(handleRegister) }
      />

      <ButtonForm
        title="Cancelar"
        onPress={handleCancel}
        colorButton={theme.colors.buttonCancel}
      />

    </Container>
  )
}