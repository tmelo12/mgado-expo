import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

interface Props {
  theme: any;
  colorButton: string;
}

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  padding: 19px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.colorButton};
  border-radius: 20px;
  margin-top: 15px;
`;

export const Title = styled.Text`
  font-size: 15px;
  color: #FFFFFF;
`;