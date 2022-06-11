import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';
import { theme } from '../../styles/theme';

interface Props extends TouchableOpacityProps {
  title: string;
  colorButton: string;
}

export function ButtonForm({ title, colorButton, ...rest }: Props) {
  return (
    <Container {...rest} theme={theme} colorButton={colorButton}>
      <Title>
        {title}
      </Title>
    </Container>
  );
}