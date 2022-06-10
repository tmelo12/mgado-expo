import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, Image, View  } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles';
import { theme } from '../../styles/theme';

type Props = TouchableOpacityProps & {
  type: string;
  //icon: React.ComponentProps<typeof SimpleLineIcons>['name'];
}

export function CardAnimalHome({type, ...rest}: Props) {
  var icon;
  var typeConverted : string;
  
  if(type==='bovinos-b'){
    icon = require('../../assets/icons/bovinos-b.png');
    typeConverted = 'Bovinos';
  }
  else if(type==='bulbalinos-b'){
    icon = require('../../assets/icons/bulbalinos-b.png');
    typeConverted = 'Bulbalinos';
  }
  else if(type==='caprinos-b'){
    icon = require('../../assets/icons/caprinos-b.png');
    typeConverted = 'Caprinos';
  }
  else if(type==='ovinos-b'){
    icon = require('../../assets/icons/ovinos-b.png');
    typeConverted = 'Ovinos';
  }
  else if(type==='equinos-b'){
    icon = require('../../assets/icons/muares-b.png');
    typeConverted = 'Equinos';
  }
  else if(type==='asininos-b'){
    icon = require('../../assets/icons/asininos-b.png');
    typeConverted = 'Asininos';
  }
  else if(type==='muares-b'){
    icon = require('../../assets/icons/muares-b.png');
    typeConverted = 'Muares';
  }
  else{
    icon = require('../../assets/icons/aves-b.png');
    typeConverted = 'Aves';
  }

  const route = useRoute();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => { navigation.navigate("Details", { type: typeConverted }) }}
    >
      <View style={styles.cards}>
        <View style={styles.cardIcon}>
          <Image
            style={styles.imgIcon}
            source={
              icon
            }
          />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.tittleCard}>Contagem Registrada</Text>
          <Text style={styles.cardText}>Macho(s): 15</Text>
          <Text style={styles.cardText}>Femea(s): 10</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}