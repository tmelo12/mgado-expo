import React from 'react';
import { Text, TouchableOpacityProps } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../styles/theme';

type Props = TouchableOpacityProps & {
  title: string;
  icon: React.ComponentProps<typeof SimpleLineIcons>['name'];
}

export function BottomIcons({ title, icon, ...rest }: Props) {
  return (
    <>
      <SimpleLineIcons
        name={icon}
        size={15}
        color={theme.colors.secondary}
      />

      <Text style={styles.text}>
        {title}
      </Text>
    </>
  );
}