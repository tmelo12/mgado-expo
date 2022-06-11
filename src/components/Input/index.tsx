import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Container, IconContainer, InputText } from './styles';

export type InputProps = TextInputProps & {
  icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  value?: string;
}

export function Input({ icon, value, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value)
  }

  return (
    <Container >
      <IconContainer isFocused={isFocused}>
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color={(isFocused || isFilled) ? '#008000' : '#AEAEB3'}
        />
      </IconContainer>

      <InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        value={value}
        {...rest}
      />
    </Container>
  );
}