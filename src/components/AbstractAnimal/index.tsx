import React, { useState, useEffect, } from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { styles } from './styles';
import { DataTable, Divider } from 'react-native-paper';
import { Fontisto } from '@expo/vector-icons';
import { ModalAbstract } from '../../components/ModalAbstract';
import { useFocusEffect } from '@react-navigation/native';
import MaterialTabs from 'react-native-material-tabs';

type Props = {
  typeAnimal?: string;
}

export function AbstractAnimal({ typeAnimal, ...rest }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);

  const [gender, setGender] = useState("Macho");
  const [selectedTab, setSelectedTab] = useState(0);

  function handleTab(){
    if(gender==="Macho"){
      setSelectedTab(1);
      setGender("Fêmea");
    }
    else{
      setSelectedTab(0);
      setGender("Macho");
    }
  }

  
  return (
    <>
      <MaterialTabs
        items={['Macho \u2642', 'Fêmea \u2640 ']}
        selectedIndex={selectedTab}
        onChange={handleTab}
        barColor="transparent"
        indicatorColor="#ffffff"
        activeTextColor="white"
      />
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
            <DataTable.Cell style={styles.alignTable}>{gender}</DataTable.Cell>

            <DataTable.Cell style={styles.alignTable}>0 a 12</DataTable.Cell>

            <DataTable.Cell style={styles.btnDetails}>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
              >
                {modalVisible &&
                  <ModalAbstract visible={modalVisible} typeAnimal={typeAnimal} closeModal={setModalVisible} gender={gender} age="0 a 12 meses" />
                }
                <Fontisto name="preview" size={24} color="#fff" />
              </TouchableOpacity>
            </DataTable.Cell>
          </DataTable.Row>


          <DataTable.Row>
            <DataTable.Cell style={styles.alignTable}>{gender}</DataTable.Cell>

            <DataTable.Cell style={styles.alignTable}>13 a 24</DataTable.Cell>

            <DataTable.Cell style={styles.btnDetails}>
              <TouchableOpacity
                onPress={() => setModalVisible2(!modalVisible2)}
              >
                {modalVisible2 &&
                  <ModalAbstract visible={modalVisible2} typeAnimal={typeAnimal} closeModal={setModalVisible2} gender={gender} age="13 a 24 meses" />
                }
                <Fontisto name="preview" size={24} color="#fff" />
              </TouchableOpacity>
            </DataTable.Cell>

          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={styles.alignTable}>{gender}</DataTable.Cell>

            <DataTable.Cell style={styles.alignTable}>25 a 36</DataTable.Cell>

            <DataTable.Cell style={styles.btnDetails}>
              <TouchableOpacity
                onPress={() => setModalVisible3(!modalVisible3)}
              >
                {modalVisible3 &&
                  <ModalAbstract visible={modalVisible3} typeAnimal={typeAnimal} closeModal={setModalVisible3} gender={gender} age="25 a 36 meses" />
                }
                <Fontisto name="preview" size={24} color="#fff" />
              </TouchableOpacity>
            </DataTable.Cell>

          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={styles.alignTable}>{gender}</DataTable.Cell>

            <DataTable.Cell style={styles.alignTable}>+ 36</DataTable.Cell>

            <DataTable.Cell style={styles.btnDetails}>
              <TouchableOpacity
                onPress={() => setModalVisible4(!modalVisible4)}
              >
                {modalVisible4 &&
                  <ModalAbstract visible={modalVisible4} typeAnimal={typeAnimal} closeModal={setModalVisible4} gender={gender} age="+36 meses" />
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