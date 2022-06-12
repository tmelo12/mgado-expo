import React, { useState, useEffect, } from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { styles } from './styles';
import { DataTable, Divider } from 'react-native-paper';
import { Fontisto } from '@expo/vector-icons';
import { ModalAbstract } from '../../components/ModalAbstract';
import { useFocusEffect } from '@react-navigation/native';


type Props = {
  typeAnimal?: string;
}

export function AbstractAnimal({ typeAnimal, ...rest }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);
  const [modalVisible5, setModalVisible5] = useState(false);
  const [modalVisible6, setModalVisible6] = useState(false);
  const [modalVisible7, setModalVisible7] = useState(false);
  const [modalVisible8, setModalVisible8] = useState(false);

  return (
    <>
      <View style={styles.container}>

        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={styles.alignTable}>
              <Text style={styles.headerTable}>Gênero</Text>
            </DataTable.Title>

            <DataTable.Title style={styles.alignTable}>
              <Text style={styles.headerTable}>Idade(meses)</Text>
            </DataTable.Title>

            <DataTable.Title style={styles.alignTable}>
              <Text style={styles.headerTable}>Ver Total</Text>
            </DataTable.Title>
          </DataTable.Header>
          <Divider />

          <DataTable.Row>
            <DataTable.Cell style={styles.alignTable}>Fêmea</DataTable.Cell>

            <DataTable.Cell style={styles.alignTable}>0 a 12</DataTable.Cell>

            <DataTable.Cell style={styles.btnDetails}>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
              >
                {modalVisible &&
                  <ModalAbstract visible={modalVisible} typeAnimal={typeAnimal} closeModal={setModalVisible} gender="Fêmea(s)" age="0 a 12 meses" />
                }
                <Fontisto name="preview" size={24} color="#fff" />
              </TouchableOpacity>
            </DataTable.Cell>
          </DataTable.Row>


          <DataTable.Row>
            <DataTable.Cell style={styles.alignTable}>Fêmea</DataTable.Cell>

            <DataTable.Cell style={styles.alignTable}>13 a 24</DataTable.Cell>

            <DataTable.Cell style={styles.btnDetails}>
              <TouchableOpacity
                onPress={() => setModalVisible2(!modalVisible2)}
              >
                {modalVisible2 &&
                  <ModalAbstract visible={modalVisible2} typeAnimal={typeAnimal} closeModal={setModalVisible2} gender="Fêmea(s)" age="13 a 24 meses" />
                }
                <Fontisto name="preview" size={24} color="#fff" />
              </TouchableOpacity>
            </DataTable.Cell>

          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={styles.alignTable}>Fêmea</DataTable.Cell>

            <DataTable.Cell style={styles.alignTable}>25 a 36</DataTable.Cell>

            <DataTable.Cell style={styles.btnDetails}>
              <TouchableOpacity
                onPress={() => setModalVisible3(!modalVisible3)}
              >
                {modalVisible3 &&
                  <ModalAbstract visible={modalVisible3} typeAnimal={typeAnimal} closeModal={setModalVisible3} gender="Fêmea(s)" age="25 a 36 meses" />
                }
                <Fontisto name="preview" size={24} color="#fff" />
              </TouchableOpacity>
            </DataTable.Cell>

          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={styles.alignTable}>Fêmea</DataTable.Cell>

            <DataTable.Cell style={styles.alignTable}>+ 36</DataTable.Cell>

            <DataTable.Cell style={styles.btnDetails}>
              <TouchableOpacity
                onPress={() => setModalVisible4(!modalVisible4)}
              >
                {modalVisible4 &&
                  <ModalAbstract visible={modalVisible4} typeAnimal={typeAnimal} closeModal={setModalVisible4} gender="Fêmea(s)" age="+36 meses" />
                }
                <Fontisto name="preview" size={24} color="#fff" />
              </TouchableOpacity>
            </DataTable.Cell>

          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={styles.alignTable}>Macho</DataTable.Cell>

            <DataTable.Cell style={styles.alignTable}>0 a 12</DataTable.Cell>

            <DataTable.Cell style={styles.btnDetails}>
              <TouchableOpacity
                onPress={() => setModalVisible5(!modalVisible5)}
              >
                {modalVisible5 &&
                  <ModalAbstract visible={modalVisible5} typeAnimal={typeAnimal} closeModal={setModalVisible5} gender="Macho(s)" age="0 a 12 meses" />
                }
                <Fontisto name="preview" size={24} color="#fff" />
              </TouchableOpacity>
            </DataTable.Cell>

          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={styles.alignTable}>Macho</DataTable.Cell>

            <DataTable.Cell style={styles.alignTable}>13 a 24</DataTable.Cell>

            <DataTable.Cell style={styles.btnDetails}>
              <TouchableOpacity
                onPress={() => setModalVisible6(!modalVisible6)}
              >
                {modalVisible6 &&
                  <ModalAbstract visible={modalVisible6} typeAnimal={typeAnimal} closeModal={setModalVisible6} gender="Macho(s)" age="13 a 24 meses" />
                }
                <Fontisto name="preview" size={24} color="#fff" />
              </TouchableOpacity>
            </DataTable.Cell>

          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={styles.alignTable}>Macho</DataTable.Cell>

            <DataTable.Cell style={styles.alignTable}>24 a 36</DataTable.Cell>

            <DataTable.Cell style={styles.btnDetails}>
              <TouchableOpacity
                onPress={() => setModalVisible7(!modalVisible7)}
              >
                {modalVisible7 &&
                  <ModalAbstract visible={modalVisible7} typeAnimal={typeAnimal} closeModal={setModalVisible7} gender="Macho(s)" age="24 a 36 meses" />
                }
                <Fontisto name="preview" size={24} color="#fff" />
              </TouchableOpacity>
            </DataTable.Cell>

          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={styles.alignTable}>Macho</DataTable.Cell>

            <DataTable.Cell style={styles.alignTable}>+ 36</DataTable.Cell>

            <DataTable.Cell style={styles.btnDetails}>
              <TouchableOpacity
                onPress={() => setModalVisible8(!modalVisible8)}
              >
                {modalVisible8 &&
                  <ModalAbstract visible={modalVisible8} typeAnimal={typeAnimal} closeModal={setModalVisible8} gender="Macho(s)" age="+36 meses" />
                }
                <Fontisto name="preview" size={24} color="#fff" />
              </TouchableOpacity>
            </DataTable.Cell>

          </DataTable.Row>

        </DataTable>
      </View>
    </>
  );
}