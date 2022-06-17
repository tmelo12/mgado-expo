import React, { useState, useEffect } from 'react';
import { ModalProps, Modal, TouchableOpacity } from 'react-native';
import { ModalTitle, ModalView, CenteredView, ModalText, ModalButton, TextButton } from './styles';


type Props = ModalProps & {
    visible?: boolean;
    typeAnimal?: string;
    closeModal: (value: boolean) => void;
    gender: string;
    age: string;
}

export function ModalAbstract({ visible, typeAnimal, closeModal, gender, age, ...rest }: Props) {
    const [modalVisible, setModalVisible] = useState(visible);
    
    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <CenteredView>
                    <ModalView>
                        <ModalTitle>Resumo de {typeAnimal}</ModalTitle>
                        <ModalText>{gender} {age}</ModalText>
                        <ModalText>Total: 100</ModalText>
                        <ModalText>Declarados: 99</ModalText>
                        <ModalText>AD Nascimento: 98</ModalText>
                        <ModalText>AD Sumiço: 97</ModalText>
                        <ModalText>AD Venda: 96</ModalText>
                        <TouchableOpacity
                            style={{backgroundColor:"#2196F3", borderRadius: 20, padding: 10, elevation: 2, width: 110}}
                            onPress={() => [setModalVisible(!visible), closeModal(!visible)]}
                        >
                            <TextButton>Fechar</TextButton>
                        </TouchableOpacity>
                    </ModalView>
                </CenteredView>
            </Modal>
        </>
    );
}
