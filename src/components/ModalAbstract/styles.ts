import { TextInput, Modal, TouchableOpacityProps } from 'react-native';
import styled, { css } from 'styled-components/native';


export const Container = styled.View`
    flex-direction: row;
    margin-bottom: 8px;
`;

export const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 22px;
`;

export const ModalView = styled.View`
    margin: 20px;
    background-color: white;
    border-radius: 20px;
    padding: 35px;
    align-items: center;
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.25;
    shadow-radius: 4px;
    elevation: 5;
`;

export const ModalTitle = styled.Text`
    margin-bottom: 10px;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
`;

export const ModalText = styled.Text`
    margin-bottom: 15px;
    text-align: center;
`;

export const ModalButton = styled.TouchableOpacity`
    background-color: #2196f3;
    border-radius: 20px;
    padding: 10px;
    elevation: 2;

`;  

export const TextButton = styled.Text`
    color: white;
    font-weight: bold;
    text-align: center;
`;