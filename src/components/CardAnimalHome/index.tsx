import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, Image, View  } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../styles/theme';

type Props = TouchableOpacityProps & {
  type: string;
  //icon: React.ComponentProps<typeof SimpleLineIcons>['name'];
}

export function CardAnimalHome({type, ...rest}: Props) {
  var icon
  if(type==='bovinos-b'){
    icon = require('../../assets/icons/bovinos-b.png');
  }
  else if(type==='bulbalinos-b'){
    icon = require('../../assets/icons/bulbalinos-b.png');
  }
  else if(type==='caprinos-b'){
    icon = require('../../assets/icons/caprinos-b.png');
  }
  else if(type==='ovinos-b'){
    icon = require('../../assets/icons/ovinos-b.png');
  }
  else if(type==='equinos-b'){
    icon = require('../../assets/icons/muares-b.png');
  }
  else if(type==='asininos-b'){
    icon = require('../../assets/icons/asininos-b.png');
  }
  else if(type==='muares-b'){
    icon = require('../../assets/icons/muares-b.png');
  }
  else{
    icon = require('../../assets/icons/aves-b.png');
  }
  
  return (
    <TouchableOpacity
      onPress={() => { console.log('Animal') }}
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