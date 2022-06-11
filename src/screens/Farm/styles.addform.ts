import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
interface Props {
  theme: any;
}

export const Container = styled.View`
  flex: 1;
  padding: 24px;
`;

export const Title = styled.Text<Props>`
  font-size: 30px;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.fontFamily};
  position: absolute;
  top: ${Dimensions.get('window').height - 770};
  padding: 24px;
`;

export const Subtitle = styled.Text<Props>`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.fontFamily};
  text-align: center;
  top: 0;
  position: relative;
  marginTop: 70px;
`;