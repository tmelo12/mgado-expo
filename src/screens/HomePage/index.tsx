import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { ProfileHeader } from '../../components/ProfileHeader';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';

import { styles } from './styles';
import { theme } from '../../styles/theme';

export function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        HomePage
      </Text>
    </View>
  );
}